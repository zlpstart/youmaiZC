import axios from 'axios'

const http = axios.create({
    baseURL: 'http://web.iyoumai.net',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// axios 请求前的拦截
http.interceptors.request.use((req)=>{
    let token = sessionStorage.getItem('token');
    token && (req.headers['token']=token);
    return req;
},error => {
    Promise.reject(error)
}) 

// axios 响应后的拦截
http.interceptors.response.use((res)=>{
    res.data.token && sessionStorage.setItem('token',res.data.token)
    return res;
},error => {
    let _res = error.response;
    switch(_res.states){
        case 401:
            sessionStorage.removeItem('token');
            // 跳转到登录页面
    }
    return Promise.reject(error.response.data)
}) 

export default http;