import { React } from "react";
import MainContent from "../component/MainContent";
import Headers from "../component/Header";
import ListProduct from "../component/ListProduct";
import MainText from "../component/MainText";
export default function Home() {
    return (
        <div>
            <Headers />
            <MainContent />
            <MainText />
            <ListProduct />
        </div>
    );
}
