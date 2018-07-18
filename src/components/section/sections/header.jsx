import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {NavBar as AntdNavBar,Icon} from 'antd-mobile';
export default class NavBar extends Component {
    render() {
        return (
            <AntdNavBar
            mode="light"
            icon={<Link to="/index"><Icon type="left" /></Link>}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="ellipsis"onClick={()=>{this.props.onClose(true)}}/>,
            ]}
            >用户管理</AntdNavBar> 
        )
    }
}
