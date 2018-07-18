import React, { Component } from 'react'
import {connect} from 'react-redux';
import {List,Flex,Modal} from 'antd-mobile';
import {delUserDispatch} from "../../../store/actions/userMager"
class Lists extends Component {
    render() {
        let {userlist}=this.props
        return (
               <List>
                  <List.Item>
                            <Flex>
                                <Flex.Item>操作</Flex.Item>  
                                <Flex.Item>姓名</Flex.Item>
                                <Flex.Item>id</Flex.Item>
                                <Flex.Item>操作</Flex.Item>
                            </Flex>
                            </List.Item> 
                  {userlist&&userlist.map((item,key)=>{
                        return <List.Item key={key}>
                            <Flex>
                                <Flex.Item onClick={this.handebj.bind(this,item.userid,item.username)}>编辑</Flex.Item>
                                <Flex.Item>{item.username}</Flex.Item>
                                <Flex.Item>{item.userid}</Flex.Item>
                                <Flex.Item onClick={this.handelDel.bind(this,item.userid)}>删除</Flex.Item>
                            </Flex>
                            </List.Item> 
                  })}
              </List>
        )
    }
    handelDel(userid){
         Modal.alert('警告','确认删除吗？',[{text:'确定',onPress:()=>{
            this.props.delUser(userid);
        }},{text:'取消'}]);
    }
    handebj(userid,username){
        this.props.editShow(userid,username);
    }
    
}
let mapState = (state)=>{
    return {}
}
let mapDispatch = (dispatch)=>{
    return {
        delUser(userid){
            dispatch(delUserDispatch(userid));
        }
    }
}
Lists = connect(mapState,mapDispatch)(Lists);
export default Lists;