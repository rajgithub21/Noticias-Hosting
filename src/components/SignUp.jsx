import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    const user = {
      username: username,
      email: email,
      password:  password,
      confirmPassword:  confirmPassword
    }

    localStorage.setItem('user', JSON.stringify(user));
  };

  






  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-black rounded-2xl mx-4 border-2 border-gray-600">
        <h1 className="text-4xl text-center text-white mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-3xl text-white mb-2">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 text-black font-semibold rounded-xl border-2 border-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-3xl text-white mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full font-semibold p-3 text-black rounded-xl border-2 border-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-3xl text-white mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 text-black rounded-xl border-2 border-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-3xl text-white mb-2">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 text-black rounded-xl border-2 border-black"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-green-400 w-full py-3 rounded-full text-2xl text-white" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;