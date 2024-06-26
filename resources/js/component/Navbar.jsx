import { React } from "react";
import Logo from "../atribute/logo.png";
export default function Headers() {
    return (
        <nav className="py-2 px-4 bg-gray-100">
            <div className=" mx-auto flex items-center ">
                <img
                    src={Logo}
                    className="rounded-full size-12 items-start cursor-pointer "
                />

                <span className="flex items-center font-semibold text-base sm:text-xl px-6  ">
                    Furniture jepara
                </span>
                <div className="justify-end flex ">
                    <button className="items-center block sm:hidden px-48 hover:open">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-28 hidden sm:block">
                    <ul className="flex px-10 gap-20 font-serif text-l text-gray-500">
                        <li className="px-8 hover:text-gray-900 hover:underline">
                            <a href="">Dashboard</a>
                        </li>
                        <li className="px-8 hover:text-gray-900 hover:underline">
                            <a href="">product</a>
                        </li>
                        <li className="px-8 hover:text-gray-900 hover:underline">
                            <a href="">Pemesanan</a>
                        </li>
                        <li className="px-8 hover:text-gray-900 hover:underline">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="hidden sm:block">
                    <button className="flex items-center font-serif py-2 px-4 rounded-full gap-4 ">
                        Get Started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
