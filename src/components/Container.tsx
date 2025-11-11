import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      Container
      <div className="w-[85%] flex flex-col items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
};
