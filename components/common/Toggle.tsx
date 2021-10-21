import React from "react";

interface propTypes {
  onClick: () => void;
  toggled: boolean;
}

const Toggle = (props: propTypes) => {
  const { onClick, toggled } = props;
  return (
    <div className="flex items-center justify-center mx-4">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={toggled}
            onClick={onClick}
            onChange={() => {}}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
