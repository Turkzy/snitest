import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            if (response.ok) {
                setLoginStatus('success');
                // Redirect to admin page after successful login
                window.location.href = '/Dashboard';
            } else {
                setLoginStatus('failure');
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginStatus('error');
        }
    };

    return (
        <div className="auth">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input className="username-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <input className="password-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Login</button>
                {loginStatus === 'failure' && <p className="error-message">Invalid username or password.</p>}
                {loginStatus === 'error' && <p className="error-message">An error occurred. Please try again later.</p>}
            </form>
        </div>
    );
};

export default Login;
