import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { PasswordInput } from '@/components/PasswordInput/PasswordInput';
import './LoginComponent.css';
import { useBoundedStore } from '../store';

const LoginComponent: React.FC = () => {
  const login = useBoundedStore((state) => state.login);
  const [error, setError] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    login.setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    login.setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('error!!!');
  };

  return (
    <div className="login-component glow-top flex flex-col px-4 py-4 gap-1 rounded-medium">
      <h1 className="title fancy-text shadow-md">Finance Fusion</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col px-4 gap-1">
        <Input
          isRequired
          label="Username"
          id="username"
          onInput={handleUsername}
        >
          Username
        </Input>
        <PasswordInput
          isRequired
          label="Password"
          id="password"
          onInput={handlePassword}
        >
          Password
        </PasswordInput>
        <div className="action flex flex-row justify-between px-4">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default LoginComponent;
