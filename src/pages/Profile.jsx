import React from "react";
import { useAuth } from '../provider/AuthProvider';

const Profile = () => {
  const { auth } = useAuth();

  const idNumber = Math.floor(Math.random() * 1000)
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {auth?.fullName}</p>
      <p>Email: {auth?.email}</p>
      <p>id: {idNumber}</p>
      <img src="" alt="Profile" />
    </div>
  )
}

export default Profile