<template lang="">
  <div class="container">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!--图片的容器-->
				<div class="carousel-inner">
					<div v-for="item in list" class="item" :key="item.id" :class="item.id == 0 ? 'active':''">
            <img :src=item.img alt="">
            <div class="carousel-caption">
              <h3>{{item.text}}</h3>
            </div>
          </div>
				</div>
				<!--圆圈指示符-->
					<ul class="carousel-indicators">
            <li
							v-for="item in list"
							data-target="#myCarousel"
							:data-slide-to="item.id"
							:class="item.id == 0 ? 'active':''"
							:key="item.id"
						>
						</li>
          </ul>
				<!--左右的按钮-->
				<a href="#myCarousel" class="carousel-control left" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left"></span>
				</a>
				<a href="#myCarousel" class="carousel-control right" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right"></span>
				</a>
			</div>
		</div>
</template>
<script>

export default {
  name:'LunBo',
	data() {
		return {
			list: [
				{
					id: 0,
					text: "这是第一张图片",
					img: "img/狼.jpg",
				},
				{
					id: 1,
					text: "这是第二张图片",
					img: "img/狼1.jpg",
				},
				{
					id: 2,
					text: "这是第三张图片",
					img: "img/狼2.jpg",
				},
				{
					id: 3,
					text: "这是第四张图片",
					img: "img/狼3.jpg",
				}
			]
		}
	},
}
</script>
<style lang="">
</style>