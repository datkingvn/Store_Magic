import React from 'react';
import Link from "next/link";
import { RiArrowDownSLine, RiShoppingBasket2Fill } from "react-icons/ri"
import Menu from "@/components/header/Menu";

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
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default Header;
