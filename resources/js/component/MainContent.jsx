import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Slider from "../atribute/pageslider1.jpg";
import Slider1 from "../atribute/pageslider2.jpg";
import Slider2 from "../atribute/pageslider3.jpg";

const Images = [
    Slider,
    Slider1,
    Slider2,

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
                            className="md:h-screen sm:h-full w-full"
                        />
                    </div>
                ))}
            </Carousel>
        </>
    );
}
