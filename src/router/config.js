//import {LoadAsyncCom,Loading} from "../tools/syncCom.jsx"
import Xiangqing from "../components/section/xiangqing"
import Jiesuan from "../components/section/jiesuan"
import Details from "../components/section/details"
import Submite from "../components/section/submite"
import Index from "../components/section/index"
// const config = [
//     {
//         path:'/xiangqing',
//         component:LoadAsyncCom(()=>import('../components/section/xiangqing'),Loading)
//     },
//     {
//         path:'/jiesuan',
//         component:LoadAsyncCom(()=>import('../components/section/jiesuan'),Loading)
//     },
//     {
//         path:'/details',
//         component:LoadAsyncCom(()=>import('../components/section/details'),Loading)
//     },
//     {
//         path:'/submite',
//         component:LoadAsyncCom(()=>import('../components/section/submite'),Loading)
//     },
//     {
//         path:'/index',
//         component:LoadAsyncCom(()=>import('../components/section/index'),Loading)
//     }
// ];
const config=[
        {
        path:'/xiangqing',
        component:Xiangqing
    },
     {
        path:'/jiesuan',
        component:Jiesuan
    },
     {
        path:'/details',
        component:Details
    },
     {
        path:'/submite',
        component:Submite
    },
     {
        path:'/index',
        component:Index
    }
]
export default config