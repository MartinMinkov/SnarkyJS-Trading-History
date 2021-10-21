import React from "react";

interface propTypes {
  children: React.ReactNode;
}

const Layout = ({ children }: propTypes) => (
  <div className="w-full h-screen*2 px-6 md:px-auto md:px-16 pt-32 pb-48 bg-background bg-cover bg-no-repeat text-white">
    {children}
  </div>
);

export default Layout;
