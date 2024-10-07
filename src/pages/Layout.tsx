import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-2 py-5 pt-0 border-gray-300 sm:px-10 my-28">
        <div className="">
          <h1 className="text-5xl font-black">Pro Xch</h1>
          <h2 className="py-5 text-3xl font-bold">Professional Exchange</h2>
        </div>
        <Outlet />
      </main>
      <footer className="max-w-[1280px] py-8 text-lg fixed left-1/2 bottom-0 -translate-x-1/2 w-full text-center border-t bg-gray-100 shadow-[0_0_10] max-[1280px]:mx-auto max-[1280px]:w-[calc(100%-2rem)] px-5 sm:px-10 lg:px-16 max-[360px]:w-full">
        &copy; 2024 ProXch.com | a VV ,LLC Company | All Rights Reserved.
      </footer>
    </>
  )
}

export default Layout