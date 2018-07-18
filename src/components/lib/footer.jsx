import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/index">首页</NavLink></li>
                    <li><NavLink activeClassName="active" to="/details">详情</NavLink></li>
                    <li><NavLink  activeClassName="active" to="/submite">提交</NavLink></li>
                    <li><NavLink  activeClassName="active" to="/jiesuan">结算</NavLink></li>
                </ul>
            </div>
        )
    }
}
