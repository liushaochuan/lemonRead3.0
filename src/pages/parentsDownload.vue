<template>
    <div>
        <app-download :appInformation="appInformation"></app-download>
    </div>
</template>
<script>
import appDownload from '../components/appDownload';
import parentsLogo from '@/images/download/parents-logo.png';
export default {
    name: 'parentsDownload',
    components: {
        appDownload,
    },
    data() {
        return {
            appInformation: {
                role_type: 3,
                roleTypeStr: "家长端",
                roleLogo: parentsLogo,
                appDownloadUrl: "https://itunes.apple.com/cn/app/id1378902793", // 家长端苹果商店
                appSize: "55.80",
                appVersion: "V1.0.0",
                roleImgList: [
                    { index: 1, img: 'http://website.lemonread.com/parents01.png' },
                    { index: 2, img: 'http://website.lemonread.com/parents02.png' },
                    { index: 3, img: 'http://website.lemonread.com/parents03.png' },
                    { index: 4, img: 'http://website.lemonread.com/parents04.png' },
                ],
                rolePresentation: [
                     { textIndent: 1, str: "柠檬悦读家长APP，是一款帮助家长实时掌握孩子阅读能力、阅读作业完成情况的应用软件，与柠檬悦读学生APP配合使用。APP提供多维度阅读报告、作业报告、精选书籍推荐等功能，能有效帮助家长快速掌握孩子真实阅读能力，解决选书难的问题。" },
                    { textIndent: 2, str: "主要功能：" },
                    { textIndent: 2, str: "1、报告" },
                    { textIndent: 1, str: " 提供多维度阅读报告，详至日、周、月，帮助家长快速了解孩子真实阅读能力；" },
                    { textIndent: 2, str: "2、书城" },
                    { textIndent: 1, str: " 提供由多方权威机构、新课标推荐书单，按能力推荐适应内容，彻底解决选书困难的问题。" },
                ],
            }
        }
    },
}

</script>
<style>


</style>
