import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ButtonUp = () => {
  return (
    <div className="flex fixed bottom-0 left-4 rounded-full bg-black-300 w-14 items-center justify-center mb-3 hover:scale-[1.10] hover:bg-dark-200">
      <a href="#top" className="text-purple text-lg p-5 px-5">
        <FaArrowUp />
      </a>
    </div>
  );
};

export default ButtonUp;
