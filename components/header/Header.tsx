import React from 'react';
import Link from "next/link";
import { RiArrowDownSLine, RiShoppingBasket2Fill } from "react-icons/ri"
import MyCart from "@/components/header/MyCart";

const Header = () => {
    return (
        <div className="border-b border-b-gray-300 bg-white">
            <div className="navbar bg-base-100 py-0 layout-w">
                <div className="navbar-start">
                    <Link href={"/"} className="flex items-center gap-2 text-secondary text-xl font-semibold">
                        <RiShoppingBasket2Fill fontSize={30} />
                        <span className="pt-0.5">DatPay.vn</span>
                    </Link>
                </div>
                <div className="navbar-center">
                    <div className="join w-[30rem]">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search Product..."
                            className="w-full join-item input  input-bordered input-sm"
                        />
                        <div className="dropdown dropdown-hover join-item">
                            <label
                                tabIndex={0}
                                className="w-[7rem] px-1 btn btn-sm btn-outline border-gray-300 rounded-none capitalize"
                            >
                                Category <RiArrowDownSLine />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-1 shadow border border-gray-300 bg-base-100 rounded-lg w-52"
                            >
                                <li>
                                    <a>Electronic</a>
                                </li>
                                <li>
                                    <a>Home Furniture</a>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-sm btn-secondary join-item rounded-r-lg capitalize">Search</button>
                    </div>
                </div>

                <div className="navbar-end gap-1">
                    <a className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity" href="/profile">
                        <div className="indicator">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
                            </svg>
                        </div>
                        <span className="text-xs">Profile</span>
                    </a>
                    <a className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity" href="/orders">
                        <div className="indicator">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C5.51545 2.99926 8.09315 2.56029 10.2605 3.44044L6.34315 7.35843L7.75736 8.77264L12 4.53L11.9872 4.51617C11.9918 4.52028 11.9964 4.5244 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z"></path>
                            </svg>
                        </div>
                        <span className="text-xs">Orders</span>
                    </a>
                    <MyCart/>
                </div>
            </div>
        </div>
    );
};

export default Header;
