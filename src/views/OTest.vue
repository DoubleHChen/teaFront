<template>
  <input type="text" v-model="user.id" /><br />
  <input type="password" v-model="user.psw" /><br />
  <button @click="test">login</button>
  <ul>
    <li>学号--课程号__成绩</li>
    <li v-for="(item,index) in user" :key="index">{{item.学号}}--{{item.课程号}}__{{item.成绩}}</li>
  </ul>
  <!-- <a href="show2?id= {{$y==0?0:$y-1}}">上一页</a>
  @for($i = 1;$i <= $yeshu; $i++) <a href="show2?id={{$i-1}}">{{$i}}</a>
    @endfor
    <a href="show2?id= {{$y==$yeshu-1?$yeshu-1:$y+1}}">下一页</a> -->
  <!-- {{$data -> links()}} -->

  <ul class="pagination">
    <li class="page-item btn"><a href="">上一页</a></li>
    <li v-for="(item,index) in pageNum" :key="index" class="page-item btn"><a href="">{{index}}</a></li>
    <li class="page-item btn"><a href="">下一页</a></li>
  </ul>
  <button @click="aaa">dianji</button>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: {},
      demo: {
        id: '',
        data: '',
        msg: ''
      },
      user: [],
      page: 1,
      pageNum: 0
    }
  },
  methods: {
    test() {
      console.log('object')
      // console.log(this.axios)
      // axios.get('http://127.0.0.1:8000/test?page=1').then((res) => {
      axios.get('http://127.0.0.1:8000/test?page=1').then((res) => {
        this.user = res.data.result
        this.pageNum = res.data.pageNum
        console.log(res.data.pageNum)
        // console.log(res.data.pageNun)
      })
      // this.axios.get('/api/test').then((res) => {
      //   this.user = res.data
      //   console.log(this.user)
      // })
      // this.axios.get('/test', this.user).then((res) => {
      // console.log(res)
      // this.user = res.data.data
      // console.log(this.user)
      // if (res.data.code == 201) {
      //   alert('用户不存在')
      // } else if (res.data.code == 202) {
      //   alert('密码错误')
      // }
      // })
    },
    getByPage() {
      axios.get(`http://127.0.0.1:8000/test?page=${this.page}`).then((res) => {
        console.log(res)
        this.user = res.data.result
      })
    },
    prev() {
      this.page = this.page-- > 0 ? this.page-- : this.page
      this.getByPage()
    },
    next() {
      this.page = this.page++ < this.pageNun - 1 ? this.page++ : this.pageNun - 1
      this.getByPage()
    },
    aaa() {
      let userId = this.$cookies.get('id')
      console.log(userId)
      if (userId === null) {
        this.$cookies.set('id', 'userId', 30 * 60)
        console.log(this.$cookies.get('id'))
      }
    }
  },
  mounted() {}
}
</script>
<style>
li {
  color: red;
  /* text-align: left; */
}
</style>