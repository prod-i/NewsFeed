<template>
  <main class="section-main">

    <Options />

    <NewsList />

    <Pagination />
    <!-- <ul>
      <li v-for='post in posts' :key='post.guid'>{{post}}</li>
    </ul> -->

  </main>
</template>

<script>
export default {

    async fetch({store}){
        if(store.getters.posts.length === 0){
            await store.dispatch('fetchMoc')
            await store.dispatch('fetchLenta')
        }
    },

    data: () => ({

    }),

    computed: {
        posts() {
            return this.$store.getters.posts;
        }
    },
    mounted(){
      const RSS_URL = `https://www.mos.ru/rss`;

      fetch(RSS_URL, {
        mode: 'no-cors',
      })
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => console.log(data))
    },
    
}
</script>




<style lang='scss'>
* {
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-size: 100%;
vertical-align: baseline;
background: transparent;
font-family: Arial, sans-serif;
}

.body{
    width: 100%;
    height: 100%;
}
.container{
    max-width: 1060px;
    width: 95%;
    margin: 0 auto;
}
.active{
    color:#0029FF;
}
</style>