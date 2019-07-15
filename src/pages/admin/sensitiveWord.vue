<!-- 敏感词列表页面 -->
<template>
    <div class="admin-box">
        <admin-navbar class="admin-navbar"></admin-navbar>
        <div class="admin-item">
            <div class="admin-head-box">
                <el-button style="width: 60px; height: 30px;" type="primary" size="mini" @click="handleAdd">添加</el-button>
                <el-input placeholder="请输入内容" v-model="sensitiveQuery.sensitiveName" class="input-with-select" @keydown.native.enter="handleSearch" style="width: 200px">
                    <el-button slot="append" icon="el-icon-search" size="mini" @click="initSearch"></el-button>
                </el-input>
            </div>
            <el-table :data="sensitiveList" border stripe style="width: 100%">
                <el-table-column align="center" prop="index" label="序号" width="180">
                </el-table-column>
                <el-table-column align="center" prop="words" label="关键词">
                </el-table-column>
                <el-table-column align="center" prop="createtime" label="时间">
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button style="width: 60px; height: 24px;" type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button style="width: 60px; height: 24px;" type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="pagination-box right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="sensitiveQuery.currentPage" :page-sizes="[5, 10, 20, 50, 100]" :page-size="sensitiveQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
        <!-- 添加/修改敏感词 -->
        <el-dialog :title="dialogStatus === 'create' ? '添加关键词' : '更新关键词信息'" :visible.sync="dialogFormVisible">
            <el-form :rules="rulesForSensitive" ref="sensitiveForm" :model="sensitiveTemp" label-position="left" label-width="100px" style='width: 80%; margin-left: 10%;'>
                <el-form-item label="关键词" prop="words">
                    <el-input v-model="sensitiveTemp.words" placeholder="(必填)请输入关键词名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button style="width: 60px; height: 30px;" @click="dialogFormVisible = false" size="mini">取 消</el-button>
                <el-button style="width: 60px; height: 30px;" v-if="dialogStatus==='create'" type="primary" @click="createData" size="mini">添加</el-button>
                <el-button style="width: 60px; height: 30px;" v-else type="primary" @click="upadateDate" size="mini">更新</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import fetch from '../../util/fetch'

import adminNavbar from '../../components/adminNavbar';

