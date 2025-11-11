import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleBtn: () => void;
}

export const Button = ({ children, handleBtn }: Props) => {
  return (
    <button
      className="border rounded-md p-2 hover:text-fuchsia-800 hover:border-fuchsia-800 hover:cursor-pointer text-md"
      onClick={handleBtn}
    >
      {children}
    </button>
  );
};
