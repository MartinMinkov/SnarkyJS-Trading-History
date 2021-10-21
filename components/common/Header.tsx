import React from "react";
import Link from "next/link";
import Image from "next/image";
import ZKLogo from "../../public/assets/zk-logo.svg";
import MinaLogo from "../../public/assets/mina-logo.svg";

const Header = () => {
  return (
    <Link href="/" passHref>
      <header className="w-full flex flex-col md:flex-row justify-between md:justify-center items-center cursor-pointer font-extralight">
        <div className="-mr-12 h-auto w-40 relative">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
        <span className="flex flex-col ml-2 space-y-2">
          <h1 className="text-4xl lg:text-7xl uppercase	">Authenticated</h1>
          <p className="font-extralight text-2xl uppercase tracking-extrawidest">
            Proof-Of-Trade History
          </p>
        </span>
        <div className="w-40 h-auto ml-8 mb-4 relative">
          <Image src={MinaLogo} alt="mina logo" />
        </div>
      </header>
    </Link>
  );
};

export default Header;
