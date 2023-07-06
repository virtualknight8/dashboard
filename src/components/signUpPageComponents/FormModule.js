"use client"
import './FormModule.css'
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const FormModule = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleSignIn = () => {
    signIn('google');
  };

  return (
    <>
    
          <button onClick={handleGoogleSignIn}>

            Sign in with Google
          </button>
       
    </>
  );
};

export default FormModule;




