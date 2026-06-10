import React, { useState } from "react";
// import { useAuth } from "../Provider/AuthProvider";
// import { useApp } from "../Provider/AppProvider";

export default () => {
  // const { login, register, logout} = useAuth()
  // const { app, acceptable, unacceptable } = useApp()

  const [application, setApplication] = useState({
    fullname: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    occupation: "",
  });

  function handleChange(e) {
    setApplication({ ...application, [e.target.name]: e.target.value });
  }

  const validation = (password, confirmPassword) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("Password must contain at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number");
    }
     if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must contain at least one symbol");
    }
    if (password !== confirmPassword){
        errors.push("Passwords do not match");
    }
    return errors;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      !application.fullname||
      !application.age||
      !application.password||
      !application.confirmPassword||
      !application.occupation
    ) {
      alert("Please fill in all fields");
      return;
    }

    const errors = validation(formData.password, formData.confirmPassword);
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    try {
      await Promise.resolve(() => setTimeout(() => {}, 5000)); 
      const res = await register(formData);
      if (res.success) {
        navigate("/profile");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div>
        <h1>APPLICATION PAGE</h1>
        <form onSubmit={() => console.log("form submitted")}>
          <div>
            <label htmlFor="fullname"></label>
            <input
              id="fullname"
              name="fullname"
              placeholder="fullname"
              value={application.fullname}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              name="age"
              placeholder="age"
              value={application.age}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              name="email"
              placeholder="@gmail.com"
              value={application.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              name="password"
              placeholder="password"
              value={application.password}
              onChange={handleChange}
              type="password"
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              name="confirmPassword"
              placeholder="confirmPassword"
              value={application.confirmPassword}
              onChange={handleChange}
              type="password"
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              name="occupation"
              placeholder="occupation"
              value={application.occupation}
              onChange={handleChange}
              type="text"
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

// React routers on reactrouter documentation
// validation
// Authentication
// authorization RBAC
