import Image1 from "../../photos/img1.svg"
import Image2 from "../../photos/img2.svg"
import Image3 from "../../photos/img3.svg"
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";


function ImageBar (){
    const {ref, inView, entry} = useInView({triggerOnce : true})
    const [animationBack, setAnimationBack] = useState("");
    const [animationForward, setAnimationForward] = useState("");
    const [visibility, setVisibility] = useState("hidden");

    useEffect(() => {
        console.log(inView)
        if (inView) {
            setAnimationBack("slideBack 2s forwards")
            setAnimationForward("slideForward 2s forwards")
            setVisibility("visible")
        }
    }, [inView])

    return (
        <article className={"imageBar"}>
            <div className={"imageBarInside"}>
                <img src={Image1} alt="" ref={ref} style={{animation: animationForward}}/>
                <img src={Image2} alt="" ref={ref} style={{visibility: visibility}}/>
                <img src={Image3} alt="" ref={ref} style={{animation: animationBack}}/>
            </div>
        </article>
    )
}

export default ImageBar;