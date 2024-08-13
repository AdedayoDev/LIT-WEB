// src/components/Dropdown.js
import React, { useState } from "react";
import NestedDropdown from "./NestedDropdown";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#"
        className="text-white text-lg hover:text-gray-200 px-3 py-2 rounded-md font-medium"
      >
        {title}
      </a>

      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            {items.map((item, index) => (
              <NestedDropdown key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
