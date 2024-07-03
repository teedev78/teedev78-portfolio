import React from "react";
import { FaGithub } from "react-icons/fa6";

function Header() {
  return (
    <div className="h-[70px] p-4 flex flex-row justify-between items-center">
      <div className="text-4xl">
        <a href="/">Tee KP</a>
      </div>
      <div>
        <a href="https://github.com/teedev78" target="_blank">
          <FaGithub className="text-4xl" />
        </a>
      </div>
    </div>
  );
}

export default Header;
