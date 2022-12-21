"use client";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "../../helpers/supabase";
import Button from "./Button";
import CreateButton from "./CreateButton";
interface LoginBtnProps {
  user?: string;
}

function LoginBtn({ user }: LoginBtnProps) {
  console.log(user);
  const [user1, setUser] = useState<string | undefined>("");
  const [data, setData] = useState("");
  async function grabUser() {
    const { data } = await supabase.auth.getUser();

    if (data.user?.user_metadata) {
      setUser(data.user?.email?.split("@")[0]);
    }
  }
  console.log(user1);
  grabUser();
  async function logOutUser() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.reload();
    }
  }
  grabUser();
  return (
    <>
      {!user1 ? (
        <Link href="/login" passHref>
          <Button>Login</Button>
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <div className="">{user1}</div>
          <CreateButton />
          <Button onClick={logOutUser}>
            <Squares2X2Icon className="icon" />
            <p>Logout</p>
          </Button>
        </div>
      )}
    </>
  );
}

export default LoginBtn;
