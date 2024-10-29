'use client'

import axios from "axios";
import { useState } from "react";

interface ResponseProps {
  success: boolean;
  message: string;
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState<boolean>(false);

  const formDivStyles = 'w-[25rem] flex justify-between'
  const formInputStyles = 'w-[15rem] text-black pl-2';

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log('logging in');

    const response = await axios.post<ResponseProps>('/api/login', {username, password});

    console.log(typeof response);

    // if (response.success) {

    // }
  }

  return (
    <div className='mx-auto mt-[20rem]'>
      <form className='space-y-4' onSubmit={handleLogin}>
        <div className={formDivStyles}>
          Email: <input type='email' className={formInputStyles} value={username} onChange={({target}) => setUsername(target.value)} />
        </div>
        <div className={formDivStyles}>
          Password: 
          <div className='flex justify-between px-2 text-black bg-white border-white border-2'>
            <input type={show ? 'text' : 'password'} value={password} className='px-2' onChange={({target}) => setPassword(target.value)} />
            <button type='button' className='text-black' onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
          </div>
        </div>
        <div className='flex justify-end'>
          <button type='submit' className='border-black border-2 bg-white text-black w-[10rem]'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;