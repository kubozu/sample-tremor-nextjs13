"use client";

import Link from "next/link";
import { PuzzleIcon } from "@heroicons/react/outline";
import { KeyIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

function NavbarBars3() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      Navbar サンプル（ハンバーガー）
      <nav>
        {/* 企業ロゴ等  */}
        <Link
          className="flex items-center font-bold mb-4 md:mb-0 text-gray-700 bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl p-5"
          href="/"
        >
          <PuzzleIcon className="w-5 h-5" />
          <p>ロゴ等を入れる</p>
          <KeyIcon className="w-5 h-5" />
        </Link>
        {/** ハンバーガーメニュー */}
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            <MenuIcon className="w-5 h-5" />
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavbarBars3;
