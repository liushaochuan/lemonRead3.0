<template>
    <div>
        <app-download :appInformation="appInformation"></app-download>
    </div>
</template>
<script>
import appDownload from '../components/appDownload';
import studentsLogo from '@/images/download/students-logo.png';
export default {
    name: 'studentsDownload',
    components: {
        appDownload,
    },
    data() {
        return {
            appInformation: {
                role_type: 1,
                roleTypeStr: "学生端",
                roleLogo: studentsLogo,
                appDownloadUrl: "https://itunes.apple.com/cn/app/id1330307320", // 学生端苹果商店
                appSize: "48.30",
                appVersion: "V2.0.0",
                roleImgList: [
                    { index: 1, img: 'http://website.lemonread.com/students01.png' },
                    { index: 2, img: 'http://website.lemonread.com/students02.png' },
                    { index: 3, img: 'http://website.lemonread.com/students03.png' },
                    { index: 4, img: 'http://website.lemonread.com/students04.png' },
                ],
                rolePresentation: [
                    { textIndent: 1, str: "柠檬悦读学生APP，是一款适用于中小学生的智分级阅读应用软件，基于学生阅读能力和读物的难易度区分等级，智能匹配适应的阅读内容，通过使用APP能有效帮助学生培养阅读习惯、提升阅读能力，同时辅助教师、家长为学生选择适合的读物。" },
                    { textIndent: 2, str: "主要功能：" },
                    { textIndent: 2, str: "1、阅读能力测评" },
                    { textIndent: 1, str: "定期阅读能力值测评，从五大维度检测学生的阅读能力和提升状况，全方位量化孩子的阅读能力，更有针对性地帮助孩子制定阅读计划；" },
                    { textIndent: 2, str: "2、智能分级匹配" },
                    { textIndent: 1, str: "通过定期测评，精准推荐有效帮助提升能力的书籍，提供科学的分级阅读规划，有效帮助学生提升阅读能力；" },
                    { textIndent: 2, str: "3、精选分级书城" },
                    { textIndent: 1, str: "课外阅读内容精选自多方权威机构推荐书目，涵盖各类体裁与题材，课内阅读与教材同步，可满足中小学全面阅读需求；" },
                    { textIndent: 2, str: "4、内置权威词典" },
                    { textIndent: 1, str: "内置汉语字典、英汉汉英大词典、歇后语词典、名言警句词典、同反义词大词典，帮助学生更快学习和掌握生词难句；" },
                    { textIndent: 2, str: "5、智能语音助读" },
                    { textIndent: 1, str: "遇到生词难句，可通过“语音求助”、“在线词典”等工具进行解疑，可进行“成语接龙”、“近义词、反正词”填空等辅助巩固阅读；" },
                    { textIndent: 2, str: "6、在线互动交流" },
                    { textIndent: 1, str: "读前：导读功能帮助学生快速梳理故事结构、背景等有效信息，加深理解；" },
                    { textIndent: 1, str: "读中：通过“注释”、“评论”、“趣味测试”等功能邀请老师或同学一起讨论章节；" },
                    { textIndent: 1, str: "读后：发表“评论”、“读后观点”，也可通过测试了解对“已阅”书籍的掌握情况；" },
                    { textIndent: 2, str: "7、多维阅读数据" },
                    { textIndent: 1, str: "学生阅读能力评估、阅读效果量化、学生阅读情况等多项大数据分析报告，精确了解每位学生的阅读能力，调整阅读教学方案。" },
                ],
            }
        }
    },
}

</script>
<style>


</style>
