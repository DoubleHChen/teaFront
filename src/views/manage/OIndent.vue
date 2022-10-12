<template>
  <div id="indent">
    <table class="table table-striped  table-hover">
      <tr>
        <th>user</th>
        <th>name</th>
        <th>newprice</th>
        <th>num</th>
      </tr>
      <tr v-for="item in indentList" :key="item.id">
        <td>{{item.user}}</td>
        <td>{{item.name}}</td>
        <td>{{item.newprice}}</td>
        <td>{{item.num}}</td>
        <td>
          <button class="btn btn-info">修改</button>
          <button class="btn btn-danger">删除</button>
        </td>
      </tr>
    </table>
  </div>

</template>
<script>
import { onMounted, reactive } from 'vue'
import axios from 'axios'
export default {
  setup() {
    let indentList = reactive([])
    const getUserList = () => {
      axios.get('api/getIndent', { params: { page: 1 } }).then((res) => {
        res.data.forEach((item) => indentList.push(item))
      })
    }
    onMounted(() => {
      getUserList()
    })
    return { indentList }
  }
}
</script>
<style  scoped>
table td {
  text-align: left;
}
td,
th {
  border: 1px solid #ddd;
}
</style>