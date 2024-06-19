import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Images = [
    "https://placehold.co/1200x600?text=Product1",
    "https://placehold.co/1200x600?text=Product2",
    "https://placehold.co/1200x600?text=Product3",

    // Add more image URLs here
];

export default function MainContent() {
    return (
        <>
            <Carousel className="rounded-l h-full w-full">
                {Images.map((image, index) => (
                    <div className="relative ">
                        <img
                            src={image}
                            alt={index}
                            className="h-full w-full"
                        />
                    </div>
                ))}
            </Carousel>
        </>
    );
}
