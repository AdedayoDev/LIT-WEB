import React, { useState } from "react";
import LITLogo from "../../../Assets/logo_180_180.png";
import Dropdown from "./Dropdown";

const HomeNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    {
      title: "Individual Courses",
      items: [
        {
          title: "Cloud Computing",
          subItems: [
            { title: "AZURE Training", href: "/azure-training" },
            { title: "HUAWEI Cloud Training", href: "/huawei-cloud-training" },
          ],
        },
        {
          title: "Data Analytics",
          subItems: [
            { title: "Business Intelligence", href: "/business-intelligence" },
          ],
        },
        {
          title: "Design",
          subItems: [{ title: "UI/UX Design", href: "ui/ux-design" }],
        },
        {
          title: "Development",
          subItems: [
            { title: "Frontend Development", href: "/frontend-development" },
            { title: "Backend Development", href: "/backend-development" },
            {
              title: "Full Stack Development",
              href: "/full-stack-development",
            },
          ],
        },
        {
          title: "Business",
          subItems: [
            { title: "Sales Intelligence", href: "/sales-intelligence" },
          ],
        },
      ],
    },
    {
      title: "Cooperate Courses",
      items: [
        {
          title: "Data Analytics",
          subItems: [
            { title: "Business Intelligence", href: "/business-intelligence" },
          ],
        },
      ],
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#a53437] w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <a href="/" className="flex items-center gap-3">
              <img src={LITLogo} alt="Logo" className="w-10 h-10" />
              <h1 className="text-white text-3xl font-sans">LIT</h1>
            </a>
          </div>
          <div className="flex items-center gap-8">
            <div>
              {/* Hamburger Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  {isOpen ? (
                    <span className="text-3xl">+</span>
                  ) : (
                    <span className="text-3xl">&#9776;</span> // Hamburger icon
                  )}
                </button>
              </div>

              {/* Menu Items - Hidden on Mobile */}
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } md:flex items-center space-x-2 absolute md:static bg-[#a53437] w-full left-0 top-20 rounded-xl md:top-0 z-10`}
              >
                {menuItems.map((menu, index) => (
                  <Dropdown key={index} title={menu.title} items={menu.items} />
                ))}
                {/* <div>
                  <a
                    href="/e-learning"
                    className="text-white text-lg hover:text-[#a53437] hover:bg-white px-3 py-2 rounded-md font-medium"
                  >
                    E-learning
                  </a>
                </div> */}
                <div>
                  <a
                    href="/about"
                    className="text-white text-lg hover:text-[#a53437] hover:bg-white px-3 py-2 rounded-md font-medium"
                  >
                    About LIT
                  </a>
                </div>
                <div>
                  <a
                    href="/hdci"
                    className="text-white text-lg hover:text-[#a53437] hover:bg-white px-3 py-2 rounded-md font-medium"
                  >
                    HDCI
                  </a>
                </div>
                <div>
                  <a
                    href="/faq"
                    className="text-white text-lg hover:text-[#a53437] hover:bg-white px-3 py-2 rounded-md font-medium"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>

            {/* Search Icon */}
            <div className="flex items-center">
              <a href="/search" className="text-white hover:text-gray-200">
                <i className="lni lni-search text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
