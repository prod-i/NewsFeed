<template>
    <div class="section-main-options">
        <div class="options-resources">

                <span class="options-resources__item" 
                    :class="{ active: selectedSort === ''}" 
                    @click='selectedSortUpdate("")'
                >Все</span>

                <span class="options-resources__item"
                    :class="{ active: selectedSort === 'lenta.ru' }" 
                    @click='selectedSortUpdate("lenta.ru")'
                >Lenta.ru</span>

                <span class="options-resources__item"
                    :class="{ active: selectedSort === 'mos.ru' }" 
                    @click='selectedSortUpdate("mos.ru")'
                >Mos.ru</span>

        </div>
        <div class="options-selector-display">
            <div class="display__line" 
                :class="{ active: listDisplayType === 'line' }" 
                @click='listDisplayTypeUpdate("line")'
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="8" fill="#C4C4C4"/>
                    <rect y="10" width="18" height="8" fill="#C4C4C4"/>
                </svg>
            </div>
            <div class="display__block" 
                :class="{ active: listDisplayType === 'block' }" 
                @click='listDisplayTypeUpdate("block")'
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" fill="#C4C4C4"/>
                    <rect y="10" width="8" height="8" fill="#C4C4C4"/>
                    <rect x="10" width="8" height="8" fill="#C4C4C4"/>
                    <rect x="10" y="10" width="8" height="8" fill="#C4C4C4"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        selectedSort: {type: String},
        listDisplayType: {type: String},
    },
    methods:{
        selectedSortUpdate(value){
            // this.$router.push({...this.$route, query:{...this.$route.query, sort: value && value}})
            this.$emit('selectedSortUpdate', value)
        },
        listDisplayTypeUpdate(type){
            this.$emit('listDisplayTypeUpdate', type)
        },
    },
}
</script>

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
.active rect{
    fill: #0029FF !important;
}
</style>