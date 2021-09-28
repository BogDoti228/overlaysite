import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

function Purpose(){
    const {ref, inView, entry} = useInView({triggerOnce : true})
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        console.log(inView)
        if (inView) {
            setAnimation("slideForward 2s forwards")
        }
    }, [inView])

    return (
        <article className={"purpose"}>
            <div className="purposeInside" >
                <h2 style={{animation: animation}} ref={ref}>Цели </h2>
                <p className={"purposeText"} style={{animation: animation}} ref={ref}>
                    Наша цель - это облегчить пользователям жизнь. Вспомните сколько раз вам приходилось сворачивать игру
                    чтобы посмотреть стрим или видеоролик. И так постоянно, тут же вы просто можете "прикрепить" нужное вам видео или стрим
                    поверх окна и забудьте о кнопке Alt+Tab.
                </p>
            </div>
        </article>
    )
}

export default Purpose;