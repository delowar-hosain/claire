import React, { useState } from "react";
const CategoryItem: React.FC<{
  index: number;
  category: any;
  handleCategoryClick: (parentt: number, name: string) => void;
}> = ({ index, category, handleCategoryClick }) => {
  return (
    <li
      className="list-group-item list-group-item-action"
      onClick={() => handleCategoryClick(category.id, category.name)}
    >
      {category.name}
    </li>
  );
};

export default CategoryItem;
