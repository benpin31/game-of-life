import { DetailedHTMLProps, FormHTMLAttributes } from "react";

type FormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form
      {...props}
      className="flex flex-col gap-4  border-2 border-yellow-500 rounded p-4"
    >
      {children}
    </form>
  );
};
