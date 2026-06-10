import React from "react";
import { useState } from "react";
import { useAuth } from "../Provider/AuthProvider";
// import { useApp } from "../Provider/AppProvider";


const Login = () => {

  const { auth, login, register, logout} = useAuth()
  // const { app, acceptable, unacceptable } = useApp()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async ()=>{
    try{
      if (!formData.email || !formData.password){
        alert('please fill in all fields')
        return;
      }
      await new Promise((resolve)=> setTimeout(resolve, 1000))
      login(formData);
    }catch(error){
      console.log('failed login, error')
      alert('Login failed. Please try again')
    }
  };
  return (
    <>
      <div>
        <h1>LOGIN</h1>
        <form onSubmit={loginHandler}>
          <div>
            <input
              type="email"
              name="password"
              value={formData.email}
              placeholder="email"
              onChange={(e) => setFormData({...formData, email:e.target.value})}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="*********"
              onChange={(e) => setFormData({...formData, password:e.target.value})}
            />
          </div>
          <div>
            <button type="submit">Enter</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
