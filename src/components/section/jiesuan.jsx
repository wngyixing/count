import React, { Component } from 'react'
// import Style from "./jiesuan.css"
import {getAllusers} from "../../api/userManger.js"
export default class Jiesuan extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div className="jiesuan">
               <div className="tit">
                   0
               </div>
               <div className="box">
                   <ul>
                       <li>姓名</li>
                       <li>个人总计</li>
                       <li>平均金额</li>
                       <li>应付</li>
                       <li>应收</li>
                   </ul>
                    {this.state.data&&this.state.data.map((item,index)=>{
                return  <ol key={index}>
                        <li>{item.username}</li>
                        <li>{item.moneybase}</li>
                        <li>{item.moneybase}</li>
                        <li>{item.moneybase}</li>
                        <li>{item.moneybase}</li>
                   </ol>
            })}
               </div>
           

            </div>
        )
    }
    componentDidMount(){
        getAllusers().then(res=>{
            this.setState({
                data:res.data
            })
            console.log(this.state.data)
        })
    }
}
