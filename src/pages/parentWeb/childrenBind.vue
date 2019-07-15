<!-- 家长使用非家长端扫描二维码提示教程,APP内使用 -->
<template>
    <div>
        <div class="parent-box">
            <p class="box-title">
                绑定失败
            </p>
            <img src="../../images/download/error.png" class="error-img">
            <p>绑定失败，请使用柠檬悦读家长端扫码</p>
            <router-link  class="down-button" :to="{path: '/parentsDownload'}">去下载</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'childrenBind',
    components: {
    },
    data () {
        return {

        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.error-img{
    width: 40%;
    margin: 20px auto;
}
p{
    text-indent: 2em;
    width: 100%;
    line-height: 26px;
    font-size: 1.3rem;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    color: #999999;
}
.box-title{
    text-indent: 0;
    height: 60px;
    line-height: 60px;
    font-size: 1.7rem;
    color: #fff;
    text-align: left;
    background-color: #3794FF;
    margin-bottom: 20px;
}

.down-button {
    display: block;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
    background-color: #3794FF;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 5px;
}
</style>