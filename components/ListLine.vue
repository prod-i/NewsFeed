<template>
    <div class="list-line__item">
        <div class="item-wrapper">
          <div class="item-image">
            <img
              src="@/assets/img/preview-1.png"
              alt=""
              class="item-image_img"
            />
          </div>
          <div class="item-preview">
            <div class="item_preview__title active">
              Первые земельные участки реализованы на специальных торгах для
              малого и среднего бизнеса
            </div>
            <div class="item_preview__descr">
              На каждый участок претендовали в среднем шесть участников.
              Стоимость одной из сделок выросла в ходе аукциона в 26 раз.
            </div>
          </div>
        </div>
        <div class="item-info">
          <div class="item_resource">www.mos.ru</div>
          <div class="item_date">12.01.2020</div>
        </div>
    </div>
</template>

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