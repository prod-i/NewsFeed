<template>
  <div class="list-block__item">
    <div class="item-preview">
       <a :href='post.link' class="item-preview__title">{{post.title}}</a>
      <div class="item-preview__descr">{{post.description}}</div>
      <a href="#" class="item-preview__more">Подробнее</a>
    </div>
    <div class="item-info">
      <div class="item_resource" v-if='this.post.link.includes("mos.ru")'>www.mos.ru</div>
      <div class="item_resource" v-else>lenta.ru</div>
      <div class="item_date">{{post.pubDate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {},
  },
}
</script>

<style lang='scss' scoped>
  .list-block__item {
    display: flex;
    width: 48.5%;
    margin-right: 3%;
    margin-bottom: 3%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;

    @media screen and (max-width: 1024px) {
      height: 320px;
    }
    @media screen and (max-width: 600px) {
      height: 320px;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 3%;
    }

    .item-preview {
      padding: 30px 30px 0 30px;
      flex-grow: 1;

      @media screen and (max-width: 768px) {
        padding: 20px 20px 0 20px;
      }

      .item-preview__title {
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;

        @media screen and (max-width: 600px) {
          font-size: 15px;
        }
      }
      .item-preview__descr {
        font-size: 14px;
        font-weight: 400;
        padding: 10px 0;
        margin-bottom: 25px;

        @media screen and (max-width: 600px) {
          font-size: 13px;
        }
      }
      .item-preview__more {
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;

        @media screen and (max-width: 600px) {
          font-size: 13px;
        }
      }
    }
    .item-info {
      display: flex;
      justify-content: space-between;
      margin: 0 30px;
      padding: 10px 0;
      font-size: 14px;
      color: #DCDCDC;
    }
  }
  .list-block__item:nth-child(2n) {
    margin-right: 0;
  }
</style>