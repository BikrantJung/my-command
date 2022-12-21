"use client";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { supabase } from "../helpers/supabase";
import { useUserStore } from "../store/userStore";
import Button from "./ui/Button";
import CreateButton from "./ui/CreateButton";

const Navbar = () => {
  const user = useUserStore((state) => state.user);
  async function logOutUser() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.reload();
    }
  }
  return (
    <>
      <div className="fixed z-50 flex w-full  items-center justify-end gap-5 bg-white p-4 ">
        {!user.name ? (
          <Link href="/login" passHref>
            <Button>Login</Button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <div className="">{user.name}</div>
            <CreateButton />
            <Button onClick={logOutUser}>
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
