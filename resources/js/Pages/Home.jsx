import { React } from "react";
import Logo from "../atribute/logo.png";
export default function Home() {
    return (
        <headers className="flex justify-between bg-gray-50">
            <nav className="p-2">
                <div className="text-2xl cursor-pointer" id="logo">
                    <span className="flex items-center font-semibold text-xl">
                        <img
                            src={Logo}
                            className="rounded-full size-12 items-start p-1"
                        />
                        Decoration Jepara
                        <ul className="flex flex-row justify-between">
                            <li>
                                <a href="">Dashboard</a>
                            </li>
                            <li>
                                <a href="">Dashboard</a>
                            </li>
                            <li>
                                <a href="">Dashboard</a>
                            </li>
                            <li>
                                <a href="">Dashboard</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </nav>
        </headers>
    );
}
