"use client";
import { BriefcaseIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="flex w-full items-center bg-white">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60  px-4">
            <Link href="/" className="block w-full py-5">
              <BriefcaseIcon className="w-10 h-10" />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`absolute right-4 top-5 rounded-lg ring-blue-800 lg:hidden`}
              >
                <MenuIcon
                  className={` ${navbarOpen ? "hidden" : ""} w-10 h-10 `}
                />
                <XIcon
                  className={` ${!navbarOpen ? "hidden" : ""} w-10 h-10 `}
                />
              </button>
              <nav
                className={` ${
                  !navbarOpen ? "hidden" : "animate-scale-up-ver-top"
                }  absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:max-w-full lg:static lg:block lg:shadow-none `}
              >
                <ul className="block lg:flex">
                  <li>
                    <Link
                      href="/"
                      className="flex py-2 text-base font-medium text-black hover:text-blue-600 lg:ml-12"
                    >
                      ホーム
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="flex py-2 text-base font-medium text-black hover:text-blue-600 lg:ml-12"
                    >
                      支払い方法
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="flex py-2 text-base font-medium text-black hover:text-blue-600 lg:ml-12"
                    >
                      機能
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                className="py-3 px-7 text-base font-medium text-black hover:text-blue-600"
              >
                ログイン
              </a>
              <a
                href="javascript:void(0)"
                className="rounded-lg bg-indigo-600 py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
              >
                新規登録
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