export default {
    name: 'sensitiveWord',
    components: {
        adminNavbar,
    },
    data() {
        return {
            sensitiveSearch: '',
            sensitiveQuery: { // 敏感词列表请求列表参数
                baseUrl: 'http://lemonread.com/',
                sensitiveName: '',
                currentPage: 1,
                pageSize: 10,
                token: this.sessionGetObj("token")
            },
            total: 0,
            sensitiveList: [],
            sensitiveTemp: { // 新增和修改表单所关联的数据
                words: '', // 关键词
            },
            dialogStatus: '', // 开启的表单类型：添加/更新
            dialogFormVisible: false, // 新增/更新表单是否显示
            rulesForSensitive: { // 表单参数验证
                words: [{ required: true, message: '关键词不能为空', trigger: 'blur' }], // 关键词
            },
            dialogFormDelate: false, // 新增/更新表单是否显示
        }
    },
    created() {

    },
    mounted() {
        this.search()
    },
    methods: {
        handleAdd() {
            this.dialogStatus = 'create'
            this.sensitiveTemp = {
                words: '', // 关键词
            };
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['sensitiveForm'].clearValidate()
            });
        },
        handleSearch() {
            this.sensitiveQuery.currentPage = 1
            this.search();
        },
        handleEdit(index, row) {
            this.dialogStatus = 'update'
            this.sensitiveTemp = JSON.parse(JSON.stringify(row));
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['sensitiveForm'].clearValidate()
            });
        },
        handleDelete(index, row) {
            const reqData = {
                id: row.id,
                token: this.sessionGetObj("token")
            }
            // console.log('reqData', reqData)
            this.$confirm('此操作将永久删除该关键词, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                fetch.deleteSensitiveWords(reqData).then(response => {
                    // console.log('response', response)
                    const resData = response;
                    if (resData.errcode) {
                        //失败提示
                        this.$notify({
                            title: '失败',
                            message: resData.errmsg,
                            type: 'error',
                            duration: 2000
                        })
                        return;
                    } else {
                        this.$notify({
                            title: '操作成功',
                            message: resData.errmsg,
                            type: 'success',
                            duration: 2000
                        })
                        this.search();
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        // 获取敏感词数据
        search() {
            document.documentElement.scrollTop = 0;
            const reqData = this.sensitiveQuery
            fetch.getSensitiveList(reqData).then(response => {
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
                const sensitiveList = response.rows;
                sensitiveList.forEach((itme, index) => {
                    itme.index = index + 1
                });
                this.sensitiveList = sensitiveList
                this.total = response.total;
            }).catch(err => {
                this.$notify({
                    title: '失败',
                    message: err.data.errmsg,
                    type: 'error',
                    duration: 2000
                })
            });
        },
        // 获取敏感词数据并跳转到第一页
        initSearch() {
            this.sensitiveQuery.currentPage = 1;
            this.search();
        },
        // 每页显示数量改变
        handleSizeChange(val) {
            this.sensitiveQuery.currentPage = 1;
            this.sensitiveQuery.pageSize = val;
            this.search();
        },
        // 当前页码改变
        handleCurrentChange(val) {
            this.sensitiveQuery.currentPage = val;
            this.search();
        },
        // 添加敏感词
        createData() {
            this.$refs['sensitiveForm'].validate((valid) => {
                if (valid) {
                    console.log('this.sensitiveTemp', this.sensitiveTemp)
                    // const reqData = this.sensitiveTemp;
                    const reqData = {
                        words: this.sensitiveTemp.words,
                        token: this.sessionGetObj("token")
                    };
                    console.log('reqData', reqData)
                    fetch.addSensitiveWords(reqData).then(response => {
                        console.log('response', response)
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
                        } else {
                            this.$notify({
                                title: '操作成功',
                                message: resData.errmsg,
                                type: 'success',
                                duration: 2000
                            })
                            this.dialogFormVisible = false;
                            this.search();
                        }
                    }).catch(err => {
                        this.$notify({
                            title: '失败',
                            message: err.data.errmsg,
                            type: 'error',
                            duration: 2000
                        })
                    });
                } else {
                    this.$notify({
                        title: '请检查您的输入信息',
                        message: '信息输入不完全或输入有误',
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
        // 更新敏感词
        upadateDate() {
            this.$refs['sensitiveForm'].validate((valid) => {
                if (valid) {
                    const reqData = {
                        id: this.sensitiveTemp.id,
                        words: this.sensitiveTemp.words,
                        token: this.sessionGetObj("token")
                    };
                    // console.log('reqData', reqData)
                    fetch.updateSensitiveWords(reqData).then(response => {
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
                        } else {
                            this.$notify({
                                title: '操作成功',
                                message: resData.errmsg,
                                type: 'success',
                                duration: 2000
                            })
                            this.dialogFormVisible = false;
                            this.search();
                        }
                    }).catch(err => {
                        this.$notify({
                            title: '失败',
                            message: err.data.errmsg,
                            type: 'error',
                            duration: 2000
                        })
                    });
                } else {
                    this.$notify({
                        title: '请检查您的输入信息',
                        message: '信息输入不完全或输入有误',
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
    },
}

</script>
<style>
.el-pagination__editor.el-input {
    top: -4px;
}

.el-pagination button,
.el-message-box__headerbtn {
    min-width: 35.5px;
    width: 35.5px;
}

.el-message-box__btns button {
    min-width: 60px;
    width: 60px;
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
    padding-top: 0;
}

.admin-head-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.search-box {
    width: 200px;
    margin-right: 50px;
    position: relative;
}

.search-button {
    width: 50px;
    height: 40px;
    position: absolute;
    top: 2px;
    right: 50px;
}

.pagination-box {
    margin-top: 30px;
    margin-right: 30px;
}

.el-pagination__editor.el-input {
    top: -4px;
}

</style>
