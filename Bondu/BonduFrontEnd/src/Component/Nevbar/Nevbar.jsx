import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import BonduLogo from "../Image/Bondu.jpg";

const Nevbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [login, setLogin, payment, setPayment] = useContext(userContext);
  const username = sessionStorage.getItem("StudentsName");
  const logout = () => {
    setLogin(false);

    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <nav class="bg-sky-600 h-30 border-b-2 border-cyan-600 shadow-md">
        <div class="flex items-center justify-center">
          <div class="flex flex-col items-center inline-block mt-3">
            <img src={BonduLogo} class="h-18 w-28" alt="Logo" />

            <h1 class="text-white text-2xl font-bold font-mono">
              I will always stand with you
            </h1>
          </div>
        </div>
      </nav>
      <nav className="bg-sky-600 shadow-lg ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7 text-lg ">
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  className="text-gray-500 hover:text-white "
                  onClick={toggle}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="4" width="24" height="2" />
                    <rect y="11" width="24" height="2" />
                    <rect y="18" width="24" height="2" />
                  </svg>
                </button>
              </div>

              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } md:flex md:items-center md:space-x-1 text-white `}
              >
                <Link
                  to="/"
                  className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700 ml-28"
                >
                  Home
                </Link>
                <Link
                  to="/MozarSateSikho"
                  className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700"
                >
                  Mozar Sate Sikho
                </Link>

                <Link
                  to="/ShohozeShikhe"
                  className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700"
                >
                  Shohoze Shikhe
                </Link>
                <Link
                  to="/Quiz"
                  className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700"
                >
                  Khelbo Ebong Shihkbo
                </Link>

                {login === true || sessionStorage.getItem("StudentsName") ? (
                  <>
                    <Link
                      to="StudentsProfile"
                      className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700"
                    >
                      Profile
                    </Link>
                    <Link
                      to=""
                      className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700"
                      onClick={logout}
                    >
                      Log out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/SingUp"
                      className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/Login"
                      className="block py-4 text-white px-2 md:p-0   font-bold hover:bg-sky-700"
                    >
                      Log In
                    </Link>
                  </>
                )}
                  <Link
                      to="/Support"
                      className="block py-4 text-red-300 px-2 md:p-0   font-bold hover:bg-sky-700 ml-32 "
                    >
                     Support 
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nevbar;
