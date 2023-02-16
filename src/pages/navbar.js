import { useState } from "react";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import TambahResep from "./tambahResep_page";
import Beranda from "./beranda_page";
import Profile from "./profile_page";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  "
              to="/"
            >
              Cookweb
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              </button>
            </div>
            <div className={
                "lg:flex flex-grow items-center" + (navbarOpen ?"flex": "hidden")
            }
            id="example-navbar-danger">

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center text-md font-normal leading-snug hover:opacity-75" to="/">
                       <span className="ml-2">Beranda</span>
                     </Link>
                </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md font-normal leading-snug hover:opacity-75"
                  to="/tambahresep"
                >
                 <span className="ml-2">Tambah Resep</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-4 py-2 flex items-center hover:opacity-75"
                  to="/profile"
                ><img className="w-7" src={require("../assets/profile.png")}></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
            <Route path="/" element={<Beranda />}/>
            <Route path="/tambahresep" element={<TambahResep />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
    
  );
}
