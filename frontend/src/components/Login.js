import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { api } from '../api';

const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await api.login(formData)
            localStorage.setItem('token', res.token);  // Store token in local storage
            setIsLoggedIn(true);
            navigate('/chat');  // Redirect to chat page
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={onSubmit} className="login-form">
                    <h2 className="login-title">Login</h2>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email"
                        required
                        className="input-field"
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        required
                        className="input-field"
                    />
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
