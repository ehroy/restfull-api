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
                <div className="container grid grid-cols-3 gap-4 mx-auto ">
                    <ul className="flex px-10 py-10 ">
                        <li className="items-center justify-center absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            cari product impianmu untuk mengisi ruang rumahmu
                        </li>

                        <li className="items-center justify-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            <div className="">
                                <span>PELI</span>
                            </div>
                        </li>

                        <li className="items-center justify-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            <div className="">
                                <span>PELI</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="sm:col-span-12 lg:col-span-8 text-justify">
                    <h1 className="text-gray-600">WELCOME</h1>
                    <span className="sm:text-base lg:text-lg text-center">
                        Selamat datang di web katalog Kami{" "}
                        <span className="font-extrabold">
                            Decoration Jepara
                        </span>{" "}
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
