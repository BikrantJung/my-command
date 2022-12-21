"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import { previewData } from "./data";
import Modal from "./Modal";
import Button from "./ui/Button";
import Command from "./ui/Commands";

interface IPreviewData {
  id: number;
  groupName: string;
  commands: Array<ICommands>;
}
type ICommands = {
  id: number;
  text: string;
};
interface PreviewProps {
  children: React.ReactNode;
}

const Preview = ({ children }: PreviewProps) => {
  return (
    <div className=" min-h-screen border p-8 md:p-0" id="preview">
      {/* Small screens */}
      <div className="md:hidden">
        <div className=" grid grid-cols-1 items-start justify-center gap-4 ">
          {previewData.map((item) => {
            return <PreviewSection key={item.id} {...item} />;
          })}
        </div>
      </div>
      {/* Medium screens */}
      <div className="hidden h-full  md:flex">
        <div className="flex w-56 flex-col shadow-md  ">
          <div className="mb-4 flex items-center justify-between border-b border-gray-300 p-2">
            <h1 className="text-2xl">Groups</h1>
            <Button>
              <PlusIcon className="icon" />
            </Button>
          </div>

          <div className="flex flex-col ">
            <h3 className="cursor-pointer bg-[#f8dffa] p-2 shadow-dark ">
              React JS
            </h3>
            <h3 className="cursor-pointer p-2 ">Typescript</h3>
            <h3 className="cursor-pointer p-2 ">Typescript Project</h3>
            <h3 className="cursor-pointer truncate p-2 ">
              Typescript Project jsdkhf dsj Project jsdkhf dsj
            </h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-gray-300 p-2">
            <h1 className=" text-2xl font-bold">React JS</h1>
            <Button>Add new command</Button>
          </div>
          <div className=" m-4  flex flex-col items-start gap-4">
            {/* {previewData.map((item) => {
              return <PreviewSection key={item.id} {...item} />;
            })} */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
const PreviewSection = ({ commands, groupName }: IPreviewData) => {
  let user = true;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-8 flex flex-col ">
      <ul className="flex flex-col gap-2 ">
        {commands.map(({ id, text }) => {
          return <Command key={id} text={text} />;
        })}
      </ul>
    </div>
  );
};

export default Preview;
