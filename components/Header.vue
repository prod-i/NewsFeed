<template>
        <header class="section-header">

            <div class="section-header-left">
                <div class="section-header__title">
                    <h1>Список новостей</h1>
                </div>

                <MyRefresh @refresh="refresh"/>

            </div>

            <MyInput 
                :searchQuery='searchQuery'
                @searchQueryUpdate='searchQueryUpdate' 
                @searchPosts='searchPosts'
            />

        </header>
</template>

<script>
export default {
    props:{
        searchQuery: {type: String}
    },
    methods:{
        searchQueryUpdate(value){
            this.$emit('searchQueryUpdate', value)
        },
        searchPosts(){
            this.$emit('searchPosts')
        },
        refresh(){
            this.$emit('refresh')
        }
    },
}
</script>



<style lang='scss' scoped>
.section-header{
    display: flex;
    justify-content:space-between;
    padding: 25px 0;
    border-bottom: 1px solid #DCDCDC;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }

    .section-header-left{
        display: flex;
        height: 100%;
        align-items: center;

        @media screen and (max-width: 600px) {
            justify-content:space-between;
            margin-bottom: 25px;
        }

        .section-header__title{
            font-size: 36px;

            @media screen and (max-width: 1024px) {
                font-size: 28px;
            }
            @media screen and (max-width: 768px) {
                font-size: 24px;
            }
            
        }
    }
}
</style>