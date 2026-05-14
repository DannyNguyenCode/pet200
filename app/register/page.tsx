"use client";

import RegisterForm from "@components/RegisterForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const router = useRouter();
  const bcrypt = require("bcryptjs");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [familiarName, setFamiliarName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const registerNewUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          username: username.trim(),
          familiarName: familiarName.trim(),
          image: "",
          loginType: "credentials",
          password: hashedPassword,
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        toast.error(text || "Registration failed");
        return;
      }
      setEmail("");
      setPassword("");
      setConfirm("");
      setUsername("");
      setFamiliarName("");
      router.push("/login/SR");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterForm
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirm={confirm}
      setConfirm={setConfirm}
      familiarName={familiarName}
      setFamiliarName={setFamiliarName}
      onSubmit={registerNewUser}
      ToastContainer={<ToastContainer theme="dark" position="top-center" />}
      isLoading={isLoading}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      showConfirm={showConfirm}
      setShowConfirm={setShowConfirm}
    />
  );
}
