<!-- 向导页面,APP内使用 -->
<template>
    <div>
        <div class="guide-box">
            <img class="guide-img" :src="teacher">
            <img class="guide-img" :src="student">
            <div class="guide-video">
                <p>
                    发布作业与做作业
                </p>
                <a class="video-link" target="_blank" href="https://m.youku.com/video/id_XMzUyMzYwOTk4OA==.html?spm=a2hzp.8244740.0.0&source=&from=singlemessage&isappinstalled=0&ishttps=1">
                    <img class="guide-img" :src="video">
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import student from '@/images/index/student.jpg';
import teacher from '@/images/index/teacher.jpg';
import video from '@/images/index/video.jpg';

export default {
    name: 'guide',
    components: {
    },
    // metaInfo: {
    //   title: '柠檬悦读-中小学生分级阅读平台',
    //   meta: [{
    //     name: 'keyWords',
    //     content: '柠檬,博阅,柠檬悦读,柠檬阅读,阅读,学生阅读,分级阅读,阅读习惯,K12教育,小柠檬教育科技,让孩子爱上阅读'
    //   }],
    // },
    data () {
        return {
            student:student,
            teacher:teacher,
            video:video,
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.guide-box{
    width: 100%;
    .guide-img{
        width: 100%;
    }
    .guide-video{
        width: 100%;
        height: 60px;
        p{
            width: 100%;
            height: 60px;
            line-height: 60px;
            font-size: 1.5rem;
            box-sizing: border-box;
            padding-left: 15px;
            color: #fff;
            text-align: left;
            background-color: #008CFD;
        }
        .video-link{
            width: 100%;
        }
    }
}
</style>