import React, { Component } from 'react'
import RootRouter from "../../router/index.js"
export default class Section extends Component {
    render() {
        return (
            <div className="section">
               <RootRouter></RootRouter>
            </div>
        )
    }
}
