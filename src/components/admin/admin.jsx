import React, { useState } from "react";
import { BASEURL } from "../../BaseURL/BaseURL";
import { FiEye, FiEyeOff, FiMail, FiLock, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useAuth } from "./AuthContext";
import "./admin.css";

const AdminLogin = () => {
  // Step 1 state — email and password fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step 2 state — only shown when the backend says 2FA is required
  const [totpRequired, setTotpRequired] = useState(false);
  const [adminId, setAdminId] = useState(null);
  const [totpToken, setTotpToken] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  // ── Step 1: Email + password login ──────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${BASEURL}/api/v1/auth/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.requireTotp) {
        setAdminId(res.data.adminId);
        setTotpRequired(true);
        return;
      }

      localStorage.setItem("token", JSON.stringify(res.data.access));
      localStorage.setItem("role", res.data.role);
      login(res.data.role);
      toast.success("Admin Login Successfully");
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Step 2: TOTP verification ────────────────────────────────────────────────
  const handleTotpSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post(`${BASEURL}/api/v1/auth/totp/login`, {
        adminId,
        token: totpToken,
      });

      localStorage.setItem("token", JSON.stringify(res.data.access));
      localStorage.setItem("role", res.data.role);
      login(res.data.role);
      toast.success("Admin Login Successfully");
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid code");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Admin Login — Elonatech</title>
      </Helmet>

      {/* Hero */}
      <div className="alogin-hero">
        <div className="alogin-hero-overlay">
          <h1 className="alogin-hero-title">
            Welcome to <span className="alogin-hero-accent">Elonatech</span> Admin
          </h1>
          <p className="alogin-hero-subtitle">
            Log in to manage your content and platform
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="alogin-section">
        <div className="alogin-card">
          {totpRequired ? (
            // ── Step 2: 6-digit code form ──────────────────────────────────
            <form onSubmit={handleTotpSubmit} className="alogin-form">
              <h4 className="alogin-title">Two-Factor Authentication</h4>
              <p className="alogin-subtitle">
                Open Authenticator and enter the 6-digit code
              </p>

              <div className="alogin-field">
                <label htmlFor="totp" className="alogin-label">
                  Authentication Code
                </label>
                <div className="alogin-input-wrap">
                  <FiShield className="alogin-input-icon" />
                  <input
                    type="text"
                    id="totp"
                    className="alogin-input alogin-input--code"
                    placeholder="000000"
                    maxLength={6}
                    value={totpToken}
                    onChange={(e) => setTotpToken(e.target.value)}
                    autoFocus
                    required
                  />
                </div>
              </div>

              <button type="submit" className="alogin-submit" disabled={isSubmitting}>
                {isSubmitting ? "Verifying..." : "Verify"}
              </button>
            </form>
          ) : (
            // ── Step 1: Normal email + password form ───────────────────────
            <form onSubmit={handleSubmit} className="alogin-form">
              <h4 className="alogin-title">Administrator Sign In</h4>
              <p className="alogin-subtitle">
                Enter your credentials to access the dashboard
              </p>

              <div className="alogin-field">
                <label htmlFor="email" className="alogin-label">
                  Email Address
                </label>
                <div className="alogin-input-wrap">
                  <FiMail className="alogin-input-icon" />
                  <input
                    type="email"
                    id="email"
                    className="alogin-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@elonatech.com.ng"
                    required
                  />
                </div>
              </div>

              <div className="alogin-field">
                <label htmlFor="password" className="alogin-label">
                  Password
                </label>
                <div className="alogin-input-wrap">
                  <FiLock className="alogin-input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="alogin-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="alogin-eye-btn"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <button type="submit" className="alogin-submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In to Dashboard"}
              </button>

              <div className="alogin-notice">
                <FiShield className="alogin-notice-icon" />
                <span>This is a secure system. Admin actions are logged for security and accountability.</span>
              </div>
            </form>
          )}
        </div>

        <p className="alogin-footnote">
          © {new Date().getFullYear()} Elonatech Admin. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default AdminLogin;
