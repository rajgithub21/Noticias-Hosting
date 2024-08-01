import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);

    const user = JSON.parse(localStorage.getItem("user"))

    if(username === user.username && password === user.password){
      alert("login successful")
    }
    else{
      alert("Enter Correct Information")
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-black rounded-2xl mx-4 border-2 border-gray-600">
        <h1 className="text-4xl text-center text-white mb-8">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-3xl text-white mb-2">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 text-black rounded-xl border-2 border-black"
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
          <div className="flex items-center justify-center">
            <button className="bg-green-400 w-full py-3 rounded-full text-2xl text-white" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
