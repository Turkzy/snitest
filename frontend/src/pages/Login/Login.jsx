import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                setLoginStatus(''); // Clear any existing error messages
                if (data.usertype === 'Admin') {
                    setRedirecting(true);
                    setTimeout(() => {
                        window.location.href = '/Dashboard/LoadingScreen';
                    }, 1000);
                } else if (data.usertype === 'User') {
                    setRedirecting(true);
                    setTimeout(() => {
                        window.location.href = '/UserDashboard';
                    }, 1000);
                }
            } else if (response.status === 401) {
                const data = await response.json();
                switch(data.message) {
                    case "Invalid password":
                        setLoginStatus('failure_password');
                        setPassword('');
                        break;
                    case "Invalid username":
                        setLoginStatus('failure_username');
                        setUsername('');
                        break;
                    case "Invalid username and password":
                        setLoginStatus('failure_both');
                        setUsername('');
                        setPassword('');
                        break;
                    default:
                        setLoginStatus('error');
                        break;
                }
            } else {
                setLoginStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    className="username-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <div className="password-container">
                    <input
                        className="password-input"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                        <ion-icon name={showPassword ? "eye-off-outline" : "eye-outline"}></ion-icon>
                    </span>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {redirecting && <p className='success-message'>Login successful! Redirecting...</p>}
                {loginStatus === 'failure_password' && <p className="error-message">Invalid password.</p>}
                {loginStatus === 'failure_username' && <p className="error-message">Invalid username.</p>}
                {loginStatus === 'failure_both' && <p className="error-message">Invalid username and password.</p>}
                {loginStatus === 'error' && <p className="error-message">An error occurred. Please try again later.</p>}
            </form>
        </div>
    );
};

export default Login;
