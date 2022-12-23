"use client";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Session } from "next-auth";
import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useUserStore } from "../store/userStore";
import Button from "./ui/Button";
import CreateButton from "./ui/CreateButton";

const Navbar = () => {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <div className="fixed z-50 flex w-full  items-center justify-end gap-5 bg-white p-4 ">
        {!user.user?.name ? (
          <Link href="/login" passHref>
            <Button>Login</Button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-8 overflow-hidden rounded-full ">
              <Image
                priority
                src={user.user?.image!}
                layout="fill"
                alt="Image"
              />
            </div>
            <CreateButton />
            <Button onClick={() => signOut()}>
              <Squares2X2Icon className="icon" />
              <p>Logout</p>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
