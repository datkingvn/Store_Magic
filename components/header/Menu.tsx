"use client"
import React, { useEffect, useState } from 'react';
import {signOut, useSession} from 'next-auth/react'
import {FaChevronDown} from "react-icons/fa";
import {IoIosLogOut} from "react-icons/io";
import useCartService from "@/libs/hooks/useCartStore";
import Link from "next/link";
import { MdHistory } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const Menu = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data: session } = useSession()
  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
    init()
  };

  return (
      <>
        <a className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity" href="/orders">
          <div className="indicator">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C5.51545 2.99926 8.09315 2.56029 10.2605 3.44044L6.34315 7.35843L7.75736 8.77264L12 4.53L11.9872 4.51617C11.9918 4.52028 11.9964 4.5244 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z"></path>
            </svg>
          </div>
          <span className="text-xs">Orders</span>
        </a>
        <a className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity" href="/cart">
          <div className="indicator">
            {mounted && items.length !== 0 && (
                <span className="indicator-item px-1 text-xs font-semibold badge badge-secondary">
                            {items.reduce((a, c) => a + c.qty, 0)}{' '}
                        </span>
            )}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10H7.00488V12C7.00488 14.7614 9.24346 17 12.0049 17C14.7663 17 17.0049 14.7614 17.0049 12V10H15.0049V12C15.0049 13.6569 13.6617 15 12.0049 15C10.348 15 9.00488 13.6569 9.00488 12V10Z"></path>
            </svg>
          </div>
          <span className="text-xs">My Cart</span>
        </a>
        {session && session.user ? (

            <div className="dropdown dropdown-bottom dropdown-end">
              <button tabIndex={0} className="btn btn-ghost rounded-btn relative flex items-center">
                <img
                    src="https://i.imgur.com/1pyvNuF.jpeg"
                    alt="User Profile"
                    className="w-10 h-10 rounded-full object-cover object-center mr-2 cursor-pointer"
                    style={{ filter: 'brightness(1)' }} // Thêm hiệu ứng tối ứng với hình ảnh
                />
                <FaChevronDown />
              </button>
              <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-40 absolute right-0 mt-1"
              >
                <li>
                  <Link href='/profile'><CiUser style={{ fontSize: "14px" }} /> Profile</Link>
                </li>
                <li>
                  <Link href='/order-history'><MdHistory style={{ fontSize: "14px" }} /> Order History</Link>
                </li>
                <li>
                  <button
                      type="button"
                      onClick={signoutHandler}
                      className="bg-blue-500 text-white rounded-lg px-4 py-2 shadow-md"
                  >
                    <IoIosLogOut style={{ fontSize: "17px" }} /> Sign Out
                  </button>
                </li>
              </ul>
            </div>


        ) : (
            <a className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity" href="/signin">
              <div className="indicator">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
                </svg>
              </div>
              <span className="text-xs">Login</span>
            </a>
        )}
      </>
  );
};

export default Menu;