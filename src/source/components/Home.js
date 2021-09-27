import {contentParagraphs} from "../../store/contentParagraphs";
import Paragraph from "./Paragraph";

function Home() {
    return (
        <div className={"contentPage"}>
            <article className={"introduction"}>
                <div className={"introductionInside"}>
                    <div className={"introductionText"}>
                        <p className={"firstP"}>Overlay PCon - новая веха в истории удобства.</p>
                        <p className={"secondP"}>Всего пару кликов и вы уже играете и одновременно смотрите что вы хотите</p>
                    </div>
                    <img
                        src="https://tub.avatars.mds.yandex.net/i?id=d5f1d5e5b119c826b8a90676631fb406-5274396-images-thumbs&n=13&exp=1"
                        alt=""/>
                </div>
            </article>
            <article className={"resources"}>
                <div className={"resourcesInside"}>
                    <span className={"resourcesText"}> Поддерживаемые ресурсы: </span>
                    <img
                        src="https://screen-recording.ru/img/_src/Twitch.png"
                        alt=""/>
                    <img
                        src="https://www.fakro.ru/images/Youtube-Ikonka.png"
                        alt=""/>
                    <img
                        src="https://yandex-images.clstorage.net/4v7BmT284/0f8dcdFFw/hnfPAp5daJh1X7aOUyADbaqbyRGDPL4q_2V2nd6DKhtD2Wq8BmagAFh3Kc3mZZsTSbm-ExBLqqOVMcgptsB0QY924w-vaXmNJFb7i07lY2im46ENtz3rE8tQM5Wj3zcKYu172P5voEFpNni8UkWPHzUFFp9pl0YHVMFAgEvgdRjGI-NT6zWQPXHfOvJGzO8Z64_J0Wts_scv7aqkXlvqbme1-hy6MpA1Na7skCuoAurBfUZHuZOer6wFmBj_EP0o3nsi8_fduPyxM65O2kQrLas_jZG39J6LG-kiBPoT_tJPESbkNlo4pVkuVKAHYErSfdWKL0nDtv-wdYCA1xgRwJoLqte3QeDMfcvSwiKA-z3fl0UtH5C-c5sNCiiuO-ZCY_mWmMo2RNn5boiA5zSSVl29ij9Jq3YXpC1seMsgMTjiK8rTt8X81PULNpLSlAf1p7P5WYeodkeT1fIsMgPWKtPZ7kRWVtDJeaJoYE9crrpxmUbDjb-m2zDdBGCjvL38HlPKvz8FOCBtpwYSyhSrLeuDbYFncHJz-wV65OZ_Asav6e4AqlaEXdk6aJxzUKI2teUmR82LLj9YfVggm1x9dH57TqdLMTyMfVduJjaIU3UvK3lJszCWm5cNQvBSQ2ZGrxG-XD6SwMntoogEh2Ra_rHdLifNfxJ3LNmIPKsQXei-p8avl0l86Omnuuo6hD8dU4dliaf8vhOfDTbgro9-lvPlbtzyclQJvVZgYHswpo7B0VYTYcu-U5DRnBxHFGVk2n-mw2dp4NDtByqSjhCTKUOroUmj7LZnp-l-EMa3Llonkfo4os4YTY2-qGyzOJ5-2blyo62PpgfMhRDor-yhAB4Hmv-vLfyg2V9yikIEsy2zn-kRH5SuIydxAmA6k5Yel-VisGrm9Gmtpiy4t6R2jmERrlNRg_7fpKEEIJOQNbye16Jvs7X8JM1DCnaa8CfVy_fFBZtMpuejAYZ0OgMg"
                        alt=""/>
                </div>
            </article>
            <article className={"purpose"}>
                <div className="purposeInside">
                    <h2>Цели</h2>
                    <p className={"purposeText"}>
                        Наша цель - это облегчить пользователям жизнь. Вспомните сколько раз вам приходилось сворачивать игру
                        чтобы посмотреть стрим или видеоролик. И так постоянно, тут же вы просто можете "прикрепить" нужное вам видео или стрим
                        поверх окна и забудьте о кнопке Alt+Tab.
                    </p>
                </div>
            </article>
            <article className={"functional"}>
                <div className="functionalInside">
                    <h2>Функционал</h2>
                    <p className={"functionalText"}>
                        Вы не только можете смотреть видео с ресурсов выше, но и делать с видео все то же, что и в обычно проигрывателе, а может даже больше.
                        Вызовите специальное меню с помощью сочетаний клавши и получить доступ к ускорению, замедлению, перетаскиванию и тому подобное.
                        Как только вы испробуете все что есть, вы точно не останетесь равнодушным.
                    </p>
                </div>
            </article>
        </div>
    );
}

export default Home;