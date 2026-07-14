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
            (error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
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
