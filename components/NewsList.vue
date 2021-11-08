<template>
  <div class="section-main-list">

    <div class="section-main-list-line" v-if='listDisplayType === "line"'>
        <ListLine v-for='post in paginatedUsers' :key='post.link' :post='post'/>
    </div>

    <div class="section-main-list-block" v-else-if='listDisplayType === "block"'>
        <ListBlock v-for='post in paginatedUsers' :key='post.link' :post='post'/>
    </div>

    <Pagination 
      :pages='pages' 
      :pageNumber='pageNumber'
    />

  </div>
</template>



<script>
export default {

  props: {
    posts: {
      type: Array,
      required: true,
    },
    pageNumber: {
      type: Number,
      default: 1,
    },
  },
  
  computed:{
    pages(){
      if(this.display === true){
        return Math.ceil(this.posts.length / 3);
      } else {
        return Math.ceil(this.posts.length / 4);
      }
    },
    paginatedUsers(){
      if(this.listDisplayType === "line"){
        const from = (this.pageNumber - 1) * 3;
        const to = from + 3;
        return this.posts.slice(from, to);
      } else {
        const from = (this.pageNumber - 1) * 4;
        const to = from + 4;
        return this.posts.slice(from, to);
      }
    },
    listDisplayType(){
      return this.$store.getters['listDisplayType'];
    },
  },
}
</script>



<style lang='scss' scoped>
.section-main-list {
  margin-bottom: 50px;

  .section-main-list-line {
    display: block;
  }
  .section-main-list-block {
  display: flex;
  flex-wrap: wrap;
  }
}
</style>