<template>
    <div class="section-header-right">
        <form name="search" class="section-header__search-form">
            <img src="@/assets/Img/icon/search.png" alt="" class="search-form_img">
            <input type="text" class="search-form_input" />
        </form>
    </div>
</template>


<style lang='scss' scoped>
.section-header-right{
    display: flex;
    height: 100%;
    align-items: center;
    .section-header__search-form{
        position: relative;
        width: 320px;
        height: 40px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

        @media screen and (max-width: 1024px) {
            width: 300px;
        }
        @media screen and (max-width: 768px) {
            width: 250px;
        }
        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }
    .search-form_input{
        width: 100%;
        height: 100%;
        padding-left: 10px;
    }
    .search-form_img{
        position: absolute;
        width: 20px;
        height: 20px;
        right: 13px;
        top: 10px;
    }
}
</style>