import React from "react";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

export default function Login() {
  return (
    <>
      <h1>Login to your Account</h1>

      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
