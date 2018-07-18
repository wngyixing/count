
import React, { Component } from 'react'
import {HashRouter as  Router,Route,Switch,Redirect} from "react-router-dom"
import config from "./config"
export default class RootRouter extends Component {
    render() {
        return (
            <div>
                 <Router>
                    <Switch>
                        {config.map((item,index)=>{
                            return <Route  key={index} path={item.path} component={item.component}></Route>
                        })} 
                        <Redirect from="/" to="/index" />
                    </Switch>
                </Router>
            </div>
        )
    }
}
