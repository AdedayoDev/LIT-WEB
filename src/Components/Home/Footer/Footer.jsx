import React from "react";
import logo from "../../../Assets/logo_180_180.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full flex flex-col items-center justify-center text-white  bg-[#a53437] h-auto mt-12">
      <div className="w-11/12 mx-auto ">
        <div className="w-11/12 mx-auto flex flex-col gap-8 lg:gap-0  lg:flex-row items-center justify-between px-32 py-10 text-white">
          {/*  courses*/}
          <div className="flex flex-col items-center lg:items-start text-2xl lg:text-base gap-4">
            <h2 className="text-3xl font-semibold uppercase lg:text-xl">courses</h2>
            <ul className="text-center lg:text-start text-xl lg:text-base">
              <li>
                <a href="">Cooperate</a>
              </li>
              <li>
                <a href="">Individual</a>
              </li>
              <li>
                <a href="">Online</a>
              </li>
            </ul>
          </div>
          {/* Address */}
          <div className="flex flex-col items-center lg:items-start text-2xl lg:text-base gap-4">
            <h2 className="text-3xl font-semibold uppercase lg:text-xl">contacts</h2>
            <div className="text-center lg:text-start text-xl lg:text-base">
              <p>128 Itire Rd, Lawanson Street, Surulere</p>
              <p>Lagos, Nigeria.</p>
              <p>+234-814-444-3523</p>
              <a href="support@lampnets.com">support@lampnets.com</a>
            </div>
          </div>
          {/* LINK */}
          <div className="flex flex-col items-center lg:items-start text-2xl lg:text-base gap-4">
            <div>
              <h1 className="text-3xl font-semibold uppercase lg:text-xl">Links</h1>
            </div>
            <div className="text-center lg:text-start text-xl lg:text-base">
              <p>Home</p>
              <p>privacy policy</p>
              <p>about us</p>
              <p>faq</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5  lg:py-16">
        {/* Logo and social icons */}
        <div className="flex flex-col lg:flex-row items-center gap-5">
          {/* company Logo */}
          <div className="">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="" className="w-10 h-10" />
              <p className="text-white text-3xl font-sans font-semibold ">
                LIT
              </p>
            </a>
          </div>
          {/* Social Icon */}
          <div className="flex gap-8">
            {/* facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={4}
              >
                <path
                  strokeDasharray={24}
                  strokeDashoffset={24}
                  d="M17 4L15 4C12.5 4 11 5.5 11 8V20"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="24;0"
                  ></animate>
                </path>
                <path strokeDasharray={12} strokeDashoffset={12} d="M8 12H15">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="12;0"
                  ></animate>
                </path>
              </g>
            </svg>

            {/* Twitter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518a3.3 3.3 0 0 0 1.447-1.817a6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429a3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218a3.2 3.2 0 0 1-.865.115a3 3 0 0 1-.614-.057a3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
              ></path>
            </svg>

            {/* Instagram */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path
                  strokeDasharray={66}
                  strokeDashoffset={66}
                  d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="66;132"
                  ></animate>
                </path>
                <path
                  strokeDasharray={26}
                  strokeDashoffset={26}
                  d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.4s"
                    values="26;0"
                  ></animate>
                </path>
              </g>
              <circle
                cx={17}
                cy={7}
                r={1.5}
                fill="currentColor"
                fillOpacity={0}
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.1s"
                  dur="0.4s"
                  values="0;1"
                ></animate>
              </circle>
            </svg>

            {/* LinkedLn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.75 1.875a2.125 2.125 0 1 0 0 4.25a2.125 2.125 0 0 0 0-4.25m-2 6A.125.125 0 0 0 2.625 8v13c0 .069.056.125.125.125h4A.125.125 0 0 0 6.875 21V8a.125.125 0 0 0-.125-.125zm6.5 0A.125.125 0 0 0 9.125 8v13c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-7a1.875 1.875 0 1 1 3.75 0v7c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-8.62c0-2.427-2.11-4.325-4.525-4.106a7.2 7.2 0 0 0-2.169.548l-1.306.56V8a.125.125 0 0 0-.125-.125z"
              ></path>
            </svg>
          </div>
        </div>
        {/* Copyrights */}
        <div  className="text-center py-4 lg:text-start lg:py-0">
          <p>Copyright &copy; {year} Lampnet Solutions. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
