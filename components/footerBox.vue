<template>
  <div class="footerBox">
    <div class="serverAdvantage">
      <div class="contentCenter">
        <div class="typeList" v-for="item in serverAdvantage" :key="item.id" @click="typeClick(item.id)">
          <img :src="item.img" alt="">
          <span>
            {{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="innerBox flex flexBetween flexalignStart contentCenter">
      <img class="logo" src="@assets/images/index/logo_footer.png" alt="" srcset="" />
      <div class="rightBox">
        <div class="navBox">
          <div class="flex flexalignStart" v-for="(nav, index) in navList" :key="index" :style="{width: index == 2 ? '300px' : '', marginRight: index == 2 ? '0px' : ''}">
            <div>
              <div class="title">{{ nav.title }}</div>
              <div class="desc" v-for="item in nav.list" :key="item" @click="openPage(item.link)">{{ item.title }}<span
                  style="margin: 0" v-if="item.desc">：{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="qrcode">
          <img src="@assets/images/index/qrcode.jpg" alt="" srcset="" />
          <div class="title">官方公众号</div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <!-- <img class="logo" src="@assets/images/index/logo_footer.png" alt="" srcset="" /> -->
      <span>© 2020 ~ 2024 www.yhs.cn 河南影划算传媒有限公司 版权所有 | </span><a
        href="https://beian.miit.gov.cn/#/Integrated/index">豫ICP备2024034107号</a>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import resources from '@assets/images/footer/resources.svg'
import moreType from '@assets/images/footer/moreType.svg'
import interfaceIcon from '@assets/images/footer/interface.svg'
import engine from '@assets/images/footer/engine.svg'

function openPage(link) {
  if (!link) return;
  window.location.href = link
}

const serverAdvantage = [
  {
    title: '资源丰富，品类齐全',
    img: resources,
  },
  {
    title: '轻松对接，快速上线',
    img: interfaceIcon,
  },
  {
    title: '活动多样，便捷运营',
    img: moreType,
  },
  {
    title: '数据驱动，专业服务',
    img: engine,
  }
]
const navList = [
  {
    title: '产品服务',
    list: [
      {
        title: 'SaaS系统',
        link: 'saas.html',
      },
      {
        title: '电影卡',
        link: 'movieCard.html',
      },
      {
        title: '抖音电影票',
        link: 'douyin.html',
      }
    ],
  },
  {
    title: '关于我们',
    list: [

      {
        title: '关于我们',
        link: 'about.html',
      },
    ],
  },
  {
    title: '联系我们',
    list: [
      {
        title: '商务合作',
        desc: '15515755308'
      }, {
        title: '售后热线',
        desc: '400-017-9858'
      },
    ],
  },
]
</script>

<style lang="less" scoped>
@import '@assets/base.less';
@import '@assets/main.less';
@black-color: #0E1623;

@media(max-width: 1200px) {
  .footerBox {
    .copyright {
      padding: 8rem !important;

      a {
        font-size: @comLevel !important;
        .centerWrap()
      }
    }

    .innerBox {
      display: none;
    }

    .serverAdvantage {

      .contentCenter {
        flex-direction: column;
        padding: 6px 0 !important;

        .typeList {
          justify-content: flex-start !important;
          width: 100%;
          padding: 6px 0 !important;
          border-bottom: solid 1px #212121;

          &:last-child {
            border-bottom: none;
          }

          img {
            width: 24rem;
          }
        }
      }
    }
  }
}

.footerBox {
  background-color: @black-color;
  // padding-top: 48px;
  box-sizing: border-box;

  .serverAdvantage {

    .contentCenter {
      padding: 40px 0;

      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px @text-color-regular;
    }

    .typeList {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 40px;
      }

      span {
        color: white;
        font-size: @fourthLevel;
        margin-left: 16px;
      }
    }
  }

  .innerBox {
    margin: 0 auto;
    width: 1200px;
    border-bottom: 1px solid @text-color-regular;
    padding: 40px 0;

    .logo {
      width: 200px;
      object-fit: contain;
    }

    .qrcode {
      padding-left: 56px;
      border-left: solid 1px @text-color-regular;

      img {
        width: 100px;
        height: 100px;
      }

      text-align: center;
    }

    .rightBox {
      display: flex;

      .navBox {
        display: flex;
        align-items: flex-start;

        &>* {
          width: 200px;

          &:last-child {
            margin-right: 60px;

            .desc {
              cursor: default;

              &:hover {
                border-bottom: none;
              }
            }
          }
        }

      }

      .title {
        color: rgba(255, 255, 255, .9);
        font-weight: bold;
        font-size: @fourthLevel;
        margin-bottom: 16px;
      }

      .desc {
        color: @text-color-secondary;
        line-height: 22px;
        margin-bottom: 8px;
        cursor: pointer;

        &:hover {
          border-bottom: solid 1px #5f6672;
        }
      }

    }
  }

  .copyright {
    padding: 32px 0;
    text-align: center;
    color: rgba(255, 255, 255, .55);
    a {
      color: rgba(255, 255, 255, .55);
      text-decoration: none;
    }
  }
}</style>
