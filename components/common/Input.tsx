import React, { useState } from "react";

interface propTypes {
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ value = "", onChange }: propTypes) => {
  return (
    <div>
      <input
        className="w-full bg-gray-200 bg-opacity-50 shadow-md pl-6 pr-10 py-2 text-left text-black shadow-appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
