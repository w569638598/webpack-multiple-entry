<template>
  <div class="partnerBox">
    <div class="title">合作优势</div>
    <div class="list flex flexBetween flexwarp">
      <div class="listItem wow animate__fadeInLeft">
        <img src="@assets/images/index/xtkssx.png" alt="" />
        <div class="title">系统快速上线</div>
        <div class="desc">成熟的购票系统、满足多场景对接需求，最快当天上线</div>
      </div>
      <div class="listItem wow animate__fadeInLeft">
        <img src="@assets/images/index/zdypp.png" alt="" />
        <div class="title">自定义品牌</div>
        <div class="desc">支持部署自己的小程序，自助域名绑定，品牌完全自主化</div>
      </div>
      <div class="listItem wow animate__fadeInLeft">
        <img src="@assets/images/index/qstbs.png" alt="" />
        <div class="title">全生态部署</div>
        <div class="desc">微信生态、支付宝小程序生态、抖音小程序生态、App生态</div>
      </div>
      <div class="listItem wow animate__fadeInLeft">
        <img src="@assets/images/index/dzyxfs.png" alt="" />
        <div class="title">多种营销方式</div>
        <div class="desc">支持优惠券、权益包、消费金、积分商城，促活用户、提高转化</div>
      </div>
      <div class="listItem wow animate__fadeInRight">
        <img src="@assets/images/index/ksjslr.png" alt="" />
        <div class="title">快速结算利润</div>
        <div class="desc">电影放映结束2小时后结算利润</div>
      </div>
      <div class="listItem wow animate__fadeInRight">
        <img src="@assets/images/index/ssfzxt.png" alt="" />
        <div class="title">实时分账系统</div>
        <div class="desc">通过实时分账功能实现SaaS系统 免预存充值，无垫资压力。</div>
      </div>
      <div class="listItem wow animate__fadeInRight">
        <img src="@assets/images/index/jkkfpt.png" alt="" />
        <div class="title">接口开发平台</div>
        <div class="desc">提供api接口对接，满足开发者自定义开发需求</div>
      </div>
      <div class="listItem wow animate__fadeInRight">
        <img src="@assets/images/index/zytd.png" alt="" />
        <div class="title">专业团队</div>
        <div class="desc">专业客服、运营、技术团队一对一售后、为您保驾护航</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue"
</script>

<style lang="less" scoped>
@import '@assets/base.less';
.partnerBox {
  background: linear-gradient(180deg, #fbfdff 0%, #f0f7ff 100%);
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
      width: 25%;
      border-radius: 2px;
      padding: 20px;
      box-sizing: border-box;
      transition: all 0.3s;
      &:hover {
        // transform: translateY(-10px);
        transform: scale(1.1);
      }
      img {
        width: 80px;
        height: 80px;
      }
      .title {
        margin: 16px 0 12px;
        font-size: 20px;
        padding: 0;
        font-weight: 500;
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
