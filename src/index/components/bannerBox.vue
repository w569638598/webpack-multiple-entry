<template>
  <div class="banner">
    <div class="innerBox flex flexalignCenter">
      <div class="left">
        <div class="title">影划算在线购票系统</div>
        <div class="line"></div>
        <div class="desc">
          专注提供特价电影票，覆盖全国12000+家电影院，在线订座、无需排队、极速出票、自助取票。
        </div>
      </div>
      <img src="@assets/images/index/index_banner.png" alt="" srcset="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.banner {
  width: 100%;
  min-width: 1200px;
  height: 440px;
  background: linear-gradient(90deg, #e5e8f0 0%, #e9eaf2 100%);
  .innerBox {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .left {
    width: 386px;
    margin-right: 120px;
  }
  .title {
    color: #1d2129;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
  }
  .line {
    background-color: #0968ff;
    width: 61px;
    height: 3px;
    margin: 24px 0;
  }
  .desc {
    font-size: 14px;
    color: #4e5969;
  }
}
img {
  width: 674px;
  height: 100%;
  object-fit: contain;
}
</style>
