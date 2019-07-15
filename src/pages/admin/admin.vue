<!-- admin首页页面 -->
<template>
    <div class="admin-box">
        <admin-navbar class="admin-navbar"></admin-navbar>
        <div class="admin-item" v-bind:style="{height:clientHeight + 'px'}">
            <img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" class="admin-img">
        </div>
    </div>
</template>
<script>
import adminNavbar from '../../components/adminNavbar';

export default {
    name: 'admin',
    components: {
        adminNavbar,
    },
    data() {
        return {
            clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

.admin-item{
    height: 100%;
    background-color: #E3E3E3;
}
</style>
