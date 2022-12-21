import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Button from "./ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
interface ModalProps {
  isOpen: boolean;
  groupName?: string;
  closeModal: () => void;
}
const Modal = ({ groupName, isOpen, closeModal }: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-900  text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between p-6 "
                >
                  <h2 className="text-2xl font-normal leading-6 text-gray-300">
                    Create a new command
                  </h2>
                  <Button intent="danger" onClick={closeModal}>
                    <XMarkIcon className="icon text-gray-300" />
                  </Button>
                </Dialog.Title>
                <hr className="border-gray-500" />
                <div className="flex flex-col px-6 pb-6">
                  <div className="my-4">
                    <h3 className="font-serif text-4xl text-gray-200">
                      {groupName}
                    </h3>
                    <input
                      type="text"
                      className="mt-4 mb-2 w-full bg-[#2d2b57] p-2 font-mono text-gray-200 outline-none placeholder:text-gray-300 focus:ring-1"
                      placeholder="Enter your command"
                    />
                  </div>

                  <div className="mt-4">
                    <Button position="end">Add</Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
