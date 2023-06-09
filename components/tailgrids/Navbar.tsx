"use client";
import { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="flex w-full items-center bg-white">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="javascript:void(0)" className="block w-full py-5">
              <img
                src="assets/images/logo/logo.svg"
                alt="logo"
                className="w-full"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`${
                  navbarOpen ? "navbarTogglerActive" : ""
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                id="navbarToggler"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                className={` ${!navbarOpen ? "hidden" : ""}
                id="navbarCollapse"
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none `}
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                className="py-3 px-7 text-base font-medium text-dark hover:text-primary"
              >
                Login
              </a>
              <a
                href="javascript:void(0)"
                className="rounded-lg bg-primary py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
