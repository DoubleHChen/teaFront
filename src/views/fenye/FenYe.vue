<template lang="">
    <div class="books-container">
      <BooksCategoryList class="list"></BooksCategoryList>
      <BooksCategoryContent class="content"></BooksCategoryContent>
    </div>
</template>
<script>
import BooksCategoryList from '@/components/fenye/BooksCategoryList.vue';
import BooksCategoryContent from '@/components/fenye/BooksCategoryContent.vue';
export default {
  name:"FenYe",
  components:{ BooksCategoryList, BooksCategoryContent }
}
</script>
<style  scoped>
  .books-container{
    display: flex;
    width: 800px;
    margin: 0 auto;
  }
   .list{
     text-align: center;
     border: 1px solid red;
     width: 20%;
    }
    .content{
        border: 1px solid green;
        width: 80%;
    }
</style>