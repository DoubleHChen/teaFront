<template>
  <div class="box" ref="waitBox">
    <!--ref句柄 -->
    <div class="logo">
      <img src="/img/logo.png" alt="">
      <h1 class="logo_font1 shadow textColor">潮汕•功夫茶</h1>
      <h3 class="logo_font3 textColor shadow">Changshan Gongfu Tea</h3>
    </div>
    <div class="bg" @mousedown="handleMouseDown($event)" @mouseup="handleMouseUp($event)" @touchmove="handleTouchMove">
    </div>
    <img src="img/leaf.png" alt="" class="tu tu-1">
    <img src="img/leaf1.png" alt="" class="tu tu-2">
    <img src="img/leaf1.png" alt="" class="tu tu-3">
    <span class="glyphicon glyphicon-menu-down"></span>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
export default {
  // name:'Home',
  setup() {
    const router = useRouter()
    let downY = ref(0)
    let upY = ref(0)
    let num = ref(0)
    const { ctx } = getCurrentInstance() //全局对象，解构出上下文

    const handleMouseDown = (event) => {
      // console.log(event.clientY);
      downY.value = event.clientY
      console.log(`鼠标按下的x坐标${event.clientX},y坐标${downY.value}`)
    }
    const handleMouseUp = (event) => {
      upY.value = event.clientY
      console.log(`鼠标抬起的x坐标${event.clientX},y坐标${upY.value}`)
      num.value = downY.value - upY.value
      if (num.value > 100) {
        console.log(num.value)
        ctx.$refs.waitBox.style.transform = 'translateY(-100vh)'
        setTimeout(() => {
          router.push('/home')
        }, 1000)
      }
    }
    const handleTouchMove = () => {
      setTimeout(() => {
        router.push('/home')
      }, 1000)
    }
    return { handleMouseDown, handleMouseUp, handleTouchMove, downY, upY, num }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  user-select: none;
}
.box {
  transition: all 1s;
}
.logo {
  position: fixed;
  top: calc(50% - 200px);
  left: calc(50% - 150px);
}
.logo img {
  width: 240px;
  margin-left: 10px;
}
.logo_font1 {
  font-family: 'hanjian';
}
.logo_font2 {
  font-family: 'hanyi';
}
.logo_font3 {
  font-family: 'MA';
}
.logo_font4 {
  font-family: 'yuwei';
}

.shadow {
  text-shadow: 0 1px 2px #000000;
}
.textColor {
  color: #f0f0f0;
}
.bg {
  height: 100vh;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(251, 251, 251, 0.1) 60%);
}

.glyphicon-menu-down {
  position: fixed;
  top: 90%;
  left: calc(50% - 5px);
  animation: myanimation 2s infinite;
  transform-origin: center center;
}
h1,
h3 {
  margin: 0;
}
h1 {
  margin: 10px 0;
}
@keyframes myanimation {
  0% {
    transform: scale(3);
    opacity: 0.3;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(3);
    opacity: 0.3;
  }
}
.tu {
  position: fixed;
}
.tu-1 {
  top: calc(50% + 150px);
  left: calc(50% - 370px);
}
.tu-2 {
  top: calc(50% - 300px);
  left: calc(50% - 60px);
  width: 60px;
}
.tu-3 {
  top: calc(50% - 50px);
  left: calc(50% + 230px);
}
@media screen and (max-width: 750px) {
  .tu {
    position: fixed;
    width: 50px;
  }
  .tu-1 {
    top: calc(50% + 120px);
    left: calc(50% - 170px);
    width: 30px;
  }
  .tu-2 {
    top: calc(50% - 200px);
    left: calc(50% - 40px);
    opacity: 0.6;
  }
  .tu-3 {
    top: calc(50% - 50px);
    left: calc(50% + 130px);
  }
  .logo {
    /* position: fixed; */
    top: calc(50% - 100px);
    left: calc(50% - 90px);
    /* margin: 0 auto; */
  }
  .logo img {
    width: 140px;
  }
  h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 14px;
  }
}
</style>
