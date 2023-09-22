import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="flex px-4 py-3 bg-yellow-500 rounded w-full" {...props}>
      {children}
    </button>
  );
};
