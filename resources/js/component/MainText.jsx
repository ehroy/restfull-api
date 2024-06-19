import React from "react";
import Logo from "../atribute/logo.png";
import { Carousel, Typography, Button } from "@material-tailwind/react";
const Testimoni = [
    "https://placehold.co/1200x600?text=1",
    "https://placehold.co/1200x600?text=2",
    "https://placehold.co/1200x600?text=3",
    "https://placehold.co/1200x600?text=4",
    "https://placehold.co/1200x600?text=5",
    "https://placehold.co/1200x600?text=6",
];
export default function MainText() {
    return (
        <div>
            <div className="flex items-center m-5 ">
                <div className="relative ">
                    <img src={Logo} alt="" className="h-80 w-full bg-black" />
                </div>
                <div className="flex flex-row-reverse m-5 text-5xl font-serif border-e-blue-400">
                    <h4 className="text-sky-600">SELAMAT DATANG DI WEB</h4>
                </div>
            </div>
        </div>
    );
}
