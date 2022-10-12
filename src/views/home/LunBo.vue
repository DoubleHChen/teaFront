<template>
  <!-- 轮播图 -->
  <div id="lunbo">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- 图片 -->
      <div class="carousel-inner">
        <div v-for="item in list" class="item" :key="item.id" :class="item.id == 0 ? 'active':''">
          <img :src=item.img alt="">
          <!-- <div class="carousel-caption">
            <h3>{{item.text}}</h3>
          </div> -->
        </div>
      </div>
      <!--圆圈指示符-->
      <ul class="carousel-indicators">
        <li v-for="item in list" data-target="#myCarousel" :data-slide-to="item.id" :class="item.id == 0 ? 'active':''" :key="item.id">
        </li>
      </ul>
      <!-- 左右按钮 -->
      <a href="#myCarousel" class="carousel-control left" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left circle"></span>
      </a>
      <a href="#myCarousel" class="carousel-control right" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right circle"></span>
      </a>

    </div>
  </div>
  <!-- 成员 -->
</template>
<script>
export default {
  name: 'LunBo',
  setup() {
    const list = [
      {
        id: 0,
        text: '这是第一张图片',
        img: 'img/lunbo1.jpg'
      },
      {
        id: 1,
        text: '这是第二张图片',
        img: 'img/lunbo2.jpg'
      },
      {
        id: 2,
        text: '这是第三张图片',
        img: 'img/lunbo3.jpg'
      }
      // {
      //   id: 3,
      //   text: '这是第四张图片',
      //   img: 'img/Hippopx7.jpg'
      // }
    ]
    return { list }
  }
}
</script>
<style scoped>
#band img {
  width: 200px;
}

.nav-color {
  background: #b3b3b3;
  opacity: 0.3;
}

.item img {
  opacity: 0.9;
}
.carousel-indicators {
  position: absolute;
  bottom: 15%;
  left: 50%;
}
.circle {
  width: 70px;
  height: 70px;
  line-height: 70px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
}
@media screen and (max-width: 750px) {
  .circle {
    /* width: 0px; */
    /* height: 0px; */
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
