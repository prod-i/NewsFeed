<template>
    <div class="section-main-options">
        <div class="options-resources">
                <span class="options-resources__item active">Все</span>
                <span class="options-resources__item">Lenta.ru</span>
                <span class="options-resources__item">Mos.ru</span>
        </div>
        <div class="options-selector-display">
            <div class="display__line" 
                :class="{ active: display }" 
                @click='$emit("onLineMod")'
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="8" fill="#C4C4C4"/>
                    <rect y="10" width="18" height="8" fill="#C4C4C4"/>
                </svg>
            </div>
            <div class="display__block" 
                :class="{ active: !display }" 
                @click='$emit("onBlockMod")'
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
    props: {
        modelValue: [String, Number],
        display: [Boolean],
    },
    methods: {
        refresh(e){
            this.$emit('refresh', e.target.value)
        }
    }
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