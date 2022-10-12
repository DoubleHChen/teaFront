<template>
  <div id="wenhua">
    <h1 class="title_font">功夫茶•文化</h1>
    <div class="con row">
      <div class="con-left1 col-md-7 col-xs-12 hidden-xs">
        <img src="img/wen.jpg" alt="" class="img-circle">
        <!-- <div class="mao"></div> -->
        <div class="circle-img"></div>
        <div class="circle-pic"></div>
        <img src="img/field.png" alt="" class="tu tu-field">
        <img src="img/tea.png" alt="" class="tu tu-tea">
        <img src="img/water.png" alt="" class="tu tu-water">
        <img src="img/mountain.png" alt="" class="tu tu-mountain">
        <h6 class="title_font text text-field">田</h6>
        <h6 class="title_font text text-tea">茶</h6>
        <h6 class="title_font text text-water">水</h6>
        <h6 class="title_font text text-mountain">山</h6>
      </div>
      <div class="con-right col-md-5 col-xs-12">
        <ul class="shu">
          <li>具有重要意义和作用。</li>
          <li>对弘扬潮汕文化的优良传统和丰富中华文化的内容，</li>
          <li>研究潮汕文化的丰富内涵和特色,</li>
          <li>潮汕文化是其中的组成部分。</li>
          <li>中华文化包括各民族、各民系、各地区、各种专题的文化，</li>
          <li>在世界多元文化中享有很高的声誉。</li>
          <li>光辉灿烂的汉文化历史悠久，内容十分丰富,</li>
          <li>也是汉族文化的重要文化是汉族文化的重要组成部分。</li>
          <li>潮汕功夫茶文化是潮汕文化,</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'WenHua',
  setup() {}
}
</script>
<style scpoed>
#wenhua {
  margin: 80px 0;
}
h1 {
  font-size: 60px;
  letter-spacing: 10px;
}
.title_font {
  font-family: 'hanjian';
  color: #343434;
}

.con {
  height: 600px;
  margin: 30px 0px;
  /* background-color: red; */
}

.con-left1 {
  position: relative;
  height: 100%;
  /* background-color: #532531; */
}

.img-circle {
  position: absolute;
  top: calc(50% - 200px);
  left: 100px;
  width: 400px;
  filter: blur(1.5px);
  /* 毛玻璃效果 */
  z-index: 3;
}

.circle-img {
  position: absolute;
  top: calc(50% - 215px);
  left: 85px;
  border: 7px solid #666666;
  border-radius: 50%;
  width: 430px;
  height: 430px;
}

.circle-pic {
  position: absolute;
  top: calc(50% - 215px);
  left: 285px;
  border: 3px solid #9d9d9d;
  border-radius: 50%;
  width: 430px;
  height: 430px;
  z-index: 0;
}

.tu {
  width: 80px;
  position: absolute;
}

.tu-field {
  top: 50px;
  left: calc(50% + 50px);
}

.tu-tea {
  top: 170px;
  left: calc(50% + 210px);
}

.tu-water {
  top: 350px;
  left: calc(50% + 210px);
}

.tu-mountain {
  top: 460px;
  left: calc(50% + 70px);
}
.text {
  font-size: 30px;
  position: absolute;
  color: #7e7e7e;
}
.text-field {
  top: 60px;
  left: calc(50% + 140px);
}

.text-tea {
  top: 240px;
  left: calc(50% + 280px);
}

.text-water {
  top: 425px;
  left: calc(50% + 220px);
}

.text-mountain {
  top: 520px;
  left: calc(50% + 40px);
}
.shu {
  writing-mode: vertical-lr; /* 文字竖排 */
  font-size: 19px;
  /* height: 100%; */
}
.shu li {
  border-left: 3px solid #8fc3c3;
  text-align: center;
  width: 60px;
  line-height: 54px;
  list-style: none;
  margin: 0 auto;
  color: #333;
}
.shu li:nth-child(1) {
  border-left: none;
}
@media screen and (max-width: 750px) {
  h1 {
    font-size: 25px;
  }
  .shu {
    font-size: 12px;
  }
  .shu li {
    border-left: 2px solid #8fc3c3;
    width: 40px;
    line-height: 36px;
  }
}
</style>
