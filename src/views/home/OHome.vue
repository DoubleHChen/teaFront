<template>
  <ONav />
  <LunBo />
  <WenHua />
  <ZhiNan />
  <XuanXiang />
  <TeaPurchase />
  <!-- <OFoot /> -->
</template>
<script>
import ONav from './ONav.vue'
import LunBo from './LunBo.vue'
import ZhiNan from './ZhiNan.vue'
import WenHua from './WenHua.vue'
import XuanXiang from './XuanXiang.vue'
import TeaPurchase from './TeaPurchase.vue'
// import OFoot from './OFoot.vue'
// import { ref } from 'vue'
export default {
  name: 'OHome',
  components: { ONav, LunBo, XuanXiang, ZhiNan, WenHua, TeaPurchase }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

#box {
  width: 100%;
  height: 100vh;
  background-color: lightgreen;
}
</style>