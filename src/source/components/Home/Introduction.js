import {imgSwitch} from "../../../store/imgSwitch";
import {useState} from "react";

function Introduction(){
    const [counter, setCounter] = useState(0);

    function nextImage() {
        setCounter((counter + 1) % imgSwitch.length)
    }

    function prevImage(){
        setCounter((counter - 1 + imgSwitch.length) % imgSwitch.length)
    }

    return (
        <article className={"introduction"}>
            <div className={"introductionInside"}>
                <div className={"introductionText"}>
                    <p className={"firstP"}>Overlay PCon - новая веха в истории удобства.</p>
                    <p className={"secondP"}>Всего пару кликов и вы уже играете и одновременно смотрите что вы хотите</p>
                </div>
                <div className={"introductionImgBar"}>
                    <div className={"arrows arrow_back"} onClick={nextImage}/>
                    <img src={imgSwitch[counter]} alt=""/>
                    <div className={"arrows arrow_forward"} onClick={prevImage}/>
                </div>
            </div>
        </article>
    )
}

export default Introduction;