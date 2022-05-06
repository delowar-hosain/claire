import React, { useState } from "react";
const Variants: React.FC<{
  index: number;
  selectedIndex: number;
  option: any;
  setSelected: () => void;
}> = ({ index, option, selectedIndex, setSelected }) => {
  return (
    <span
      className={
        option.id === selectedIndex
          ? "btn btn-sm p-2 border border-4 m-1 border-warning"
          : "btn btn-sm p-2 border border-dark m-1"
      }
      onClick={() => {
        setSelected();
      }}
    >
      {option.title}
    </span>
  );
};

export default Variants;
