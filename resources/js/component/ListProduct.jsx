import React from "react";
const Product = [
    "https://placehold.co/600x600?text=1",
    "https://placehold.co/600x600?text=2",
    "https://placehold.co/600x600?text=3",
    "https://placehold.co/600x600?text=4",
    "https://placehold.co/600x600?text=5",
    "https://placehold.co/600x600?text=6",
];
export default function ListProduct({ children }) {
    return (
        <>
            <div className="m-5 flex flex-col gap-24">
                <div className="grid grid-cols-3 gap-4">
                    {Product.map((images, index) => (
                        <img src={images} alt={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
