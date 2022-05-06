import React, { useState } from "react";
const Option: React.FC<{
  index: number;
  selectedOption: string;
  option: string;
  setSelected: () => void;
}> = ({ index, option, selectedOption, setSelected }) => {
  return (
    <span
      className={
        option === selectedOption
          ? "btn btn-sm p-2 border border-4 m-1 border-warning"
          : "btn btn-sm p-2 border border-dark m-1"
      }
      onClick={() => {
        setSelected();
      }}
    >
      {option}
    </span>
  );
};

export default Option;
