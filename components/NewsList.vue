<template>
  <div class="section-main-list">

    <div class="section-main-list-line" v-if='display'>
        <ListLine v-for='post in paginatedUsers' :key='post.link' :post='post'/>
    </div>

    <div class="section-main-list-block" v-else>
        <ListBlock v-for='post in paginatedUsers' :key='post.link' :post='post'/>
    </div>

    <Pagination 
      :pages='pages' 
      :pageNumber='pageNumber'
      @pageChange='pageChange'
    />

  </div>
</template>



<script>
export default {

  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    },
    display: [Boolean],
  },

  data(){
    return {
      pageNumber: 1,
      postsList: this.posts,
    }
  },
  methods:{
    pageChange(pageNumber){
      this.pageNumber = pageNumber
    },
  },
  computed:{
    pages(){
      if(this.display === true){
        return Math.ceil(this.postsList.length / 3);
      } else {
        return Math.ceil(this.postsList.length / 4);
      }
    },
    paginatedUsers(){
      if(this.display === true){
        const from = (this.pageNumber - 1) * 3;
        const to = from + 3;
        return this.postsList.slice(from, to);
      } else {
        const from = (this.pageNumber - 1) * 4;
        const to = from + 4;
        return this.postsList.slice(from, to);
      }
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