/* eslint-disable vue/no-parsing-error */
<!-- 导航栏 -->
<template>
  <nav class="navbar navbar-fixed-top navbar-inverse navbar-inner">
    <div class="navbar-header">
      <a class="navbar-brand col-xs-10" href="#">
        <img src="img/logo.png" class="img-responsive navbar-img ">
        <div class="logo-text">
          <h4 class="logo_font">潮汕•功夫茶</h4>
          <h6 class="posi">/</h6>
          <h6 class="logo_font1">Changshan Gongfu Tea</h6>
        </div>
      </a>
      <button class="navbar-toggle col-xs-1" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar" v-for="(item,index) in 3" :key="index"></span>
      </button>

    </div>

    <div class="collapse navbar-collapse navbar-right">
      <ul class="nav navbar-nav mix">
        <li v-for="(item,index) in navList" :key="index">
          <a href="#" data-toggle="tab">{{item.title}}</a>
        </li>
        <li><a href="javascript:void(0);"><span class="glyphicon glyphicon-search" data-toggle="modal" data-target="#myModal" data-backdrop="static"></span></a></li>
        <!-- <button class="btn" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-search"></span></button> -->
        <li><a :href="state=='登录/注册'?'/#/login':'/#/home'" class="btn btn-group" @click="handleState">{{state}}</a></li>
      </ul>
    </div>
  </nav>
  <!-- 模态框 -->
</template>
<script>
import { onMounted, getCurrentInstance, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'ONav',
  setup() {
    const router = useRouter()
    let internalInstance = getCurrentInstance()
    let cookies = internalInstance.appContext.config.globalProperties.$cookies
    const navList = [
      {
        title: '主页'
      },
      {
        title: '文化'
      },
      {
        title: '指南'
      },
      {
        title: '联系'
      }
    ]
    let state = ref('登录/注册')
    onMounted(() => {
      if (cookies.get('user') === null) {
        state.value = '登录/注册'
        // console.log('2')
      } else {
        state.value = '退出登录'
        // console.log('1')
      }
    })
    const handleState = () => {
      cookies.remove('user')
      nextTick(() => {
        router.push('/#/home')
      })
    }
    return {
      navList,
      state,
      handleState
    }
  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

nav {
  /* width: 100%; */
  height: 80px;
  /* opacity: 0.5; */
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px 0px;
}
.img-responsive {
  width: 70px;
}
h4,
h6 {
  color: #fff;
}

.logo-text {
  display: flex;
  position: relative;
  width: 400px;
  margin: 5px 0 0 20px;
}

.logo_font {
  font-family: 'hanjian';
}

.logo_font1 {
  font-family: 'MA';
  position: absolute;
  top: 25px;
  left: 115px;
}
.posi {
  position: absolute;
  top: 18px;
  left: 105px;
}
.navbar-brand {
  display: flex;
}

.navbar-toggle {
  color: red;
}

.navbar-toggle {
  margin: 10px 10px;
}
.mix {
  /* background-color: rgba(0, 0, 0, 0.3); */
  text-align: right;
  padding-right: 30px;
}
@media screen and (max-width: 750px) {
  nav {
    padding: 0;
    height: 50px;
  }
  .navbar-header img {
    width: 60px;
    height: 50px;
  }
  .logo-text {
    margin: 5px 0;
  }
}
</style>
