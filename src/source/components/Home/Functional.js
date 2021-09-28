import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

function Functional(){
    const {ref, inView, entry} = useInView({triggerOnce : true})
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        console.log(inView)
        if (inView) {
            setAnimation("slideBack 2s forwards")
        }
    }, [inView])

    return (
        <article className={"functional"}>
            <div className="functionalInside">
                <h2 style={{animation: animation}} ref={ref}>Функционал</h2>
                <p className={"functionalText"} style={{animation: animation}} ref={ref}>
                    Вы не только можете смотреть видео с ресурсов выше, но и делать с видео все то же, что и в обычно проигрывателе, а может даже больше.
                    Вызовите специальное меню с помощью сочетаний клавши и получить доступ к ускорению, замедлению, перетаскиванию и тому подобное.
                    Как только вы испробуете все что есть, вы точно не останетесь равнодушным.
                </p>
            </div>
        </article>
    )
}

export default Functional;