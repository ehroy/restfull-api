import React, { useState } from "react";
import Products from "../atribute/logo.png";
const Product = [
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
    {
        image: Products,
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
        lokasi: "Jepara",
        Terjual: 0,
    },
];
const Count = () => {
    const [add, setAdd] = useState(0);
    // if()
};
export default function ListProduct({ children }) {
    return (
        <>
            <div className="card m-5 flex flex-col gap-24 ">
                <div>
                    <form className="max-w-md mx-auto">
                        <label
                            for="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Mockups, Logos..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-4 gap-4 ">
                    {Product.map((images, index) => (
                        <>
                            <div className="shadow-xl rounded-xl">
                                <img
                                    className="hover:will-change-transform p-2"
                                    src={images.image}
                                    alt={index}
                                ></img>
                                <div className=" p-4">
                                    <h1 className="font-serif">
                                        {images.name}
                                    </h1>
                                    <p>{images.price}</p>
                                    <p>{images.lokasi}</p>
                                    <div className="flex">
                                        <p>{images.Terjual}</p>
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
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
