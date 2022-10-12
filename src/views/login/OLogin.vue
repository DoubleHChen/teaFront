<template>
  <div class="login">
    <div class="container">
      <div class="form-box" ref="userBox">
        <!-- 注册 -->
        <div class="register-box" :class="stateRegister?'':'hidden'">
          <h3>register</h3>
          <input type="text" placeholder="用户名" v-model="userRegisterValue">
          <input type="email" placeholder="邮箱" v-model="emailRegisterValue">
          <input type="password" placeholder="密码" v-model="pwdRegisterValue">
          <input type="password" placeholder="确认密码" v-model="pwdTooRegisterValue">
          <button @click="handleRegister">注册</button>
        </div>
        <!-- 登录 -->
        <div class="login-box" :class="stateLogin?'':'hidden'">
          <h1>login</h1>
          <input type="text" name="user" placeholder="用户名" v-model="userLoginValue">
          <input type="password" name="pwd" placeholder="密码" v-model="pwdLoginValue">
          <button @click="handleLogin">登录</button>
        </div>
      </div>
      <div class="con-box left">
        <h2>欢迎来到<span>潮汕•功夫茶</span></h2>
        <p>好山好水出好茶你值得拥有</p>
        <img src="img/logo.png" alt="">
        <p>已有账号</p>
        <button @click="handleGoLogin">去登录</button>
      </div>
      <div class="con-box right">
        <h2>欢迎来到<span>潮汕•功夫茶</span></h2>
        <p>好山好水出好茶你值得拥有</p>
        <img src="img/logo.png" alt="">
        <p>没有账号？</p>
        <button @click="handleGoRegister">去注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  name: 'OLogin',
  setup() {
    const { ctx } = getCurrentInstance()
    const router = useRouter()

    let internalInstance = getCurrentInstance()
    let $cookies = internalInstance.appContext.config.globalProperties.$cookies

    let stateLogin = ref(true) //登录页面的状态
    let stateRegister = ref(false) //注册页面的状态
    let userLoginValue = ref()
    let pwdLoginValue = ref()
    let userRegisterValue = ref()
    let pwdRegisterValue = ref()
    let pwdTooRegisterValue = ref()
    let emailRegisterValue = ref()
    //去注册
    const handleGoRegister = () => {
      ctx.$refs.userBox.style.transform = 'translateX(80%)'
      stateRegister.value = true
      stateLogin.value = false
    }
    // 去登录
    const handleGoLogin = () => {
      ctx.$refs.userBox.style.transform = 'translateX(0%)'
      stateLogin.value = true
      stateRegister.value = false
    }
    // 登录
    const handleLogin = async () => {
      let userLoginInfo = {
        user: userLoginValue.value,
        pwd: pwdLoginValue.value
      }
      if (userLoginValue.value === 'admin' && pwdLoginValue.value === 'admin') {
        router.push('/manage/user')
      } else {
        await axios.get('api/login', { params: userLoginInfo }).then((res) => {
          // console.log(res.data)
          if (res.data.code === 200) {
            $cookies.set('user', userLoginInfo.user, '30MIN')
            setTimeout(() => {
              router.push('/home')
            })
          } else if (res.data.code === 500) {
            alert('密码错误')
          } else {
            alert('用户不存在')
          }
        })
      }
    }
    // 注册
    const handleRegister = async () => {
      let userRegisterInfo = {
        user: userRegisterValue.value,
        pwd: pwdRegisterValue.value,
        email: emailRegisterValue.value
      }
      console.log(userRegisterInfo)
      await axios.get('api/register', { params: userRegisterInfo }).then((res) => {
        if (res.data.code === 200) {
          nextTick(() => {
            console.log('object')
            router.push('/login')
          })
        } else if (res.data.code === 500) {
          alert('用户已存在')
        }
      })
    }
    return {
      handleGoLogin,
      handleGoRegister,
      handleLogin,
      handleRegister,
      stateLogin,
      stateRegister,
      userLoginValue,
      pwdLoginValue,
      userRegisterValue,
      pwdRegisterValue,
      pwdTooRegisterValue,
      emailRegisterValue
    }
  }
}
</script>
<style scoped>
.login {
  /* 100%窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(-45deg, rgba(36, 137, 137, 0.4), rgba(92, 118, 121, 0.5), rgba(102, 102, 102, 0.3));
}
.container {
  background-color: #828888;
  width: 650px;
  height: 415px;
  border-radius: 5px;
  /* 阴影 */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  /* 相对定位 */
  position: relative;
}
.form-box {
  /* 绝对定位 */
  position: absolute;
  top: -10%;
  left: 5%;
  background-color: rgba(115, 155, 155, 1);
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* 动画过渡 加速后减速 */
  transition: 0.5s ease-in-out;
}
.register-box,
.login-box {
  /* 弹性布局 垂直排列 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.hidden {
  display: none;
  transition: 0.5s;
}
h1,
h3 {
  text-align: center;
  margin-bottom: 25px;
  /* 大写 */
  text-transform: uppercase;
  color: #fff;
  /* 字间距 */
  letter-spacing: 5px;
}
input {
  background-color: transparent;
  width: 70%;
  color: #fff;
  border: none;
  /* 下边框样式 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  text-indent: 10px;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 2px;
}
input::placeholder {
  color: #fff;
}
input:focus {
  color: #366f6f;
  outline: none;
  border-bottom: 1px solid #366f6f;
  transition: 0.5s;
}
input:focus::placeholder {
  opacity: 0;
}
.form-box button {
  width: 70%;
  margin-top: 35px;
  background-color: #f6f6f6;
  outline: none;
  border-radius: 8px;
  padding: 13px;
  color: #739b9b;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
}
.form-box button:hover {
  background-color: #366f6f;
  color: #f6f6f6;
  transition: background-color 0.5s ease;
}
.con-box {
  width: 50%;
  /* 弹性布局 垂直排列 居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 绝对定位 居中 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.con-box.left {
  left: -2%;
}
.con-box.right {
  right: -2%;
}
.con-box h2 {
  color: #ddd;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 4px;
}
.con-box p {
  font-size: 12px;
  letter-spacing: 2px;
  color: #ddd;
  text-align: center;
}
.con-box span {
  color: #739b9b;
}
.con-box img {
  width: 150px;
  /* height: 150px; */
  opacity: 0.9;
  margin: 40px 0;
}
.con-box button {
  margin-top: 3%;
  background-color: #fff;
  color: #739b9b;
  border: 1px solid #739b9b;
  padding: 6px 10px;
  border-radius: 5px;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
}
.con-box button:hover {
  background-color: #366f6f;
  color: #fff;
}
</style>