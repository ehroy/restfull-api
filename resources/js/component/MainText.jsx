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
            <div className="m-5  flex-col gap-10">
                <div className="p-5 grid grid-cols-1 gap-4 mx-auto md:grid-cols-4">
                    <ul className="font-serif hover:animate-bounce">
                        <li className="py-12 px-12 mx-auto gap-4 shadow-xl rounded-lg justify-items-center">
                            <a href="" className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </a>

                            <span className="">Pencarian Mudah</span>
                        </li>
                    </ul>
                    <ul>
                        <li className="py-12 px-12 mx-auto gap-4 shadow-xl rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-8 relative"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>

                            <span className="">Pemesanan Mudah</span>
                        </li>
                    </ul>
                    <ul>
                        <li className="py-12 px-12 mx-auto gap-4 shadow-xl rounded-lg justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-8 relative "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>

                            <span className="">Pengiriman cepat dan aman</span>
                        </li>
                    </ul>
                    <ul>
                        <li className="py-12 px-12 mx-auto gap-4 shadow-xl rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-8 relative"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>

                            <span className="">Harga dan kualitas bagus</span>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center text-3xl font-bold p-2 mx-auto">
                    <h1 className="text-gray-600 font-serif">WELCOME</h1>
                </div>
                <div className="sm:col-span-12 lg:col-span-8 text-justify">
                    <span className="sm:text-base lg:text-lg text-center">
                        Selamat datang di web katalog Kami{" "}
                        <span className="font-extrabold">
                            Decoration Jepara
                        </span>
                        adalah produsen furniture mebel asli Jepara. Dengan
                        keutamaan bahan kayu mahoni maupun jati bebas custom,
                        kami menyediakan berbagai mebel seperti kursi tamu kayu
                        mahoni maupun jati bebas custom, Sofa tamu kayu
                        minimalis, meja makan kayu mahoni maupun jati bebas
                        custom ukir atau minimalis, lemari pakaian kayu mahoni
                        maupun jati bebas custom, buffet bufet almari tv kayu
                        mahoni maupun jati bebas custom, dipan tempat tidur kayu
                        mahoni maupun jati bebas custom, serta furniture lainya.
                        Anda juga dapat memesan Custom Order sesuai permintaan
                        dan kebutuhan anda. Dapatkan mebel kesayangan anda
                        dengan harga ekonomis bahan berkualitas serta finishing
                        yang halus hanya di Furniture Jepara.
                    </span>
                </div>
            </div>
        </div>
    );
}
