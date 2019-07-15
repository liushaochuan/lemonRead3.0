<template>
  <div class="app-container calendar-list-container">
    <!-- <el-card :style="{marginTop: screenHeight + 'px'}"> -->
      <el-card>
      <el-row slot="header" class="search">
        <el-col :span="19" class="button-box">
          <el-select v-model="searchKeyList.isBuitlin" size="mini" style="width: 120px;" @change="initSearch">
            <el-option label="是否内置书籍" :value="null"></el-option>
            <el-option label="是" :value="1"></el-option>
            <el-option label="否" :value="0"></el-option>
          </el-select>
          <el-select v-model="searchKeyList.categoryId" size="mini" style="width: 120px;" @change="initSearch">
            <el-option label="书籍分类" :value="null"></el-option>
            <el-option v-for="category in categorys" :key="category.id" :label="category.categoryName" :value="category.categoryId"></el-option>
          </el-select>
          <el-select v-for="(d, index) in otherTypes" :key="index" v-model="searchKeyList[d.searchKey]" size="mini" @change="initSearch" :placeholder="d.name" style="width: 120px;">
            <el-option v-for="(item, index) in d.list" :key="index" :value="index" :label="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" size="small" @click.stop="allEpubToTxt">全部下载</el-button>
        </el-col>
        <el-col :span="3">
          <el-input placeholder="书名/作者/授权单位" v-model="booksQuery.bookName" size="mini" @keydown.native.enter="initSearch">
            <el-button class="input-test" slot="append" icon="el-icon-search" @click="initSearch"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <div>
        <el-table :data="bookList" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%">
          <el-table-column label="排序" width="65" align="center">
            <template slot-scope="scope">
              <span>{{scope.row.index}}</span>
            </template>
          </el-table-column>
          <el-table-column label="ID" width="55" align="center">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="light" placement="top" style="width: 500px">
                <div slot="content">
                  <span>{{scope.row.isBuitlin ? '内置书籍' : '非内置书籍'}}</span>
                </div>
                <span :style="{color: scope.row.isBuitlin ? '#f78989' : '#a6a9ad'}">{{scope.row.bookId}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column label="书籍名称" min-width="120" align="center" tooltip-effect="light">
            <template slot-scope="scope">
              <span v-if="scope.row.bookKey === null">{{scope.row.bookName}}</span>
              <a v-else :href="scope.row.bookUrl">{{scope.row.bookName}}</a>
            </template>
          </el-table-column>
          <el-table-column label="封面" min-width="50" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.coverUrl" alt="" style="width: 100%">
            </template>
          </el-table-column>
          <el-table-column label="上架状态" align="center" min-width="80">
            <template slot-scope="scope">
              <span>{{scope.row.status === 1 ? '已上架' : '未上架'}}</span>
            </template>
          </el-table-column>
          <el-table-column label="年级" min-width="80" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.grade">{{otherTypes[5].list[scope.row.grade][0]}}年级</span>
            </template>
          </el-table-column>
          <el-table-column label="分类" min-width="80" align="center">
            <template slot-scope="scope">
              <span v-for="d in scope.row.categoryList" :key="d.categoryName"> {{d.categoryName}} </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" min-width="80" align="center">
            <template slot-scope="scope">
              <div class="button-box">
                <el-button v-if="scope.row.bookUrl" type="primary" size="small" @click.stop="epubToTxtRow(scope.row)">下载TXT文件</el-button>
                <!-- <el-button v-if="scope.row.bookUrl" type="primary" size="small" @click.stop="next">下一页</el-button> -->
                <el-button v-else type="danger" size="small">未上传书籍</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="page-footer">
          <div class="table-footer">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="booksQuery.currentPage" :page-sizes="[5, 10, 20, 50, 100, 200]" :page-size="booksQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
          </div>
        </div>
      </div>
    </el-card>
    <div id="wrapper" :style="{width: screenWidth + 'px', height: screenHeight + 'px'}">
      <div id="area"></div>
      <div class="page-divider"></div>
    </div>
    <div v-if="downLoading" class="loading-box" v-loading="downLoading" :element-loading-text="downLoadingText" :style="{width: screenWidth + 'px', height: screenHeight + 'px'}">
    </div>
  </div>
</template>
<script>
import fetch from '../util/fetch'
import bookDb from '../util/bookDb'
export default {
  data() {
    return {
      screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
      urlArr: ["http://api.lemonread.com:80" /*正式*/ , "http://121.199.24.124:3300" /*测试*/ , "http://192.168.1.36:3300" /*齐志彪*/ , "http://192.168.0.16:3300"],
      baseUrl: '',
      bookList: null, // 页面书籍列表
      total: 0, // 匹配书籍总数
      listLoading: false, // 正在加载动画开关
      booksQuery: { // 书籍列表请求列表参数
        bookName: '',
        currentPage: 1,
        pageSize: 10,
      },
      searchKeyList: { // 下拉框参数
        type: 0, // 1 课内，2 课外',
        grade: 0, // '年级
        media: 0, //'媒体：1 有声，2 无声',
        lang: 0, //'语言：1 中文，2 英语，3 双语',
        area: 0, //'地区：1 中国，2 欧美，3 日韩，4 其他',
        status: 0, //'上架状态：0 未上架，1 已上架'
        hasProbation: 0, //'有无试读：0 无试读，1 有试读'
        hasEncrypt: 0, //'有无加密本：0 无，1 有'
        categoryId: null, // 分类
        isBuitlin: null, // 是否内置书籍 0否 1是
        abilityId: 0 // C值范围
      },
      categorys: [], // 书籍分类二级列表
      otherTypes: [ // search
        { name: '上架状态', searchKey: 'status', list: ['上架状态', '未上架', '已上架'] },
        { name: '有无试读', searchKey: 'hasProbation', list: ['有无试读', '无试读', '有试读'] },
        { name: '有无加密本', searchKey: 'hasEncrypt', list: ['有无加密本', '无加密本', '有加密本'] },
        { name: 'C值范围', searchKey: 'abilityId', list: ['C值范围', '200~350C', '351~450C', '451~550C', '551~650C', '651~800C', '801~1000C', '1001~1300C', '1300C以上'] },
        { name: '书籍类型', searchKey: 'type', list: ['书籍类型', '课内', '课外'] },
        { name: '年级选择', searchKey: 'grade', list: ['年级选择', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级'] },
        { name: '媒体选择', searchKey: 'media', list: ['媒体选择', '有声', '无声'] },
        { name: '语言选择', searchKey: 'lang', list: ['语言选择', '中文', '英文', '双语'] },
        { name: '地区选择', searchKey: 'area', list: ['地区选择', '中国', '欧美', '日韩', '其它'] },
      ],
      bookInfo: null,
      info: {
        page: 1,
        totalPage: 10
      },
      book: null,
      toc: [],
      meta: null,
      cover: null,
      txtStr: '',
      lastCfi: '',
      downLoading: false,
      isDownloadAll: false,
      downLoadingText: '正在下载中....',
      epubDownloadList: [],
      epubDownloadIndex: 0,
    }
  },
  methods: {
    // 获取书籍分类二级列表
    getCategorys() {
      const reqData = {
        token: this.$route.query.token,
        baseUrl: this.baseUrl
      }
      fetch.getCategorys(reqData).then(response => {
        this.categorys = response;
      })
    },
    // 获取书籍数据
    search() {
      this.listLoading = true // 正在加载动画开关
      const reqData = this.booksQuery;
      for (const key in this.searchKeyList) {
        reqData[key] = this.searchKeyList[key]
      }
      reqData.baseUrl = this.baseUrl
      reqData.token = this.$route.query.token
      reqData.status = reqData.status === 0 ? null : --reqData.status
      reqData.hasProbation = reqData.hasProbation === 0 ? null : --reqData.hasProbation
      reqData.hasEncrypt = reqData.hasEncrypt === 0 ? null : --reqData.hasEncrypt
      for (const key in reqData) {
        if (reqData[key] === null) {
          delete reqData[key]
        }
      }
      // console.log('reqData', reqData)
      fetch.getBookList(reqData).then(response => {
        const resData = response
        const bookList = resData.rows;
        for (var i = 0; i < bookList.length; i++) {
          bookList[i].index = i + 1;
          bookList[i].isChecked = false;
        }
        this.bookList = resData.rows;
        this.total = resData.total;
        this.listLoading = false
      }).catch(err => {
        console.log('err', err)
      });
    },
    // 获取书籍数据并跳转到第一页
    initSearch() {
      this.booksQuery.currentPage = 1;
      this.search();
    },
    // 每页显示数量改变
    handleSizeChange(val) {
      this.booksQuery.currentPage = 1;
      this.booksQuery.pageSize = val;
      this.search();
    },
    // 当前页码改变
    handleCurrentChange(val) {
      this.booksQuery.currentPage = val;
      this.search();
    },
    // 全部下载
    allEpubToTxt() {
      this.isDownloadAll = true
      // 下载列表清空赋值
      this.epubDownloadList = []
      this.epubDownloadIndex = 0
      this.bookList.forEach(item => {
        if (item.bookUrl != '') {
          // 书籍下载中赋值
          item.isDownload = false
          this.epubDownloadList.push(item)
        }
      })
      this.epubToTxt(this.epubDownloadList[this.epubDownloadIndex])
    },
    // 单个书籍导出下载
    epubToTxtRow(row) {
      if (row.bookUrl == '') {
        this.$notify({
          title: '失败',
          message: '请先上传书籍',
          type: 'error',
          duration: 2000
        })
        return;
      }
      this.isDownloadAll = false
      // 单个下载列表清空赋值
      row.isDownload = false
      this.epubDownloadList = []
      this.epubDownloadIndex = 0
      this.epubDownloadList.push(row)
      this.epubToTxt(this.epubDownloadList[this.epubDownloadIndex])
    },
    // epub转txt并下载
    epubToTxt(row) {
      // 书籍赋值
      this.bookInfo = row
      this.loadBook(row.bookUrl)
    },
    // epub读取
    loadBook(content) {
      let bookName = this.bookInfo.bookName.replace(/.epub/g, '')
      this.downLoadingText = '正在下载' + bookName + '中...'
      // this.downLoading = true
      // epub赋值
      const ePub = window.ePub
      this.book = ePub({
        bookPath: content,
        width: this.screenWidth,
        height: this.screenHeight,
        restore: false,
        spreads: false
      })
      console.log('this.book', this.book)
      // epub准备函数,读取文件最后一章
      this.book.ready.all.then(() => {
        // nav.xhtml
        this.lastCfi = this.book.contents.spine[this.book.contents.spine.length - 1].cfi.slice(0, -1)
        if(this.lastCfi.indexOf('nav.xhtml') != -1) {
          this.lastCfi = this.book.contents.spine[this.book.contents.spine.length - 2].cfi.slice(0, -1)
        }
      })
      // epub成功开始函数
      this.book.on('renderer:locationChanged', locationCfi => {
        // console.log('locationCfi', locationCfi)
        // epub成功后下载为真表示正在读取
        this.epubDownloadList[this.epubDownloadIndex].isDownload = true
        // txt字符串拼接
        let innerText = this.book.renderer.render.docEl.innerText
        this.txtStr += innerText
        // 是否为最后一章判断,否则翻页
        if (locationCfi.indexOf(this.lastCfi) == -1) {
          this.next()
        } else {
          // console.log('this.txtStr',this.txtStr)
          // 最后一章时下载txt
          this.download(this.bookInfo.readingAbility + '_' + bookName + ".txt", this.txtStr)
          this.downLoading = false
          this.txtStr = ''
          this.epubDownloadIndex++
          // 批量下载时开始下一本书处理
          if (this.epubDownloadIndex < this.epubDownloadList.length && this.isDownloadAll) {
            this.epubToTxt(this.epubDownloadList[this.epubDownloadIndex])
          }
        }
      })
      // epub文件插入浏览器,必须
      this.book.renderTo('area').then(() => {})
      // 带参数的时间延时函数,延时10秒,判断epub文件是否正常加载
      function epubToTxtTry(index, that) {
        return function() {
          epubToTxtTrySetFun(index, that);
        }
      }

      function epubToTxtTrySetFun(index, that) {
        // 如果没有正常加载则epub文件出错,给出提示并清空字符串
        if (!that.epubDownloadList[index].isDownload) {
          that.downLoading = false
          that.txtStr = ''
          that.$notify({
            title: '失败',
            message: bookName + '错误,请检查或重新上传',
            type: 'error',
            duration: 0
          })
          // 开始下一本书处理
          that.epubDownloadIndex++
          if (index < that.epubDownloadList.length && that.isDownloadAll) {
            that.epubToTxt(that.epubDownloadList[that.epubDownloadIndex])
          }
          // 下载文件名带错误提示的空文件保存
          that.download('错误' + '_' + that.bookInfo.readingAbility + '_' + bookName + ".txt", bookName + '错误,请检查或重新上传')
        }
      }
      setTimeout(epubToTxtTry(this.epubDownloadIndex, this), 10000);
    },
    // epub翻下一页
    next() {
      this.book.nextPage()
    },
    // 下载txt文件
    download(filename, content) {
      var eleLink = document.createElement('a');
      eleLink.download = filename;
      eleLink.style.display = 'none'; // 字符内容转变成blob地址
      var blob = new Blob([content]);
      eleLink.href = URL.createObjectURL(blob); // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click(); // 然后移除
      document.body.removeChild(eleLink);
    },
  },
  mounted() {
    if(!this.$route.query.baseUrlIndex){
      this.$route.query.baseUrlIndex = 0
    }
    this.baseUrl = this.urlArr[this.$route.query.baseUrlIndex]
    this.getCategorys()
    this.search();
  },
}

</script>
<style lang='less' scoped>
.filter-container {
  display: flex;
  justify-content: space-between;
}

.mainer {
  display: flex;
  padding: 20px;
}

.button-top-margin {
  margin-top: 15px;
}

.panel {
  position: fixed;
  width: 200px;
  top: 250px;
  right: 100px;
  z-index: 1000;

  .el-card__header {
    color: white;
    background-color: #409eff;

    .close {
      float: right;
    }

    .close:hover {
      cursor: pointer
    }
  }

  button {
    margin: 10px
  }
}

.img-replace {
  width: 49px;
  height: 60px;
  background-color: #ff008038;
}

.form-item {
  input {
    width: 250px;
  }

  .option-box {
    float: right;
    margin: -32px 0 0 150px;
  }
}

.all-line {
  width: 100%;

  div,
  input,
  textarea {
    width: 800px;
  }
}

.page-footer {
  .btn-box {
    width: 30%;
    float: left;

    button {
      margin: 10px 0 5px 10px;
    }
  }
}

#wrapper,
.loading-box {
  margin: 0 auto;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

#wrapper {
  /* opacity: 0; */
}

.loading-box {
  z-index: 10;
}

</style>
