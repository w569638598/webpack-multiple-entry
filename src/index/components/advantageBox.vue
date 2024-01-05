<template>
  <div class="advantageBox">
    <div class="title wow animate__slideInDown">资源优势</div>
    <div class="list flex flexBetween">
      <div class="listItem wow animate__fadeInLeft">
        <img src="@assets/images/index/gfg.png" alt="" />
        <div class="title">高覆盖</div>
        <div class="desc">覆盖全国12000+家大小影院，如万达、大地、横店、万象、金逸、卢米埃等</div>
      </div>
      <div class="listItem wow animate__fadeInLeft">
        <img src="@assets/images/index/glr.png" alt="" />
        <div class="title">高利润</div>
        <div class="desc">数千家供票商竞价出票，最低3折成本出票，利润空间更高</div>
      </div>
      <div class="listItem wow animate__fadeInRight">
        <img src="@assets/images/index/glh.png" alt="" />
        <div class="title">高灵活</div>
        <div class="desc">双模式出票自由选择，特惠模式：利润空间高，极速模式：出票时间短</div>
      </div>
      <div class="listItem wow animate__fadeInRight">
        <img src="@assets/images/index/gwd.png" alt="" />
        <div class="title">高稳定</div>
        <div class="desc">阿里云多服务部署，实现各节点之间的网络高速互联，保障服务平稳运行。</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue"
</script>

<style lang="less" scoped>
@import '@assets/base.less';
.advantageBox {
  text-align: center;
  padding-bottom: 48px;
  .title {
    font-size: 28px;
    font-weight: 600;
    padding: 44px 0;
  }
  .list {
    width: 1200px;
    margin: 0 auto;
    .listItem {
      width: 238px;
      border: 1px solid @border-color-primarry;
      border-radius: 2px;
      padding: 20px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: translateY(-10px);
        // transform: scale(1.1);
      }
      img {
        width: 48px;
        height: 48px;
      }
      .title {
        padding: 0 0 12px;
        margin: 12px 0;
        font-size: 20px;
        font-weight: 500;
        border-bottom: 1px solid @border-color-regular;
      }
      .desc {
        font-size: 14px;
        color: @text-color-regular;
        line-height: 22px;
        text-align: left;
      }
    }
  }
}
</style>
