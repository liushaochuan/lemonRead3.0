<!-- 用户登录日志页面 -->
<template>
    <div class="admin-box">
        <admin-navbar class="admin-navbar"></admin-navbar>
        <div class="admin-item">
            <el-table :data="signupList" border stripe style="width: 100%">
                <el-table-column align="center" prop="index" label="序号" width="180">
                </el-table-column>
                <el-table-column align="center" prop="createtime" label="时间">
                </el-table-column>
                <el-table-column align="center" prop="username" label="用户名">
                </el-table-column>
                <el-table-column align="center" prop="ip" label="IP">
                </el-table-column>
            </el-table>
            <el-pagination class="pagination-box right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="signupQuery.currentPage" :page-sizes="[5, 10, 20, 50, 100]" :page-size="signupQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import fetch from '../../util/fetch'

import adminNavbar from '../../components/adminNavbar';

export default {
    name: 'signupLog',
    components: {
        adminNavbar,
    },
    data() {
        return {
            signupQuery: { // 登录列表请求列表参数
                baseUrl: 'http://lemonread.com/',
                type: 1,
                currentPage: 1,
                pageSize: 10,
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IjEzNTkwNDUwNjg2IiwidXNlcklkIjozLCJpYXQiOjE1MjU4Mzc5MzgsImV4cCI6MTUyNjQ0MjczOH0.DqdMX_ciUByQP7MqkXj7pqXke_E0kb5x97D_IPgnOic'
            },
            total: 0,
            signupList: [],
        }
    },
    created() {

    },
    mounted() {
        this.search()
    },
    methods: {
        // 获取登录数据
        search() {
            document.documentElement.scrollTop = 0;
            const reqData = this.signupQuery
            fetch.getLogList(reqData).then(response => {
                const resData = response;
                if (resData.errcode) {
                    // 失败提示
                    this.$notify({
                        title: '失败',
                        message: resData.errmsg,
                        type: 'error',
                        duration: 2000
                    })
                    return;
                }
                // console.log('response', response)
                const signupList = response.rows;
                signupList.forEach((itme, index) => {
                    itme.index = index + 1
                });
                this.signupList = signupList
                this.total = response.total;
            })
        },
        // 获取登录数据并跳转到第一页
        initSearch() {
            this.signupQuery.currentPage = 1;
            this.search();
        },
        // 每页显示数量改变
        handleSizeChange(val) {
            this.signupQuery.currentPage = 1;
            this.signupQuery.pageSize = val;
            this.search();
        },
        // 当前页码改变
        handleCurrentChange(val) {
            this.signupQuery.currentPage = val;
            this.search();
        },
    },
}

</script>
<style>
.el-pagination__editor.el-input {
    top: -4px;
}

.el-pagination button {
    min-width: 35.5px;
    width: 35.5px;
}

.el-pagination .btn-next,
.el-pagination .btn-prev {
    min-height: 28px;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.admin-item {
    padding: 30px;
    padding-left: 230px;
    padding-top: 40px;
}

.pagination-box {
    margin-top: 30px;
    margin-right: 30px;
}

</style>
