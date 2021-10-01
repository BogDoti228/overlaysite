
function Guid() {
    return (
        <article className="guid">
            <div className="guidInside">
                <p className="guidText">
                    Тут мы собрали совокупность решений и способов использования нашего приложения, если что-то непонятно
                    можете прочитать документацию, там у вас точно вопросов не останется.
                </p>
                <div className={"iframeContainer"}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uMeR2W19wT0" frameBorder="0"
                            allowFullScreen/>
                </div>
            </div>
        </article>
    )
}

export default Guid;