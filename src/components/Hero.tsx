"use client";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import Image from "next/legacy/image";
import Coding from "../assets/coding.svg";
import Modal from "./Modal";
import Button from "./ui/Button";
import CreateButton from "./ui/CreateButton";
import LoginBtn from "./ui/LoginBtn";
import Link from "next/link";
import { useUserStore } from "../store/userStore";

const Hero = () => {
  const user = useUserStore((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex flex-1 flex-col-reverse items-center gap-8  px-4 sm:px-8 md:flex-row md:justify-between md:px-12 lg:px-16">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="text-center font-serif text-2xl font-bold lg:text-4xl">
          Too much random commands?{" "}
        </h1>
        <h1 className="font-serif text-lg lg:text-2xl">
          Save and group your commands here
        </h1>
        <div className="group relative flex max-w-sm cursor-pointer items-center rounded-md  bg-slate-200 p-4 font-mono text-sm md:text-base">
          npx create-react-app my-app
        </div>
        <div className="flex items-center gap-4 ">
          {user.user?.name ? (
            <CreateButton />
          ) : (
            <Link href="/login" passHref>
              <Button>Login</Button>
            </Link>
          )}
          <Modal isOpen={isOpen} closeModal={closeModal} />
          <a href="#preview">
            <Button intent={"neutral"}>
              <EyeIcon className="icon" />
              <p>View Preview</p>
            </Button>
          </a>
        </div>
      </div>
      <Image
        alt="Hero image"
        priority
        src={Coding}
        className="h-[60%] w-[60%] md:h-80 md:w-80"
      />
    </div>
  );
};

export default Hero;
