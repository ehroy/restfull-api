import React from "react";
import Products from "../atribute/logo.png";
const Product = [
    { image: Products, name: "Kursi minimalis", price: "Rp. 20.000.000" },
    { image: Products, name: "Kursi minimalis", price: "Rp. 20.000.000" },
    {
        image: "https://placehold.co/400x600?text=3",
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
    },
    {
        image: "https://placehold.co/400x600?text=3",
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
    },
    {
        image: "https://placehold.co/400x600?text=3",
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
    },
    {
        image: "https://placehold.co/400x600?text=3",
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
    },
    {
        image: "https://placehold.co/400x600?text=3",
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
    },
    {
        image: "https://placehold.co/400x600?text=3",
        name: "Kursi minimalis",
        price: "Rp. 20.000.000",
    },
];
export default function ListProduct({ children }) {
    return (
        <>
            <div className="m-5 flex flex-col gap-24">
                <div className="grid grid-cols-4 gap-4">
                    {Product.map((images, index) => (
                        <img
                            className="hover:will-change-transform"
                            src={images.image}
                            alt={index}
                        ></img>
                    ))}
                </div>
            </div>
        </>
    );
}
