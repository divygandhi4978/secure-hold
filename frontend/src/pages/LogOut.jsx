import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1200);
  },[]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-3/4">
        <h1 className="text-2xl font-semibold">User logged out.!</h1>
      </div>
    </div>
  );
}
