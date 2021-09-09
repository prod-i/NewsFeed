<template>
  <div class="section-main-list">

    <div class="section-main-list-block none">
        <ListBlock v-for='i in 4' :key='i'/>
    </div>


    <div class="section-main-list-line">
        <ListLine v-for='i in 3' :key='i'/>
    </div>


  </div>
</template>



<script>
export default {

}
</script>



<style lang='scss' scoped>
.section-main-list {
  margin-bottom: 50px;

  .section-main-list-line {
    display: block;
  }
  .section-main-list-block {
  display: flex;
  flex-wrap: wrap;
  }
  .none{
    display: none;
  }
}
</style>