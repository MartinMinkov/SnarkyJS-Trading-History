import React from "react";

interface propTypes {
  copy: string;
}

const Button = ({ copy }: propTypes) => {
  return (
    <button className="flex w-full justify-center items-center px-3 py-2 space-y-1 bg-light-black hover:bg-opacity-75 border border-white">
      {copy}
    </button>
  );
};

export default Button;
