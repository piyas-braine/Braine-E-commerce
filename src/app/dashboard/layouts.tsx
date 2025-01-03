import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto flex flex-col px-0 h-screen">{children}</main>
  );
};

export default layout;
