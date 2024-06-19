import { React } from "react";
import Logo from "../atribute/logo.png";
export default function Headers() {
    return (
        <headers className="flex justify-between bg-gray-100 ">
            <nav>
                <div className="text-2xl cursor-pointer m-2">
                    <span className="flex items-center font-semibold text-xl">
                        <img
                            src={Logo}
                            className="rounded-full size-12 items-start p-1"
                        />
                        Decoration Jepara
                    </span>
                </div>
            </nav>
            <nav>
                <div className="flex items-center justify-centerfont-semibold text-xl list-none m-2 font-serif">
                    <li className="px-8 mt-2">
                        <a href="">Dashboard</a>
                    </li>
                    <li className="px-8  mt-2">
                        <a href="">product</a>
                    </li>
                    <li className="px-8  mt-2">
                        <a href="">Get Started</a>
                    </li>
                </div>
            </nav>
        </headers>
    );
}
