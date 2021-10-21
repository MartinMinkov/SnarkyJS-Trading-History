import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Link href="/" passHref>
      <header className="w-full flex flex-col md:flex-row justify-between md:justify-center items-center cursor-pointer font-extralight">
        <Image
          src="/assets/zk-logo.svg"
          alt="zk logo"
          className="-mr-12 h-auto w-40"
        />
        <span className="flex flex-col ml-2 space-y-2">
          <h1 className="text-4xl lg:text-7xl uppercase	">Authenticated</h1>
          <p className="font-extralight text-2xl uppercase tracking-extrawidest">
            Proof-Of-Trade History
          </p>
        </span>
        <Image
          className="w-40 h-auto ml-8 mb-4"
          src="/assets/mina-logo.svg"
          alt="mina logo"
        />
      </header>
    </Link>
  );
};

export default Header;
