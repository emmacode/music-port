import React from "react";

import type { ReactNode } from "react";

import { Footer } from "./Footer";

interface IProps {
  children: ReactNode;
}

export const PageLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xl xl:mx-auto md:mx-8 mx-4">
      <div>{children}</div>
      <Footer />
    </div>
  );
};
