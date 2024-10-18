'use client'

import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState<boolean>(false);

  const formDivStyles = 'w-[25rem] flex justify-between'
  const formInputStyles = 'w-[15rem] text-black pl-2 rounded-md';

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log('logging in');

    const response = await axios.post<string>('/api/login', {username, password});

    console.log(response);
  }

  return (
    <div className='mx-auto mt-[20rem]'>
      <form className='space-y-4' onSubmit={handleLogin}>
        <div className={formDivStyles}>
          Email: <input type='email' className={formInputStyles} value={username} onChange={({target}) => setUsername(target.value)} />
        </div>
        <div className={formDivStyles}>
          Password: 
          <div className='flex justify-between px-2 bg-white border-white border-2'>
            <input type={show ? 'text' : 'password'} value={password} onChange={({target}) => setPassword(target.value)} />
            <button type='button' className='text-black' onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
          </div>
        </div>
        <button type='submit' className='border-black border-2'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;