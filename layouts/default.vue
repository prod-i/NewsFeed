<template>
    <div class="container">

        <Header 
            :searchQuery='searchQuery'

            @refresh='refresh'
            @searchQueryUpdate='searchQueryUpdate'
            @searchPosts='searchPosts'
        />

        <Options 
            :selectedSort='selectedSort'
            :listDisplayType='getlistDisplayType'

            @selectedSortUpdate='selectedSortUpdate'
            @listDisplayTypeUpdate ='listDisplayTypeUpdate'    
        />

        <main class="section-main">
            <nuxt />
        </main>
    
    </div>
</template>

<script>
import SearchSortedPosts from '@/plugins/SearchSortedPosts.js'
export default {
    data(){
        return {
            searchQuery: '',
            search: '',
            selectedSort: '',
        }
    },
    methods:{
        refresh(){
            this.selectedSortUpdate('')
            this.search = '';
            this.sortPosts()
            this.$router.push('/');
        },
        searchQueryUpdate(value){
            this.searchQuery = value;
        },
        searchPosts(){
            this.search = this.searchQuery;
            this.sortPosts()
            this.$router.push({...this.$route, params:{id: 1}, query:{...this.$route.query, search: this.search}})
        },
        selectedSortUpdate(value){
            this.selectedSort = value;
            this.sortPosts()
        },
        listDisplayTypeUpdate(type){
            localStorage.listDisplayType = type;
            this.setListDisplayType(localStorage.listDisplayType)
        },
        sortPosts(){
            SearchSortedPosts.searchSortedPost(this.$store, this.getPosts, this.search, this.selectedSort)
        },
        setListDisplayType(type){
            if(type){
                this.$store.commit('setListDisplayType', type)
            }
        },
        setSelectedSort(type){
            if(type){
                this.selectedSort = type;
            } else{
                this.selectedSort = ''
            }
        },
        setSearch(type){
            if(type){
                this.search = type;
            } else{
                this.search = ''
            }
        },
    },
    computed:{
        getPosts(){
            return this.$store.getters['posts'];
        },
        getlistDisplayType(){
            return this.$store.getters['listDisplayType'];
        }
    },
    mounted(){
        this.setListDisplayType(localStorage.listDisplayType);
        this.setSelectedSort(this.$route.query.sort)
        this.setSearch(this.$route.query.search)
        this.sortPosts();
        console.log(this.getPosts);
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
    color:#0029FF !important;
}
</style>

