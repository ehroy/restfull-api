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
                <div>
                    <h1 className="flex text-2xl font-serif justify-center">
                        KENAPA MEMLIH KAMI ?
                    </h1>
                </div>
                <div className="p-5 grid grid-cols-1 gap-4 mx-auto md:grid-cols-4 px-10 py-10">
                    <ul className="font-serif hover:animate-bounce  ">
                        <li className="w-48 h-56  shadow-xl rounded-lg justify-items-center text-center border border-1">
                            <div className="flex justify-center items-center p-6  ">
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
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>
                            <div className="text-center ">
                                <span>Pencarian Mudah</span>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-48 h-56  shadow-xl rounded-lg justify-items-center text-center border border-1">
                            <div className="flex justify-center items-center p-6  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                    />
                                </svg>
                            </div>
                            <div className="text-center ">
                                <span>Pengiriman seluruh indonesia</span>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-48 h-56  shadow-xl rounded-lg justify-items-center text-center border border-1">
                            <div className="flex justify-center items-center p-6  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                                    />
                                </svg>
                            </div>
                            <div className="text-center ">
                                <span>Pembayaran mudah</span>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-48 h-56  shadow-xl rounded-lg justify-items-center text-center border border-1">
                            <div className="flex justify-center items-center p-6  ">
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
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>
                            <div className="text-center ">
                                <span>Pencarian Mudah</span>
                            </div>
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
                            Decoration Jepara{" "}
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
