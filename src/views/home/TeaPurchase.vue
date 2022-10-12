<template>
  <div id="tea">
    <div class="tea-header">
      <h1 class="tea-header_title">茶购/TeaPurchase</h1>
    </div>
    <ul class="tea-ul">
      <li v-for="(item,index) in teaList" :key="index" class="tea-li col-lg-4">
        <img :src=item.img alt="" class="tea-img">
        <h2 class="tea-name">{{item.name}}</h2>
        <h3 class="tea-newprice">现价￥{{item.newprice}}.00</h3>
        <h6 class="tea-oldprice">原价￥{{item.oldprice}}.00</h6>
        <button class="btn tea-btn" @click="judgeCookie(item)">点击购买</button>
      </li>
    </ul>
    <ul class="pagination">
      <li class="page-item "><a href="javascript:void(0)" @click="prev" class="btn">上一页</a></li>
      <li v-for="(item,index) in pageNum.num" :key="index" class="page-item " :class="(index+1) == now ? 'active' : '' "><a href="" class="btn ">{{index+1}}</a></li>
      <li class="page-item "><a href="javascript:void(0)" @click="next" class="btn">下一页</a></li>
    </ul>
  </div>
  <div class="alterbox" v-if="state">
    <h2>订单</h2>
    <h4>用户：{{user}}</h4>
    <h4>商品名：{{commodityInfo.name}}</h4>
    <h4>价格：{{commodityInfo.newprice}}</h4>
    数量: <button class=" btn" @click="num--" :disabled="num===1">-</button>
    {{num}}
    <button class=" btn" @click="num++" :disabled="num===10">+</button><br>
    <button class="btn btn-success" @click="handleTrueClick">确定</button>
    <button class="btn btn-info" @click="handleFalseClick">取消</button>
  </div>
</template>
<script>
import axios from 'axios'
import { onMounted, reactive, ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'TeaPurchase',
  setup() {
    const router = useRouter()
    let internalInstance = getCurrentInstance()
    let cookies = internalInstance.appContext.config.globalProperties.$cookies
    let teaList = reactive([])
    let pageNum = ref({ num: 0 })
    let now = ref(1)
    let state = ref(false)
    let commodityInfo = reactive({})
    let user = ref()
    let num = ref(1)
    onMounted(() => {
      axios.get('api/tea', { params: { page: 1 } }).then((res) => {
        // console.log(res.data.pageNum)
        // console.log(res.data.result)
        for (let i = 0; i < res.data.result.length; i++) {
          teaList[i] = res.data.result[i]
        }
        // teaList = res.data.result
        pageNum.value = { num: res.data.pageNum }
      })
    })
    const getByPage = (page) => {
      axios.get(`api/tea?page=${page}`).then((res) => {
        for (let i = 0; i < res.data.result.length; i++) {
          teaList[i] = res.data.result[i]
        }
        pageNum.value = { num: res.data.pageNum }
      })
    }
    //上一页
    const prev = () => {
      now.value = now.value-- > 0 ? now.value-- : 0
      // console.log(now.value)
      getByPage(now.value)
    }
    // 下一页
    const next = () => {
      now.value = now.value++ < pageNum.value.num ? now.value++ : pageNum.value.num
      console.log(now.value)
      getByPage(now.value)
    }
    //判断是否有cookie,购买商品
    const judgeCookie = (item) => {
      if (cookies.get('user') === null) {
        alert('您还没登录')
        router.push('/login')
      } else {
        user.value = cookies.get('user')
        commodityInfo.name = item.name
        commodityInfo.newprice = item.newprice

        state.value = true
      }
    }
    //确定修改
    const handleTrueClick = async () => {
      let commodityList = {
        user: user.value,
        name: commodityInfo.name,
        newprice: commodityInfo.newprice,
        num: num.value
      }
      // console.log(commodityList)
      axios.get('api/indent', { params: commodityList })
      state.value = false
    }
    //取消修改
    const handleFalseClick = () => {
      state.value = false
    }
    return {
      teaList,
      pageNum,
      now,
      state,
      commodityInfo,
      user,
      num,
      next,
      prev,
      getByPage,
      judgeCookie,
      handleTrueClick,
      handleFalseClick
    }
  }
}
</script>
<style scoped>
#tea {
  height: 800px;
  position: relative;
}
.tea-header {
  width: 100%;
  height: 150px;
  margin-bottom: 50px;
  background-color: #a7a7a7;
}
.tea-header_title {
  line-height: 150px;
  letter-spacing: 3px;
  color: #fff;
}
.tea-li {
  list-style: none;
}
.tea-img {
  width: 85%;
  border-radius: 50px;
  box-shadow: 2px 2px 15px #000;
}
.tea-name {
  color: #040404;
}
.tea-newprice {
  color: #e3a0a2;
}
.tea-oldprice {
  text-decoration: line-through;
  color: #ddd;
}
.tea-btn {
  padding: 8px 26px;
  color: #fff;
  background-color: #000;
}
.pagination {
  position: absolute;
  bottom: 0;
  left: 36%;
}
.alterbox {
  position: fixed;
  top: calc(50% - 150px);
  left: calc(50% - 200px);
  width: 400px;
  height: 300px;
  background-color: #bbb;
  border-radius: 5px;
}
.alterbox input {
  border-radius: 5px;
  margin: 10px 0;
  width: 90%;
  height: 40px;
  border: none;
  outline: none;
}
@media screen and (max-width: 750px) {
  #tea {
    height: 1800px;
    position: relative;
  }
  .pagination {
    position: absolute;
    bottom: 10%;
    left: 20%;
    width: 60%;
  }
}
</style>