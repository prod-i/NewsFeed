<template>
  <div class="section-main-pagination">
    <span class="pagination__item active">1</span>
    <span class="pagination__item">2</span>
    <span class="pagination__item">3</span>
    <span class="pagination__item">4</span>
    <span class="pagination__item item__space">...</span>
    <span class="pagination__item item__last">200</span>
  </div>
</template>

<style lang='scss' scoped>
.section-main-pagination{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    .pagination__item{
        font-size: 18px;
        font-weight: 700;
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>