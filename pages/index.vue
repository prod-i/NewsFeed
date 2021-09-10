<template>
  <main class="section-main">
    <Header />

    <Options
      :display='display'
      @onLineMod='onLineMod'
      @onBlockMod='onBlockMod'
    />

    <NewsList :posts='posts' :display='display'/>

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
      posts:[],
      display: true,
    }),
    methods:{
      refresh() {
        this.$forceUpdate()
      },
      onLineMod(){
        this.display = true
      },
      onBlockMod(){
        this.display = false
      },
    },
    computed: {
        postsXml() {
          const xml = [];
          this.$store.getters.posts.forEach(item=>{
            const parser = new DOMParser();
            xml.push(parser.parseFromString(item, "application/xml"))
          })
          return xml
        }
    },
    mounted(){
      console.log(1);
      const xmlParser = (elem) => {
        elem.childNodes.forEach(node=>{
          if(node.nodeName.match(/^i/)){
            const obj = {};
            node.childNodes.forEach(node=>{
              obj[node.nodeName] = node.textContent;
            })
            this.posts.push(obj)
          } else {
            xmlParser(node)
          }
        })
      }
      // console.log(this.postsXml);
      this.postsXml.forEach(item=>{
        xmlParser(item)
      })
    
    }
    
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
text-decoration: none;
}
button{
  border: 1px solid #af4646;
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