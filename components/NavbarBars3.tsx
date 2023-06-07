"use client";

import Link from "next/link";
import { PuzzleIcon } from "@heroicons/react/outline";
import { KeyIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Button } from "@tremor/react";

function NavbarBars3() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      Navbar サンプル（ハンバーガー）
      <nav className="flex items-center justify-between flex-wrap p-6">
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
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              // console.log(isOpen);
            }}
            className=""
          >
            <MenuIcon className={`w-5 h-5 ${isOpen ? "block" : "hidden"}`} />
            <XIcon className={`w-5 h-5  ${isOpen ? "hidden" : "block"}`} />
          </button>
        </div>
        <div
          className={`w-full max-lg:text-right block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow ">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              href="/"
            >
              <p>1つ目</p>
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              href="/"
            >
              2つ目
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              href="/"
            >
              3つ目
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              href="/"
            >
              4つ目
            </Link>
          </div>
          <Button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
            ボタン押下 テスト
          </Button>
        </div>
      </nav>
    </>
  );
}

export default NavbarBars3;
