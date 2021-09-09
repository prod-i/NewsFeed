<template>
    <div class="section-main-options">
        <div class="options-resources">
                <span class="options-resources__item active">Все</span>
                <span class="options-resources__item">Lenta.ru</span>
                <span class="options-resources__item">Mos.ru</span>
        </div>
        <div class="options-selector-display">
            <div class="display__line">
                <img src="@/assets/img/icon/lineList.png" alt="">
            </div>
            <div class="display__block">
                <img src="@/assets/img/icon/blockList.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .section-main-options{
        display: flex;
        justify-content: space-between;
        padding: 25px 0;

        .options-resources{
            .options-resources__item{
                font-size: 14px;
                padding-right: 20px;
                font-weight: 700;
                cursor: pointer;
            }
        }   
        .options-selector-display{
            display: flex;

            .display__line{
                width: 18px;
                height: 18px;
                margin-left: 10px;
                cursor: pointer;
            }
            .display__block{
                width: 18px;
                height: 18px;
                margin-left: 10px;
                cursor: pointer;
            }
        }
    }
</style>