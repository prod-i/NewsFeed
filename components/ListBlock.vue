<template>
  <div class="list-block__item">
    <div class="item-preview">
      <div class="item-preview__title active">
        Первые земельные участки реализованы на специальных торгах для малого и
        среднего бизнеса
      </div>
      <div class="item-preview__descr">
        На каждый участок претендовали в среднем шесть участников. Стоимость
        одной из сделок выросла в ходе аукциона в 26 раз.
      </div>
      <a href="#" class="item-preview__more">Подробнее</a>
    </div>
    <div class="item-info">
      <div class="item_resource">www.mos.ru</div>
      <div class="item_date">12.01.2020</div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .list-block__item {
    width: 48.5%;
    margin-right: 3%;
    margin-bottom: 3%;
    height: 256px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

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
      height: 90%;
      padding: 30px 30px 0 30px;

      @media screen and (max-width: 768px) {
        padding: 20px 20px 0 20px;
      }

      .item-preview__title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 25px;
        cursor: pointer;

        @media screen and (max-width: 600px) {
          font-size: 15px;
        }
      }
      .item-preview__descr {
        font-size: 14px;
        font-weight: 400;
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
      font-size: 14px;
      color: #DCDCDC;
    }
  }
  .list-block__item:nth-child(2n) {
    margin-right: 0;
  }
</style>