import { ComponentProps } from "react";

interface IButton extends ComponentProps<"button"> {}

const Button = ({ children, ...props }: IButton) => {
  return (
    <button
      {...props}
      className="hover:opacity-80 rounded-md bg-slate-800 px-8 py-4 text-white transition-all duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
