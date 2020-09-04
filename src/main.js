import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import {request} from "./network/request";
// import {request1} from "./network/request";
import {request2} from "./network/request";



Vue.config.productionTip = false

//axios基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then((res)=>{
//   console.log(res);
// })
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //携带参数的请求
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then((res)=>{
//   console.log(res);
// })



// //axios全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000';
// axios.defaults.timeout=5000;
// //发送并发请求
// axios.all([axios(
//     {
//         url: '/home/multidata',
//         params:{
//             type:'sell',
//             page:1
//         }
//     }
//     // 发送post请求携带数据时需要用data:{}传递参数
// ), axios(
//     {
//         url:'/home/data',
//     }
// )]).then(axios.spread((res1,res2)=>{
//     console.log(res1);
//     console.log(res2);
// }))

/*//使用普通封装的axios request
request({
    url:'/home/data'
},res=>{
    console.log(res)
},err=>{
    console.log(err);
})*/

/*//使用promise封装的axios
request1({url:'/home/data'}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})*/
/*//1使用promise封装的axios
request1({url:'/home/data'}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})*/
/*//2使用promise封装的axios
request1({url:'/home/data'}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})*/
/*//3使用promise封装的axios
request1({url:'/home/data'}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})*/

request2({url:'/home/data'}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
