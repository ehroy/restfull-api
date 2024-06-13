import { React } from "react";
import Link from "./Link";
import Logo from "../atribute/logo.png";
export default function Header() {
    return (
        <nav className="text-white mx-auto">
            <div className="flex justify-between items-center bg-gray-800 text-base min-w-full">
                <div className="flex justify-between items-center">
                    <button className="p-4 w-20 h-20 border-solid">
                        <img src={Logo} />
                    </button>
                    <button href="#">Mebel Jepara</button>
                </div>
                <div className="flex items-center gap-4 p-4">
                    <Link>Dashboard</Link>
                    <Link>Product</Link>
                    <Link>About</Link>
                    <button className="bg-teal-400 p-1.5 hover:bg-teal-500 relative rounded-xl">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
