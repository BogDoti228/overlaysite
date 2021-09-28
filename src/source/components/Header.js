import {Link} from "react-router-dom";
import Image from "../photos/logo.png"

export default function Header(){
    return (
        <header>
            <nav>
                <Link to="/">
                    <div className={"logotype"}>
                        <img src={Image} alt=""/>
                        <div className={"title"}><span>P</span><span>C</span><span>O</span><span>N</span></div>
                    </div>
                </Link>
                <div className={"links"}>
                    <Link to="/download">
                        <span className={"anchors"}>Скачать</span>
                    </Link>
                    <Link to="/documentation">
                        <span className={"anchors"}>Документация</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}