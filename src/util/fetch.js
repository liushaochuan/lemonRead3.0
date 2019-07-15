import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://192.168.0.115:3000/'; //测试服
// axios.defaults.baseURL = 'http://lemonread.com/'; //正式服
axios.defaults.baseURL = ''; //正式服

//POST传参序列化
axios.interceptors.request.use((config) => {
    // console.log('config', config)
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    // console.log("JSON.parse(sessionStorage.getItem('token')",JSON.parse(sessionStorage.getItem('token')))
    if (sessionStorage.getItem('token')) {
        //token验证
        axios.defaults.headers[config.method]['Authorization'] = JSON.parse(sessionStorage.getItem('token'))
    }
    return config;
}, (error) => {
    console.log('error', error);
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
    if (res.data.errcode) {
        //在这一层做请求回来的errcode不为0的异常处理
        console.log("返回错误", res.data.errmsg);
        return Promise.reject(res);
    }
    return res.data;
}, (error) => {
    //在这一层做网络请求异常处理
    console.log('网络异常', error);
    // _.toast("网络异常");
    return Promise.reject(error);
});

export function fetch(model, url, params) {
    axios.defaults.baseURL = params.baseUrl
    return new Promise((resolve, reject) => {
        let reqUrl = url;
        if (model === 'get') {
            reqUrl = reqUrl + '?' + qs.stringify(params);
        }
        axios[model](reqUrl, params)
            .then(response => {
                // console.log('response.retobj', response.retobj)
                resolve(response.retobj);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function fetchMulti(requestArr) {
    axios.all(requestArr).then(axios.spread(function(acct, perms) {}))
}

export default {
    /**
     * 发送验证码
     */
    getVerCode(params) {
        return fetch('post', '/user/sendMess', params)
    },
    /**
     * 用户注册
     */
    userSignin(params) {
        return fetch('post', '/user/register', params)
    },

    /**
     * 用户登录
     */
    userSignup(params) {
        return fetch('post', '/user/login', params)
    },
    /**
     * 用户忘记密码
     */
    userForget(params) {
        return fetch('post', '/user/forgotPassword', params)
    },
    /**
     * 用户修改密码
     */
    userUpdate(params) {
        return fetch('post', '/user/updatePassword', params)
    },
    /**
     * 提交用户日志
     */
    userLog(params) {
        return fetch('post', '/log/addLog', params)
    },
    /**
     * 获取敏感词信息
     */
    getSensitiveList(params) {
        return fetch('get', '/sensitive/getList', params)
    },
    /**
     * 添加敏感词
     */
    addSensitiveWords(params) {
        return fetch('post', '/sensitive/addWords', params)
    },
    /**
     * 编辑敏感词
     */
    updateSensitiveWords(params) {
        return fetch('post', '/sensitive/updateWords', params)
    },
    /**
     * 删除敏感词
     */
    deleteSensitiveWords(params) {
        return fetch('post', '/sensitive/deleteWords', params)
    },
    /**
     * 获取敏感词信息
     */
    getLogList(params) {
        return fetch('get', '/log/getList', params)
    },
    /**
     * 获取最新apk安装包
     */
    getApkList(params) {
        return fetch('get', '/apk/getNewestApk', params)
    },
    /**
     * 获取书籍
     */
    getBookList(params) {
        return fetch('get', '/book/getBookList', params)
    },
    // 获取书籍二级分类
    getCategorys(params) {
        return fetch('get', '/category/getSecondCategoryList', params)
    },
    // 申请试用发送邮箱
    sendEmail(params) {
        return fetch('post', '/trial/sendApplyEmail', params)
    },
    // Eink扫描二维码打开APP次数统计
    checkAccess(params) {
        return fetch('post', '/access', params)
    },
}