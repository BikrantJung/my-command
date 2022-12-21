import React, { useEffect, useState } from "react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { toastStyles } from "../../styles/toastStyles";
import { VariantProps } from "class-variance-authority";

type ButtonVariantProps = VariantProps<typeof toastStyles>;
interface ToastProps extends ButtonVariantProps {
  open: boolean;
  msg: string;
}
const Toast = ({ open, msg, intent }: ToastProps) => {
  const [isOpen, setIsOpen] = useState(open);
  console.log("Is open", isOpen, open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const slideIn = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        mass: 0.4,
        damping: 8,
        sriffness: 100,
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
    },
  };
  return (
    <>
      <AnimatePresence
      // initial={false}
      // exitBeforeEnter={true}
      // onExitComplete={() => null}
      >
        {isOpen && (
          <motion.div
            key="modal"
            className={toastStyles({ intent })}
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {intent === "error" ? (
              <ExclamationCircleIcon className="icon" />
            ) : intent === "success" ? (
              <CheckCircleIcon className="icon" />
            ) : (
              <ExclamationTriangleIcon className="icon" />
            )}
            <p className="text-sm">{msg}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Toast;
