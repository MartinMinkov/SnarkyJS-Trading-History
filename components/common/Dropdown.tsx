import React, { useState } from "react";

interface propTypes {
  items: string[];
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = ({ items, current, setCurrent }: propTypes) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="text-black">
      <button
        type="button"
        className="cursor-pointer w-full bg-gray-200 bg-opacity-50 shadow-md pl-3 pr-10 py-2 text-left"
        onClick={() => setSelected(!selected)}
      >
        <span className="flex items-center">
          <span className="ml-3 block truncate">{current}</span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
      </button>
      <ul
        className="absolute z-10 mt-1 bg-gray-200 shadow-lg max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        role="listbox"
      >
        {selected
          ? items.map((item) => {
              return (
                <li
                  className="hover:bg-gray-300 text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
                  key={item}
                  onClick={() => {
                    setCurrent(item);
                    setSelected(!selected);
                  }}
                >
                  <div className="flex items-center">
                    <span className="font-normal ml-3 block truncate">
                      {item}
                    </span>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Dropdown;
