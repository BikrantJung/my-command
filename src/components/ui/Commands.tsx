"use client";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyIcon from "../../assets/copy.svg";
import CopiedIcon from "../../assets/copied.svg";
import Image from "next/legacy/image";
interface CommandsProps {
  text: string;
}

const Command = ({ text }: CommandsProps) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  return (
    <div className="flex flex-col bg-[#b2e1bc] shadow-dark">
      <div className="flex w-full items-center gap-2 p-2">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
        {!copied ? (
          <CopyToClipboard
            text={text}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <div className="ml-auto h-3 w-3  cursor-pointer">
              <ClipboardDocumentIcon className="icon" />
            </div>
          </CopyToClipboard>
        ) : (
          <div className="ml-auto h-3 w-3  cursor-pointer">
            <ClipboardDocumentCheckIcon className="icon" />
          </div>
        )}
      </div>
      <li className="group relative flex cursor-pointer items-center rounded-md  p-2 font-mono  text-sm  md:text-base">
        {text}
      </li>
    </div>
  );
};

export default Command;
