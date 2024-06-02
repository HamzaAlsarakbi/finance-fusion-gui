import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { setPassword, setUsername } from './loginSlice';
import { PasswordInput } from '@/components/PasswordInput/PasswordInput';
import './LoginComponent.css';

const LoginComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(event.target.value.trim()));
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value.trim()));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('login weeee');
  };

  return (
    <div className='login-component glow-top flex flex-col px-4 gap-1 rounded-medium'>
      <h1>Al Ameen</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col px-4 gap-1'>
        <Input
          isRequired
          label='Username'
          id='username'
          onInput={handleUsername}
        >
          Username
        </Input>
        <PasswordInput
          isRequired
          label='Password'
          id='password'
          onInput={handlePassword}
        >
          Password
        </PasswordInput>
        <div className='action flex flex-row justify-between px-4'>
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
