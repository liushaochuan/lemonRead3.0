<template>
    <div>
        <app-download :appInformation="appInformation"></app-download>
    </div>
</template>
<script>
import appDownload from '../components/appDownload';
import teachersLogo from '@/images/download/teachers-logo.png';
export default {
    name: 'teachersDownload',
    components: {
        appDownload,
    },
    data() {
        return {
            appInformation: {
                role_type: 2,
                roleTypeStr: "教师端",
                roleLogo: teachersLogo,
                appDownloadUrl: "https://itunes.apple.com/cn/app/id1343555269", // 教师端苹果商店
                appSize: "60.80",
                appVersion: "V2.1.0",
                roleImgList: [
                    { index: 1, img: 'http://website.lemonread.com/teachers01.png' },
                    { index: 2, img: 'http://website.lemonread.com/teachers02.png' },
                    { index: 3, img: 'http://website.lemonread.com/teachers03.png' },
                    { index: 4, img: 'http://website.lemonread.com/teachers04.png' },
                ],
                rolePresentation: [
                    { textIndent: 1, str: "柠檬悦读老师APP，是一款能有效帮助老师跳出课时、实现自适应阅读教学的应用软件，与柠檬悦读学生APP配合使用。APP内置了精编作业题库、自动批改作业系统、多维度阅读报告等功能，可一键发布作业、自动检查批改作业，APP内提供了近20万道涵盖各类体裁和题材的测评题目，用以测评学生的阅读能力与水平，并以多维度数据报告呈现，帮助老师快速掌握班级整体的阅读情况。" },
                    { textIndent: 2, str: "主要功能：" },
                    { textIndent: 2, str: "1、布置作业" },
                    { textIndent: 1, str: " 内含近20万道涵盖各类体裁和题材的测评题目，可一键发布阅读、朗读作业；" },
                    { textIndent: 2, str: "2、检查作业" },
                    { textIndent: 1, str: "内置“自动批改检查作业”功能，可根据学生阅读时长、完成度等自动批改阅读作业，内置“普通话标准发音”系统可根据学生朗读、发音标准等自动检测；" },
                    { textIndent: 2, str: "3、阅读报告" },
                    { textIndent: 1, str: "提供每个学生、班级整体的多维阅读数据，助力老师掌握班级真实的阅读情况。" },
                ],
            }
        }
    },
}

</script>
<style>


</style>
