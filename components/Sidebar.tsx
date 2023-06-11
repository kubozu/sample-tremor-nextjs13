import { HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col items-center md:flex-row">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          ★イメージ
        </a>
        <div className="flex flex-wrap items-center text-base justify-center md:ml-auto">
          <a className="mr-5">First Link</a>
          <a className="mr-5">Second Link</a>
          <a className="mr-5">Third Link</a>
          <a className="mr-5">Fourth Link</a>
        </div>
        <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">
          Click Me
        </button>
      </div>
    </>
  );
}

export default Sidebar;
