<template>
    <div class="list-line__item">
        <div class="item-wrapper">
          <div class="item-image">
            <img
              :src='post.enclosure'
              alt=""
              class="item-image_img"
            />
          </div>
          <div class="item-preview">
            <a :href='post.link' class="item_preview__title active">{{post.title}}</a>
            <div class="item_preview__descr">{{post.description}}</div>
          </div>
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
  mounted(){
    // console.log(typeof('123') === 'string');
  },
}
</script>


<style lang='scss' scoped>
.list-line__item {
      height: 190px;
      margin-bottom: 20px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

      @media screen and (max-width: 600px) {
        height: fit-content;
      }

      .item-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 30px;
        height: 85%;
        @media screen and (max-width: 600px) {
          flex-direction: column;
          padding: 15px;
        }
        .item-image {
          width: 20%;

          @media screen and (max-width: 1024px) {
            width: 30%;
          }
          @media screen and (max-width: 768px) {
            width: 35%;
          }
          @media screen and (max-width: 600px) {
            width: 100%;
          }

          .item-image_img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
        .item-preview {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 76%;

          @media screen and (max-width: 1024px) {
            width: 66%;
          }
          @media screen and (max-width: 768px) {
            width: 61%;
          }
          @media screen and (max-width: 600px) {
            width: 100%;
          }

          .item_preview__title {
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;

            @media screen and (max-width: 600px) {
              margin-top: 15px;
              font-size: 16px;
            }
          }
          .item_preview__descr {
            font-size: 14px;
            font-weight: 400;

            @media screen and (max-width: 600px) {
              margin-top: 15px;
              font-size: 12px;
            }
          }
        }
      }
      .item-info {
        display: flex;
        justify-content: space-between;
        margin: 5px 30px;
        font-size: 14px;
        color: #DCDCDC;
      }
    }
</style>