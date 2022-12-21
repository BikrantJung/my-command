import { cva } from "class-variance-authority";

export const toastStyles = cva(
  "absolute bottom-0 left-0 m-2 flex items-center gap-2 rounded-md  p-4 text-white",
  {
    variants: {
      intent: {
        error: "bg-red-500 ",
        success: "bg-blue-500 ",
        warning: "bg-yellow-500",
      },
    },
    defaultVariants: {
      intent: "error",
    },
  }
);
