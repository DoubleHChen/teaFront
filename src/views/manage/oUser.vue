<template>
  <div id="user">
    <table class="table table-striped  table-hover">
      <tr>
        <th>id</th>
        <th>user</th>
        <th>pwd</th>
        <th>email</th>
        <th></th>
      </tr>
      <tr v-for="item in userList.list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.user}}</td>
        <td>{{item.pwd}}</td>
        <td>{{item.email}}</td>
        <td>
          <button class="btn btn-info" @click="handleAlter(item)">修改</button>
          <button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
        </td>
      </tr>
    </table>
    <div class="alterbox" v-show="state">
      <input type="text" placeholder="请输入修改后的密码" v-model="newUserList.pwd"><br>
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
    let userList = reactive({
      list: []
    })
    let newUserList = reactive({})
    let state = ref(false)
    const getUserList = () => {
      axios.get('api/user', { params: { page: 1 } }).then((res) => {
        res.data.forEach((item) => userList.list.push(item))
      })
    }
    onMounted(() => {
      getUserList()
    })
    // 修改
    const handleAlter = (item) => {
      state.value = true
      newUserList = { ...item }
    }
    //删除
    const handleDelete = async (id) => {
      alert('确定删除数据吗？')
      await axios.get('api/deleteUser', { params: { id: id } }).then((res) => {
        userList.list = [...res.data]
      })
    }
    //确定修改
    const handleTrueClick = async () => {
      console.log({ ...newUserList })
      await axios.get('api/updateUser', { params: { ...newUserList } }).then((res) => {
        userList.list = [...res.data]
        console.log(res.data)
      })
      state.value = false
    }
    //取消修改
    const handleFalseClick = () => {
      state.value = false
    }
    return { userList, state, newUserList, handleAlter, getUserList, handleDelete, handleTrueClick, handleFalseClick }
  }
}
</script>
<style scoped>
#user {
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