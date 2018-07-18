import React, { Component } from 'react'
// import Style from "./submite.css"
import { DatePicker, List,Picker ,Button,InputItem} from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import {getAllusers} from "../../api/userManger.js"
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            date: now,
            cols: 1,
            data:[]
        }
    }
    render() {
     
            
        return (
            <div className="submite">
                <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item arrow="horizontal">时间</List.Item>
                </DatePicker>
              
                <Picker data={district} cols={1}  className="forss">
                    <List.Item arrow="horizontal">姓名</List.Item>
                </Picker> 
                    <InputItem placeholder="请输入金额">金额</InputItem>
                    <InputItem placeholder="请输入备注">用途备注</InputItem>
               <div className="but">
                    <div className="Button">
                    <Button type="primary">提交</Button>
                </div>
                <div className="Button">
                    <Button type="warning">清空</Button>
                </div>
               </div>
                
            </div>)
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
