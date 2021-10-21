import React from "react";

const Spinner = ({ loading = false }) => {
  const spinnerBaseClassName =
    "rounded-full border-4 border-gray-200 border-transparent h-16 w-16 mb-3";

  const spinnerClassName = loading
    ? `loader ${spinnerBaseClassName}`
    : spinnerBaseClassName;

  return <div className={spinnerClassName} />;
};

export default Spinner;
