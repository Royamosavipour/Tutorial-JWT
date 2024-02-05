import { useRouter } from "next/router";
import React, { useState } from "react";

function Index() {
  const router = useRouter();
  const [identifier, setIdentifire] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    const user = { identifier, password };

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    

    

    if (res.status === 200) {
      setIdentifire("");
      setPassword("");
      alert("Regestering is successfully");
      router.replace("/dashboard");
    } else if (res.status === 404) {
      alert("User Not Found :))");
    } else if (res.status === 422) {
      alert("username or password is not correct :((");
    } else if (res.status === 500) {
      alert("...");
      console.log(res.text())
    }
  };

  return (
    <div className="box">
      <h1 align="center">Login Form</h1>
      <form role="form" method="post">
        <div className="inputBox">
          <input
            type="text"
            autoComplete="off"
            required
            value={identifier}
            onChange={(e) => setIdentifire(e.target.value)}
          />
          <label>Username OR Email</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <input
          type="submit"
          className="register-btn"
          value="Sign In"
          onClick={signIn}
        />
      </form>
    </div>
  );
}

export default Index;
