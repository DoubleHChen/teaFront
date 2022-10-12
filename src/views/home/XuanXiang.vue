<template>
  <div class="" id="xuanxiang">
    <div class="logo">
      <img src="img/logo.png" alt="">
      <h4 class="logo_font">功夫茶•文化</h4>
    </div>
    <div class="xian"></div>
    <!-- <div class="container"> -->
    <div class="box">
      <ul class="nav nav-pills nav-stacked navbar-left ">
        <li v-for="item in list" :key="item.id" :class="item.id === 0 ? 'active' : '' ">
          <a :href="`#${item.href}`" data-toggle="tab">{{item.id}}</a>
        </li>
      </ul>
      <div class="tab-content">
        <div v-for="item in list" :id="item.href" class="tab-pane fade col-xs-12" :class="item.id === 0 ? 'active fade in' : '' " :key="item.id">
          <div class="tab-text">
            <h2>{{item.title}}</h2>
            <p>{{item.text}}</p>
            <button class="btn">
              查看详情
              <div class="glyphicon glyphicon-arrow-right"></div>
            </button>
          </div>
          <div class="box-img col-lg-8 col-xs-12">
            <img src="img/bg.png" alt="" class="bg">
            <div class="img">
              <div class="img-left">
                <img :src="item.img1" alt="">
              </div>
              <div class="img-right">
                <div class="img-right_top">
                  <img :src="item.img2" alt="">
                </div>
                <div class="img-right_bottom">
                  <img :src="item.img3" alt="">
                  <img :src="item.img4" alt="">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->

</template>
<script>
export default {
  name: 'XuanXiang',
  setup() {
    const list = [
      {
        id: 0,
        title: '茶史/TeaHistory',
        text: '潮汕功夫茶也称为潮州工夫茶，被尊称为“中国茶道”，起源于明代，中国茶文化盛行于唐朝，而......',
        href: 'menu1',
        img1: 'img/xuan1.jpg',
        img2: 'img/xuan2.jpg',
        img3: 'img/xuan3.jpg',
        img4: 'img/xuan4.jpg'
      },
      {
        id: 1,
        title: '茶礼/TeaCeremony',
        text: '潮汕人钟爱饮茶，乃至于把茶叶称为“茶米”，而在日常交际来往中喝茶也是......',
        href: 'menu2',
        img1: 'img/xuan14.jpg',
        img2: 'img/xuan2.jpg',
        img3: 'img/xuan3.jpg',
        img4: 'img/xuan4.jpg'
      },
      {
        id: 2,
        title: '茶饮/TeaDrinks',
        text: '潮汕人钟爱饮茶，乃至于把茶叶称为“茶米”，而在日常交际来往中喝茶也......',
        href: 'menu3',
        img1: 'img/xuan9.jpg',
        img2: 'img/xuan10.jpg',
        img3: 'img/xuan7.jpg',
        img4: 'img/xuan11.jpg'
      },
      {
        id: 3,
        title: '茶具/TeaSet',
        text: '工夫茶最讲究的第一是茶具。它之所以和其它喝茶方法有别也在于茶具。潮州工夫茶讲究茶......',
        href: 'menu4',
        img1: 'img/xuan5.jpg',
        img2: 'img/xuan6.jpg',
        img3: 'img/xuan7.jpg',
        img4: 'img/xuan8.jpg'
      },
      {
        id: 4,
        title: '茶购/TeaPurchase',
        text: '在潮汕本地，家家户户都喝功夫茶,所以潮汕功夫茶用......',
        href: 'menu5',
        img1: 'img/xuan13.jpg',
        img2: 'img/xuan2.jpg',
        img3: 'img/xuan3.jpg',
        img4: 'img/xuan4.jpg'
      }
    ]
    return { list }
  }
}
</script>
<style scoped>
#xuanxiang {
  position: relative;
  height: 700px;
  background-color: #a7a7a7;
  text-align: left;
  padding: 20px;
}
.logo {
  height: 70px;
}
.logo img {
  width: 70px;
  float: left;
}
h4 {
  font-size: 25px;
  color: #fff;
  margin: 20px 0 0 10px;
}
.logo_font {
  font-family: 'hanjian';
  float: left;
}
.box {
  margin: 80px 0 0 45px;
}

.xian {
  position: absolute;
  top: 120px;
  left: 74px;
  border-left: 3px #e4e4e4 solid;
  height: 520px;
}
.nav li a {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  text-align: center;
  margin-bottom: 80px;
}
.tab-content {
  margin: 36px;
}

.tab-content .btn {
  background-color: #72a5a6;
  color: #fff;
  width: 100px;
  font-size: 8px;
}
.tab-content .btn .glyphicon {
  margin: 0 10px;
}
.tab-pane {
  /* display: flex; */
  width: 100%;
}
.tab-text {
  width: 300px;
  float: left;
}
.box-img {
  position: relative;
  margin: -15% 0 0 25%;
}
.bg {
  width: 94%;
}
.box-img .img {
  width: 85%;
  height: 85%;
  z-index: 99;
  position: absolute;
  top: 10%;
  left: 4.5%;
  display: flex;
}

.img-left {
  width: 39%;
  margin-right: 2%;
}
.img-left img {
  width: 100%;
}
.img-right {
  width: 59%;
}
.img-right .img-right_top {
  margin-bottom: 3%;
}
.img-right .img-right_top img {
  width: 100%;
}
.img-right .img-right_bottom img:nth-child(1) {
  width: 44%;
  margin-right: 3%;
}
.img-right .img-right_bottom img:nth-child(2) {
  width: 53%;
}
@media screen and (max-width: 750px) {
  .nav-stacked {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-stacked li {
    flex: 1;
  }
  .box {
    margin: 0;
  }
  /* .tab-pane:nth-child(1),
  .tab-pane:nth-child(2),
  .tab-pane:nth-child(3),
  .tab-pane:nth-child(4),
  .tab-pane:nth-child(5) {
    margin-top: 0;
  } */

  .tab-content {
    margin: 0;
  }
  .nav {
    margin-left: 30px;
  }
  .nav li a {
    margin-bottom: 0;
  }
  .xian {
    top: -418px;
    left: 30px;
    border-left: none;
    border-bottom: 3px #e4e4e4 solid;
    width: 80%;
  }
  .bg {
    width: 100%;
  }
  .box-img {
    /* margin: -10% 0 0 25%; */
    margin: 0;
  }
  .box-img .img {
    left: 8%;
  }
}
</style>