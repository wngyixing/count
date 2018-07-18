import React, { Component } from 'react'
// import Style from "./index.css"
import {Link} from "react-router-dom"
import {getAllusers} from "../../api/userManger.js"
export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            val:"",
            flag:false,
            flags:true,
            data:[]
        }
        console.log(this.props)
    }
    handle(ev){
        this.setState({val:ev.target.value},()=>{
            let val=this.state.val
            if(val==="123"){
               this.setState({
                   flag:!this.state.flag,
                   flags:!this.state.flags
               })
            }
        })
    }
    
    render() {
     

        return (
            <div className="index">
                <div className="box">
                    100
                </div>
                <p>嗨</p>
                {
                    this.state.flag&&<div className="insp" ref="dist">
                     <Link to="/xiangqing">管理员点击</Link>
                </div> 
                }  
                {
                    this.state.flags&& <div className="inp">
                     <input type="password" placeholder="请输入管理员密码" name="" id="" value={this.state.val} onChange={(ev)=>{this.handle(ev)}}/>
                </div> 
                }
               <div className="titt"> 
                   <ul>
                   {this.state.data&&this.state.data.map((item,index)=>{
                     
                        return <Link to={{pathname:"/details"}} key={index}> <li>
                           <span>{item.username}</span>
                           <span>{item.moneybase}</span>
                       </li></Link>
                   })}
                   </ul>
               </div>
            </div>
        )
    }
    componentDidMount(){
        getAllusers().then(res=>{
            this.setState({
                data:res.data
            })
        
        })
    }
}
