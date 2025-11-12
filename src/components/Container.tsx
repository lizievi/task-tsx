import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[60%] flex flex-col items-center justify-center p-6 gap-6">
        {children}
      </div>
    </div>
  );
};
