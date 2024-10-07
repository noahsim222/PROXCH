import React, { useEffect, useRef } from "react";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMobileMenu(false)
      }
    }
    if (mobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }

  }, [mobileMenu])

  return (
    <nav className="flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 max-w-[1280px] w-full px-5 sm:px-8 md:px-16 py-5 z-10 bg-gray-100 shadow-xl max-[1280px]:mx-auto max-[1280px]:w-[calc(100%-2rem)] max-[360px]:w-full">
      <NavLink to="/">
        <span className="sr-only">ProXch</span>
        <span className="text-2xl font-bold font-pavelt">Pro Xch</span>
      </NavLink>
      <div className="hidden gap-10 md:flex">
        <NavLink to="/about">
          {
            ({ isActive }: {isActive: boolean}) => (
              <span
                className={`${isActive ? 'text-indigo-600 border-indigo-600' : 'hover:text-indigo-600 hover:border-indigo-600'} text-lg font-semibold p-1 border-b-2 border-transparent transition-colors duration-500 ease-in-out`}
              >About Us</span>
            )
          }
        </NavLink>
        <NavLink to="/process">
          {
            ({ isActive }: {isActive: boolean}) => (
              <span
                className={`${isActive ? 'text-indigo-600 border-indigo-600' : 'hover:text-indigo-600 hover:border-indigo-600'} text-lg font-semibold p-1 border-b-2 border-transparent transition-colors duration-500 ease-in-out`}
              >Process</span>
            )
          }
        </NavLink>
        <NavLink to="/services">
          {
            ({ isActive }: {isActive: boolean}) => (
              <span
                className={`${isActive ? 'text-indigo-600 border-indigo-600' : 'hover:text-indigo-600 hover:border-indigo-600'} text-lg font-semibold p-1 border-b-2 border-transparent transition-colors duration-500 ease-in-out`}
              >Services</span>
            )
          }
        </NavLink>
        <NavLink to="/contact">
          {
            ({ isActive }: {isActive: boolean}) => (
              <span
                className={`${isActive ? 'text-indigo-600 border-indigo-600' : 'hover:text-indigo-600 hover:border-indigo-600'} text-lg font-semibold p-1 border-b-2 border-transparent transition-colors duration-500 ease-in-out`}
              >Contact Us</span>
            )
          }
        </NavLink>
      </div>
      <div className="relative ml-3 md:hidden">
        <button
          type="button"
          className={`${mobileMenu ? 'text-indigo-600 shadow-[0_0_10px]' : 'hover:text-indigo-600 hover:shadow-[0_0_10px]'} flex rounded-full  transition duration-300 ease-in-out`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span className="sr-only">Open menu</span>
          <HiBars3 className="w-10 h-auto" />
        </button>
        <div
          ref={dropdownRef}
          className={`${mobileMenu ? 'showDropdown' : 'hidden'} absolute right-0 z-20 origin-top bg-white w-48 mt-1 divide-y border`}>
          <NavLink to="/about">
            {
              ({ isActive }: {isActive: boolean}) => (
                <p
                  onClick={() => setMobileMenu(false)}
                  className={`${isActive ? 'text-white bg-indigo-600' : 'hover:text-white hover:bg-indigo-600'} text-lg font-semibold py-2 transition-colors duration-500 ease-in-out border-b-2`}
                >About Us</p>
              )
            }
          </NavLink>
          <NavLink to="/process">
            {
              ({ isActive }: {isActive: boolean}) => (
                <p
                  onClick={() => setMobileMenu(false)}
                  className={`${isActive ? 'text-white bg-indigo-600' : 'hover:text-white hover:bg-indigo-600'} text-lg font-semibold py-2 transition-colors duration-500 ease-in-out border-b-2`}
                >Process</p>
              )
            }
          </NavLink>
          <NavLink to="/services">
            {
              ({ isActive }: {isActive: boolean}) => (
                <p
                  onClick={() => setMobileMenu(false)}
                  className={`${isActive ? 'text-white bg-indigo-600' : 'hover:text-white hover:bg-indigo-600'} text-lg font-semibold py-2 transition-colors duration-500 ease-in-out border-b-2`}
                >Services</p>
              )
            }
          </NavLink>
          <NavLink to="/contact">
            {
              ({ isActive }: {isActive: boolean}) => (
                <p
                  onClick={() => setMobileMenu(false)}
                  className={`${isActive ? 'text-white bg-indigo-600' : 'hover:text-white hover:bg-indigo-600'} text-lg font-semibold py-2 transition-colors duration-500 ease-in-out`}
                >Contact Us</p>
              )
            }
          </NavLink>
        </div>
      </div>
    </nav >
  )
}


export default Header