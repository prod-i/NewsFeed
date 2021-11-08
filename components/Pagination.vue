<template>
  <div class="section-main-pagination">
    <div class="items" v-if='pages > 4'>
      <nuxt-link class="pagination__item" active-class='active' aria-current="page" :to='{...$route, params:{id: page}}' no-prefetch exact

      v-for='page in pagesCount' 
      :key='page'
      :class="{'active': page === pageNumber}"

      >{{page}}
      </nuxt-link>
      <span class="pagination__item" v-if="pageNumber !== pages">...</span>
      <nuxt-link class="pagination__item" active-class='active' aria-current="page" :to='{...$route, params:{id: pages}}' no-prefetch exact
      :class="{'active': pages === pageNumber}" 
      >{{pages}}</nuxt-link>
    </div>

    <div class="items" v-else>
      <nuxt-link class="pagination__item" active-class='active' aria-current="page" :to='{...$route, params:{id: page}}' no-prefetch exact
  
      v-for='page in pages' 
      :key='page'
      :class="{'active': page === pageNumber}"

      >{{page}}
      </nuxt-link >
    </div>
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
      if(1 < page && page < this.pages-1){
        this.pagesCount=[page-1,page,page+1,page+2]
      } else if(1 < page && page === this.pages-1){
        this.pagesCount=[page-2,page-1,page]
      }
    },
  },
  mounted(){
    this.pagesCountStart(this.pageNumber)
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
        color: #111;
    }
}
</style>