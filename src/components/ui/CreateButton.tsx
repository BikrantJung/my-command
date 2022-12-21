"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Modal from "../Modal";
import Button from "./Button";

interface CreateButtonProps {
  groupName?: string;
}
const CreateButton = ({ groupName }: CreateButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Button onClick={openModal}>
        <PlusIcon className="icon" />
        <p>Create</p>
      </Button>
      <Modal groupName={groupName} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default CreateButton;
