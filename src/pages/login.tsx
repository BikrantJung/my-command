import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { useRouter } from "next/router";
import { supabase } from "../helpers/supabase";
import Toast from "../components/ui/Toast";
import { useUserStore } from "../store/userStore";
type toastType = "error" | "warning" | "success";

const LoginPage = () => {
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toastType, setToastType] = useState<toastType>("error");
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (error) {
        setError("");
      }
    }, 5000);
    return () => clearTimeout(timeout);
  }, [error]);
  async function handleUserLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setToastType("warning");
      setError("All fields are required");
      return;
    }
    if (password.length < 8) {
      setToastType("warning");
      setError("Password should be at least 8 characters");

      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setToastType("error");
      setError(error.message);
      return;
    }
    console.log("Logged in Data", data.user);
    const userData = {
      email: data.user?.email || "",
      name: data.user?.email?.split("@")[0] || "",
    };
    setEmail("");
    setPassword("");
    setError("");
    setUser(userData);
    router.replace("/");
  }
  return (
    <div className="align-center flex min-h-screen justify-center ">
      <form
        onSubmit={handleUserLogin}
        className="flex  flex-col items-start justify-center gap-4 "
      >
        <h1 className="w-full text-center font-serif text-3xl">Login</h1>
        <Button intent={"neutral"} width="full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <p>Continue with Google</p>
        </Button>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-800">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-gray-800">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" width={"full"} intent="secondary">
          Login
        </Button>
        <div className="flex w-full flex-col items-center gap-2">
          <p className="cursor-pointer text-sm text-gray-600 underline hover:text-gray-900">
            Forgot password?
          </p>
          <p className=" text-sm text-gray-600 ">
            Not a member?{" "}
            <Link href="signup">
              <span className="cursor-pointer underline  hover:text-gray-900">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </form>
      <Toast open={!!error} msg={error} intent={toastType} />
    </div>
  );
};

export default LoginPage;
