import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './components/admin/AuthContext';
// import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </AuthProvider>
);


