<template>
  <div class="section-main-pagination">
    <span class="pagination__item" 

      :class="{'active': page === pageNumber}"
      v-for='page in pagesCount' 
      :key='page'
      @click='$emit("pageChange", page); pagesCountStart(page)'

    >{{page}}
    </span>
    <span class="pagination__item">...</span>
    <span class="pagination__item last" :class="{'active': pages === pageNumber}" @click='$emit("pageChange", pages); pagesCountEnd(pages)'>{{pages}}</span>
    
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
    },
    pageNumber:{
      type: Number,
    },
  },
  data(){
    return{
      pagesCount: [1,2,3,4],
    }
  },
  methods:{
    pagesCountStart(page){
      if(1 < page && page < this.pages-3){
        this.pagesCount=[page-1,page,page+1,page+2]
      }
    },
    pagesCountEnd(page){
      this.pagesCount=[page-4,page-3,page-2,page-1]
    }
  }
}
</script>

<style lang='scss' scoped>
.section-main-pagination{
    display: flex;
    justify-content: center;
    margin: 50px 0;

    .pagination__item{
        font-size: 18px;
        font-weight: 700;
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>