<template>
  <div class="zhinan" id="zhinan">
    <h1 class="title_font">功夫茶•指南</h1>
    <p class="title_font title-p">冲•茶•要•诀</p>
    <!-- 十二栅栏 -->
    <div class="row">
      <div class="col-lg-4  col-xs-12" v-for="item in list" :key="item.id">
        <h3><strong>{{item.title}}</strong></h3>
        <a data-toggle="collapse" :href="`#${item.href}`" class="img-a">
          <img :src="item.img" alt="" class="img-oblique">
        </a>
        <div class="border-oblique"></div>
        <div class="collapse" :id="item.href">
          <p><b>{{item.text1}}</b></p>
          <p><b>{{item.text2}}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ZhiNan',
  setup() {
    const list = [
      {
        id: 0,
        title: '水分三等',
        img: 'img/zhinan1.jpg',
        text1: '陆羽在《茶经》中写道：“其水，用山水上，江水中，井水下。',
        text2: '水分为天水、地水、泉水三等,而天水是最上乘的，指的是雪水、露水等。',
        href: 'demo1'
      },
      {
        id: 1,
        title: '高低冲斟',
        img: 'img/zhinan2.jpg',
        text1: '水壶举到一定的高度，让水柱形成一定的冲击力度，水的热力可以直透茶壶底部的茶，使冲泡出来的茶汤茶劲更足。',
        text2: '斟茶要把茶汤依次轮转洒入茶杯，反复二、三次把各个茶杯斟满，就叫做“关公巡城”，能使各杯里的茶汤汤色均匀。',
        href: 'demo2'
      },
      {
        id: 2,
        title: '品茶礼仪',
        img: 'img/zhinan3.jpg',
        text1:
          '不管多少客人,都只用三个杯子。喝茶时，按宾客的角度，把三个茶杯摆成“品”字形。第一杯茶一定先给左手第一位客人，无论其身份尊卑、年龄大小、性别。',
        text2: '品茶，先闻香味，然后看茶汤颜色，最后品味道，一杯茶要刚好分为三口品完。',
        href: 'demo3'
      }
    ]
    return { list }
  }
}
</script>
<style scoped>
.row {
  margin: 0;
}
.title_font {
  font-family: 'hanjian';
  color: #343434;
}
h1 {
  font-size: 60px;
  letter-spacing: 10px;
}
h3 {
  font-family: 'hanyi';
  margin: 20px 0;
}
.title-p {
  height: 100px;
  line-height: 100px;
  font-size: 40px;
  letter-spacing: 10px;
  background-color: #e5e5e5;
}
.img-oblique {
  transform: rotate(-2deg);
}
img {
  width: 250px;
}
.border-oblique {
  position: absolute;
  top: 95px;
  left: 33%;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  border: #93c2bf solid 5px;
  transform: rotate(12deg);
  z-index: -1;
}
.img-a {
  display: inline-block;
  margin: 30px 0;
}
.collapse p {
  text-align: center;
}
@media screen and (max-width: 750px) {
  h1 {
    font-size: 35px;
    letter-spacing: 5px;
  }
  h3 {
    font-family: 'hanyi';
    margin: 20px 0;
  }
  .title-p {
    height: 60px;
    line-height: 60px;
    font-size: 25px;
    letter-spacing: 5px;
    background-color: #e5e5e5;
  }
  img {
    width: 200px;
  }
  .border-oblique {
    width: 200px;
    height: 200px;
    border: #93c2bf solid 3px;
  }
  .img-a {
    display: inline-block;
    margin: 30px 0;
  }
  .collapse p {
    text-align: center;
  }
}
</style>