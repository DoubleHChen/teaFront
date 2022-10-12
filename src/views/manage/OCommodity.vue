<template>
  <div id="">
    <table class="table table-striped  table-hover">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>oldprice</th>
        <th>newprice</th>
        <th>img</th>
        <th></th>
      </tr>
      <tr v-for="item in commodityList" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.oldprice}}</td>
        <td>{{item.newprice}}</td>
        <td>{{item.img}}</td>
        <td>
          <button class="btn btn-info" @click="handleAlter">修改</button>
          <button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
        </td>
      </tr>
    </table>
    <div class="alterbox" v-show="state">
      <input type="text" placeholder="请输入修改后的原价">
      <input type="text" placeholder="请输入修改后的优惠价">
      <input type="text" placeholder="请输入修改后的图片">
      <button class="btn btn-success" @click="handleTrueClick">确定</button>
      <button class="btn btn-info" @click="handleFalseClick">取消</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
// import { useRoute } from 'vue-router'
export default {
  setup() {
    // const router = useRoute()
    let commodityList = reactive([])
    let state = ref(false)
    const getUserList = () => {
      axios.get('api/commodity', { params: { page: 1 } }).then((res) => {
        res.data.forEach((item) => {
          commodityList.push(item)
        })
      })
    }
    onMounted(() => {
      getUserList()
    })
    // 修改
    const handleAlter = () => {
      state.value = true
    }
    //删除
    const handleDelete = async (id) => {
      await axios.get('api/deleteCommodity', { params: { id: id } }).then((res) => {
        commodityList = [...res.data]
      })
    }
    //确定修改
    const handleTrueClick = () => {
      state.value = false
    }
    //取消修改
    const handleFalseClick = () => {
      state.value = false
    }
    return { state, commodityList, handleAlter, getUserList, handleDelete, handleTrueClick, handleFalseClick }
  }
}
</script>
<style scoped>
#commodity {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* background-color: #532522; */
}
table td {
  text-align: left;
  vertical-align: middle;
}
td,
th {
  border: 1px solid #ddd;
  /* border-collapse: collapse; */
}
.alterbox {
  position: fixed;
  top: calc(50% - 150px);
  left: calc(50% - 200px);
  width: 400px;
  height: 300px;
  background-color: #bbb;
  border-radius: 5px;
}
.alterbox input {
  border-radius: 5px;
  margin: 10px 0;
  width: 90%;
  height: 40px;
  border: none;
  outline: none;
}
</style>