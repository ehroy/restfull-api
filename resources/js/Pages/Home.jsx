import { React } from "react";
import MainContent from "../component/MainContent";
import Navbar from "../component/Navbar";
import ListProduct from "../component/ListProduct";
import MainText from "../component/MainText";
export default function Home() {
    return (
        <div>
            <Navbar />
            <MainContent />
            <MainText />
            <ListProduct />
        </div>
    );
}
