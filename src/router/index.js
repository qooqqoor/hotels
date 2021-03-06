import React, { lazy,Suspense  } from "react";
import {Route,HashRouter,Switch} from "react-router-dom"
import {Loading} from "../conponents/Loading"
const HomePage = lazy(() =>
    import(
       '../views/homePage/Homepage'
        )
)
const Room = lazy(() =>
    import(
        '../views/room/'
        )
)



class RouterPage extends React.Component{
    render() {

        return (


            <HashRouter>
                <Switch>
                    <Suspense fallback={ <Loading/>}>
                        {/* The corresponding component will show here if the current URL matches the path */}

                        <div className="pages">
                            <Route path="/" exact component={HomePage} />
                            <Route path="/room/:id"  component={Room} />
                        </div>



                    </Suspense>
                </Switch>
            </HashRouter>

        )
    }
}

export   {RouterPage}