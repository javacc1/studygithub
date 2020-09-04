import axios from 'axios'

//方案一，传递参数成功
export function request(config, success, faile) {
    //请求数据的配置
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //发送真正的网络请求
    instance(config).then(res => {
        success(res)
    }).catch(err => {
        faile(err)
    })
}
//方案二Promise

export function request1(config) {
    return new Promise((resolve,require)=>{
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        instance(config).then(res=>{
            resolve(res)
        }).catch(err=>{
            require(err);
        })
    });
}
//方案三，直接return 因为axios.create直接返回了Promise，所以不再需要套一层promise了
export function request2(config) {

        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        return  instance(config)

}
