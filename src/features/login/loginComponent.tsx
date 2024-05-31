import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { setPassword, setUsername } from './loginSlice';

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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Username" onInput={handleUsername}>Username</Input>
                <Input placeholder="Password" type="pasword" onInput={handlePassword}>Password</Input>
                <Button>Login</Button>
                <Button>Register</Button>
            </form>
        </div>
    );
};

export default LoginComponent;