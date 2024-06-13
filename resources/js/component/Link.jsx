import React from "react";

export default function Link({ children }) {
    return (
        <a href="#" className="hover:text-blue-200 w-28">
            {children}
        </a>
    );
}
