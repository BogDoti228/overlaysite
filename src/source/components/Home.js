import Introduction from "./Home/Introduction";
import Resources from "./Home/Resources";
import Purpose from "./Home/Purpose";
import Functional from "./Home/Functional";
import ImageBar from "./Home/ImageBar";
import Guid from "./Home/Guid";

function Home() {
    return (
        <div className={"contentPage"}>
            <Introduction/>
            <Resources/>
            <Purpose/>
            <ImageBar/>
            <Functional/>
            <Guid/>
        </div>
    );
}

export default Home;