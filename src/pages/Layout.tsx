import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-5 border-gray-300 my-28 pt-0">
        <div className="">
          <h1 className="text-5xl font-black">Pro Xch</h1>
          <h2 className="text-3xl font-bold py-5">Professional Exchange</h2>
        </div>
        <Outlet />
      </main>
      <footer className="max-w-[1280px] py-8 text-lg fixed left-1/2 bottom-0 -translate-x-1/2 w-full text-center border-t bg-gray-100 shadow-[0_0_10]">
        &copy; 2024 ProXch.com | a VV ,LLC Company | All Rights Reserved.
      </footer>
    </>
  )
}

export default Layout