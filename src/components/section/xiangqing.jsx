import React, { Component } from 'react'
// import Style from "./xiangqing.css"
import {getAllusersDis,submituserDis,USER_ISADD,USER_ISDEL,USERMANGER_ISEDIT} from "../../store/actions/userMager"
import {connect} from "react-redux"
import {  InputItem , Modal, List,Flex} from 'antd-mobile';
import NavBar from "./sections/header.jsx"
import Lists from "./sections/list.jsx"
import EditUserInfo from "./sections/user.jsx"
class Xiangqing extends Component {
    constructor(props){
        super(props)
        this.onOK=this.onOK.bind(this);
        this.onErr=this.onErr.bind(this)
        this.state={
            username:'',
            moneybase:"",
            userid:"",
            editVisible:false,
            editUsername:'',
            editUserid:'',
            falgs:false,

        }
        this.footer=[
            {
                text:'确定',
                onPress:()=>{this.onOK()}
            },
             {
                text:'取消',
                onPress:()=>{this.onErr()}
            }
        ]
    }
    render() {
        let {falgs,userid,username,moneybase,editUsername,editVisible,editUserid} = this.state;
            let {userlist}=this.props
        return (
            <div className='xiangqing'>
               <NavBar onClose={this.onClose.bind(this)}></NavBar>
               <Lists userlist={userlist}  editShow={this.editShow.bind(this)}></Lists>
               <Modal
                    visible={falgs}
                    transparent
                    maskClosable={true}
                    onClose={()=>{console.log("close")}}
                    title="创建用户"
                    footer={this.footer}
                >
                    <List>
                        <List.Item>
                            <Flex>
                                <Flex.Item>用户id：</Flex.Item>
                                <Flex.Item><InputItem value={userid} onChange={value=>this.setState({userid:value})} placeholder="请输入用户id"></InputItem></Flex.Item>
                            </Flex>
                        </List.Item>
                         <List.Item>
                            <Flex>
                                <Flex.Item>用户：</Flex.Item>
                                <Flex.Item><InputItem value={username} onChange={value=>this.setState({username:value})}  placeholder="请输入用户名"></InputItem></Flex.Item>
                            </Flex>
                        </List.Item>
                         <List.Item>
                            <Flex>
                                <Flex.Item>金钱基数：</Flex.Item>
                                <Flex.Item><InputItem value={moneybase} onChange={value=>this.setState({moneybase:value})}  placeholder="请输入金钱基数"></InputItem></Flex.Item>
                            </Flex>
                        </List.Item>
                    </List>
                </Modal>
               <EditUserInfo 
                visible={editVisible} 
                username={editUsername}
                userid={editUserid}
                changeUsername={this.editChangeUsername.bind(this)}
                closeModal={this.editCloseModal.bind(this)}
              />
            </div>
        )
    }

    onOK(){
        let {userid,username,moneybase}=this.state
        this.onClose(false) 
        this.props.addUser({userid,username,moneybase})
    }
   onErr(){
       this.onClose(false)
   }
   onClose(flag){
       console.log(flag)
    if(!flag){
        this.setState({falgs:flag,userid:"",username:"",moneybase:""})
    }else{
        this.setState({falgs:flag})
    }
   }
    editShow(editUserid,editUsername){//显示修改用户弹框
        let editVisible = true;
        this.setState({editUserid,editUsername,editVisible});
    }
    editChangeUsername(editUsername){
        console.log(editUsername)
        this.setState({editUsername})
    }
    editCloseModal(){
        this.setState({editVisible:false});
    }
    componentDidMount(){
        this.props.getAllUser()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isAdd===true){
            Modal.alert('提示',"添加成功",[{text:"确定"}])
        }else if(nextProps.isAdd===false){
            Modal.alert('提示',"添加失败",[{text:"确定"}])
        }else if(nextProps.isDel===true){
            Modal.alert('提示','删除成功',[{text:'确定',onPress:()=>{this.props.resetIsDel(null)}}]);
        }else if(nextProps.isDel===false){
            Modal.alert('提示','删除失败',[{text:'确定',onPress:()=>{this.props.resetIsDel(null)}}]);
        }else if(nextProps.isEdit===true){
            Modal.alert('提示','修改成功',[{text:'确定',onPress:()=>{this.props.resetIsEdit(null)}}]);
        }else if(nextProps.isEdit===false){
            Modal.alert('提示','修改失败',[{text:'确定',onPress:()=>{this.props.resetIsEdit(null)}}]);
        }
    }
}
let mapState=(state)=>{
    let {userlist,isAdd,isDel,isEdit}=state.userMager
    return {
        userlist,isAdd,isDel,isEdit
    }
}
let mapDispatch=(dispatch)=>{
    return{
        getAllUser(){
            dispatch(getAllusersDis)
        },
        addUser(data){
            dispatch(submituserDis(data))
        },
        resetIsAdd(isAdd){
            dispatch({type:USER_ISADD,isAdd});
        },
        resetIsDel(isDel){
            dispatch({type:USER_ISDEL,isDel});
        },
        resetIsEdit(isEdit){
            dispatch({type:USERMANGER_ISEDIT,isEdit});
        }
    }
}
Xiangqing=connect(mapState,mapDispatch)(Xiangqing)
export default Xiangqing