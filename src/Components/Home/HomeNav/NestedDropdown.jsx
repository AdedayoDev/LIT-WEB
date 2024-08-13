// src/components/NestedDropdown.js
import React, { useState } from "react";

const NestedDropdown = ({ title, subItems }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        {title}
      </a>

      {open && subItems && (
        <div className="absolute left-full top-0 mt-0 ml-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {subItems.map((subItem, index) => (
            <a
              key={index}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {subItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
