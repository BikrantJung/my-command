"use client";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "./Button";
import CreateButton from "./CreateButton";
interface LoginBtnProps {
  user?: string;
}

function LoginBtn({ user }: LoginBtnProps) {
  let user1 = true;
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
          <Button onClick={() => signOut()}>
            <Squares2X2Icon className="icon" />
            <p>Logout</p>
          </Button>
        </div>
      )}
    </>
  );
}

export default LoginBtn;
