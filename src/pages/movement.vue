<template>
  <article class="box">
    <main>
      <div class="big" v-for="d in list1" :key="d.companyNewId">
        <div class="cover"><img :src="d.coverKey" alt=""></div>
        <div class="text">
          <p class="title">{{d.title}}</p>
          <p class="previewContent">{{d.previewContent}}</p>
          <div class="more" @click="goWebkite(d)">
            了解更多 >>
          </div>
        </div>
      </div>
      <div class="small" v-for="d in list2" :key="d.companyNewId">
        <div class="cover">
          <img :src="d.coverKey" alt="">
        </div>
        <div class="text">
          <p class="title">{{d.title}}</p>
          <p class="previewContent">{{d.previewContent}}</p>
        </div>
        <div class="more"  @click="goWebkite(d)">
          了解更多 >>
        </div>
      </div>
    </main>
    <footer>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryData.currentPage" :page-sizes="10" :page-size="queryData.pageSize" layout="prev, pager, next" :total="total">
      </el-pagination>
    </footer>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  data () {
    return {
      queryData: {
        pageSize: 10,
        currentPage: 1
      },
      list: [],
      list1: [],
      list2: [],
      total: 0
    };
  },

  components: {},

  computed: {},

  created () {
    this.search()
    document.documentElement.scrollIntoView()
  },

  methods: {
    search () {
      // let url = 'http://121.199.24.124:3300/website/getCompanyNewList?'
      let url = 'http://api.lemonread.com/website/getCompanyNewList?'
      const query = 'pageSize=' + this.queryData.pageSize + '&currentPage=' + this.queryData.currentPage
      axios.get(url + query).then(data => {
        if(data.errcode) return
        this.list = data.retobj.rows
        this.total = data.retobj.total
        this.len = data.retobj.rows.length
        if(this.len <= 2) {
          this.list1 = this.list
        } else {
          this.list.forEach((item, index) => {
            if(index < 2) {
              this.list1.push(item)
            } else {
              this.list2.push(item)
            }
          })

        }
      })
    },
    // 当前页码改变时
    handleCurrentChange (val) {
      this.queryData.currentPage = val;
      this.search();
    },
    goWebkite(params) {
      this.$router.push({name: 'webkite', params})
    }
  }
}

</script>
<style lang='less' scoped>
.box {
  background-color: #f6f6f6;
}
main {
  width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  p {
    text-align: left;
  }
  .more {
    width: 126px;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid #aaa;
    color: #aaa;
    font-size: 20px;
    line-height: 33px;
    // text-overflow: ellipsis;
    // overflow: hidden;
  }
  .more:hover {
    cursor: pointer;
  }
  .big {
    background-color: #fff;
    display: flex;
    padding: 25px;
    margin-bottom: 25px;
    .cover {
      width: 50%;
      img {
        width: 100%;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      padding-left: 15px;
      .title {
        font-size: 25px;
        color: #555;
        line-height: 35px;
      }
      .previewContent {
        color: #aaa;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
  .small {
    background-color: #fff;
    display: flex;
    padding: 15px;
    border-bottom: 1px solid #aaa;
    align-items: center;
    .cover {
      width: 104px;
      height: 104px;
      img {
        width: 104px;
        height: 104px;
        border-radius: 10px;
      }
    }
    .text {
      width: 900px;
      padding: 0 15px;
      .title {
        font-size: 25px;
        color: #555;
        line-height: 35px;
        height: 35px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .previewContent {
        padding-top: 20px;
        width: 900px;
        color: #aaa;
        font-size: 16px;
        line-height: 28px;
        height: 28px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
footer {
  background-color: #fff;
  width: 1200px;
  margin:  0 auto;
  height: 130px;
  padding: 19px;
  box-sizing: border-box;
  border-bottom: 60px #f6f6f6 solid;
}
</style>