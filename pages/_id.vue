<template>
  <main class="section-main">
    
    <NewsList v-if="getSortedPosts.length > 2" 
      :posts='getSortedPosts' 
      :pageNumber='pageNumber'
    />

  </main>
</template>


<script>
export default {
  data(){
    return{
      pageNumber: +this.$route.params.id || 1,
    }
  },
  async fetch({ store }){
    if(store.getters.posts.length === 0){
      await store.dispatch('fetchMoc')
      await store.dispatch('fetchLenta')
    }
  },
  computed: {
    getSortedPosts(){
      console.log(this.$store.getters['sortedPosts'])
      return this.$store.getters['sortedPosts'];
    }
  },  
  mounted(){
    // this.$route.query.key = 2;
    // console.log(this.$route.query);
  }
}
</script>
