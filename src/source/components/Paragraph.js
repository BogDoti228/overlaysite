import {useEffect, useState} from "react";

export default function Paragraph(props){
    const [flexDirection, setFlexDirection] = useState("row")

    useEffect(() => {
        if (props.number % 2 !== 0) setFlexDirection("row-reverse")
    }, [props.number])

    return (
        <article style={{flexDirection : flexDirection}}>
            <img src={props.object.url} alt=""/>
            <p>{props.object.text}</p>
        </article>
    )
}