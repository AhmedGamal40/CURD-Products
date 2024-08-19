import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}
const Input = ({...rest  }: IProps) => {
  return (
    <input
      className="w-full border shadow-md  focus:border-indigo-500 focus:outline-none  rounded-md p-2 text-md text-gray-500 ring-1 focus:ring-4 "
      {...rest}
    />
  );
};

export default Input;