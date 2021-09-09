<template>
    <div class="section-header__update-list">
        <img src="@/assets/Img/icon/updateNewsList.png" alt="" class="update-list_img">
    </div>
</template>

<style lang='scss' scoped>
.section-header__update-list{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 30px;
    border-radius: 100%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    transition: .1s;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 30px;
            height: 30px;
            margin-left: 15px;
        }
            
        .update-list_img{
            width: 20px;
            height: 16px;

            @media screen and (max-width: 768px) {
               width: 18px;
                height: 14px;
            }
        }
    }
.section-header__update-list:hover{
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);;
}
</style>