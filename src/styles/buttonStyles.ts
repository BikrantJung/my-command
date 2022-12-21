import { cva } from "class-variance-authority";
export const buttonStyles = cva(
  "flex items-center justify-center shadow-dark gap-2 p-2  transition ease-in-out text-sm font-medium",
  {
    variants: {
      intent: {
        primary: "bg-sky-300 hover:bg-sky-300/90 text-gray-700",
        secondary: "bg-green-400 hover:bg-green-400/90",
        neutral: "bg-slate-200 hover:bg-slate-300/90",
        danger: "bg-rose-500 text-gray-800 hover:bg-rose-500/90",
      },
      position: {
        default: "",
        start: "mr-auto self-start",
        center: "mx-auto",
        end: "ml-auto self-end",
      },
      width: {
        full: "w-full ",
        auto: "w-auto",
      },
    },
    defaultVariants: {
      intent: "primary",
      position: "default",
      width: "auto",
    },
  }
);
