<template>
  <div class="basic-layout">
    <!-- 左侧菜单 -->
    <div :class="['nav-side',isCollapse?'unfold':'fold']">
      <div class="manager-title">
        <el-icon>
          <calendar />
        </el-icon>
        <span v-show="isCollapse">Manager</span>
      </div>
      <el-menu router default-active="2" class="el-menu-vertical-demo" :collapse="!isCollapse">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>用户信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/manage/user">user</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>商品信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/manage/commodity">commodity</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>订单详情</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/manage/indent">indent</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>

    <!-- 右侧可切换内容 -->
    <div class="content-right">
      <div class="content-right_top">
        <div class="menu-fold" @click="toggle">
          <el-icon>
            <fold />
          </el-icon>
        </div>
        <h3 class="logo_font">后台管理界面</h3>
      </div>
      <div class="content-right_bottom">
        <div class="box">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    let isCollapse = ref(true)
    const toggle = () => {
      isCollapse.value = !isCollapse.value
    }
    return { isCollapse, toggle }
  }
}
</script>
<style lang="scss" scoped>
.basic-layout {
  display: flex;
  box-sizing: border-box;
  .nav-side {
    width: 200px;
    height: 100vh;
    background: #001529;
    transition: all 1s;
  }
  // 合并
  .fold {
    width: 64px;
  }
  // 展开
  .unfold {
    width: 200px;
  }
  .manager-title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      color: #fff;
      span {
        margin-left: 5px;
        font-weight: 600;
      }
    }
  .content-right {
    flex: 1;
    &_top {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 20px;
      .menu-fold {
        margin-right: 8px;
        font-size: 18px;
        text-align: left;
        align-items: center;
      }
      h3{
        margin: 0;
      }
    }
    &_bottom {
      width: 100%;
      height:  calc(100% - 50px);
      padding: 20px;
      background-color: #eceef1;
      .box{
        height: 100%;
        background: #fff;
        border-radius: 16px;
        padding: 50px;
      }
    }
  }
  .logo_font {
  font-family: 'hanjian';
}
}

</style>