import Introduction from "./Home/Introduction";
import Resources from "./Home/Resources";
import Purpose from "./Home/Purpose";
import Functional from "./Home/Functional";

function Home() {
    return (
        <div className={"contentPage"}>
            <Introduction/>
            <Resources/>
            <Purpose/>
            <Functional/>
        </div>
    );
}

export default Home;