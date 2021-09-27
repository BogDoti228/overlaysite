import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header>
            <nav>
                <Link to="/">
                    <div className={"title"}><span>P</span><span>C</span><span>O</span><span>N</span></div>
                </Link>
                <Link to="/download">
                    <span className={"anchors"}>Скачать</span>
                </Link>
                <Link to="/documentation">
                    <span className={"anchors"}>Документация</span>
                </Link>
            </nav>
        </header>
    )
}