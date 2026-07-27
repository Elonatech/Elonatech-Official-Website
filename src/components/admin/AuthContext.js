import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASEURL } from '../../BaseURL/BaseURL';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(localStorage.getItem("role") || "");

    useEffect(() => {
        const loggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
        setIsAuthenticated(loggedIn);
    }, []);

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const original = error.config;
                const status = error.response?.status;
                const url = original?.url || "";

                // Only a 401 can mean "access token expired" — try the refresh
                // token first instead of logging out immediately. 403 means
                // forbidden (wrong role etc.), not an expired token, so that
                // still logs out right away. Skip retrying the refresh/login
                // endpoints themselves to avoid a loop.
                const isAuthEndpoint = url.includes("/auth/refresh") || url.includes("/auth/login");

                if (status === 401 && !original._retried && !isAuthEndpoint) {
                    original._retried = true;
                    try {
                        const res = await axios.post(
                            `${BASEURL}/api/v1/auth/refresh`,
                            {},
                            { withCredentials: true }
                        );
                        const newToken = res.data.access;
                        localStorage.setItem("token", JSON.stringify(newToken));
                        original.headers["x-access-token"] = newToken;
                        return axios(original);
                    } catch (refreshError) {
                        logout();
                        window.location.href = '/login';
                        return Promise.reject(refreshError);
                    }
                }

                if (status === 401 || status === 403) {
                    logout();
                    window.location.href = '/login';
                }
                return Promise.reject(error);
            }
        );
        return () => axios.interceptors.response.eject(interceptor);
    }, []);

    const login = (role) => {
        setIsAuthenticated(true);
        setRole(role);
        localStorage.setItem("isAdminLoggedIn", "true");
        localStorage.setItem("role", role);
    };


    const logout = async () => {
        try {
            await axios.post(`${BASEURL}/api/v1/auth/logout`, {}, { withCredentials: true });
        } catch (_) {}
        setIsAuthenticated(false);
        localStorage.removeItem('isAdminLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem("role");
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
