import React, { lazy,Suspense  } from "react";
import {Route,BrowserRouter,Switch} from "react-router-dom"
import {Loading} from "../conponents/Loading"
const HomePage = lazy(() =>
    import(
       '../views/Homepage/Homepage.js'
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


            <BrowserRouter>
                <Switch>
                    <Suspense fallback={ <Loading/>}>
                        {/* The corresponding component will show here if the current URL matches the path */}

                        <div className="pages">
                            <Route path="/" exact component={HomePage} />
                            <Route path="/room" exact component={Room} />
                        </div>



                    </Suspense>
                </Switch>
            </BrowserRouter>

        )
    }
}

export   {RouterPage}