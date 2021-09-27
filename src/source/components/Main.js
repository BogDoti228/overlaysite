import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Download from "./download/Download";
import Documentation from "./documentation/Documentation";

function Main(){
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/download' component={Download}/>
                <Route exact path='/documentation' component={Documentation}/>
            </Switch>
        </main>
    )
}

export default Main;