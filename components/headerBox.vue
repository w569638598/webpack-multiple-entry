<template>
  <div v-if="!isMobile" class="header flex flexalignCenter flexjustifyCenter publicHeader">
    <div class="inner flex flexalignCenter flexBetween">
      <img src="../assets/images/index/logo_header.png" @click="openPage('/')" alt=""
        style="cursor: pointer;" />
      <img class="mobileMenuIcon" src="/staticResources/header/menuIcon.svg" alt="">
      <div class="flex flexalignCenter navList">
        <div @click="openPage('/')" :class="[activeNav == 'home' ? 'active' : '']">首页</div>
        <!-- <div class="hasChild"
          :class="[(activeNav == 'saas' || activeNav == 'movieCard' || activeNav == 'douyin') ? 'active' : '']">
          <div class="parentNav">产品服务</div>
          <div class="childNav">
            <div class="navBox">
              <ul>
                <li :class="[activeNav == 'saas' ? 'active' : '']">
                  <div class="productItem flex flexalignCenter" @click="openPage('/html/saas/index.html')">
                    <img src="../assets/images/index/saas.svg" alt="" srcset="" />
                    SaaS系统
                  </div>
                </li>
                <li :class="[activeNav == 'movieCard' ? 'active' : '']">
                  <div class="productItem flex flexalignCenter" @click="openPage('/html/movieCard/index.html')">
                    <img src="../assets/images/index/card_icon.png" alt="" srcset="" />
                    电影卡
                  </div>
                </li>
                <li :class="[activeNav == 'douyin' ? 'active' : '']">
                  <div class="productItem flex flexalignCenter" @click="openPage('/html/douyin/index.html')">
                    <img src="../assets/images/index/dy_icon.png" alt="" srcset="" />
                    抖音电影票
                  </div>
                </li>

              </ul>
            </div>
            <span class="arrow"></span>
          </div>
        </div> -->
        <div @click="openPage('saas.html')" :class="[activeNav == 'saas' ? 'active' : '']">
          SaaS系统</div>
          <div @click="openPage('douyin.html')" :class="[activeNav == 'douyin' ? 'active' : '']">
          直播/短视频</div>
        <div @click="openPage('openPlatform.html')" :class="[activeNav == 'openPlatform' ? 'active' : '']">
          开放平台</div>
        <!-- <div @click="openPage('/html/news/index.html')" :class="[activeNav == 'news' ? 'active' : '']">资讯中心</div> -->
        <div @click="openPage('about.html')" :class="[activeNav == 'about' ? 'active' : '']">关于我们</div>
        <div class="btn" @click="login">进入控制台</div>
      </div>
    </div>
  </div>
  <mobileHeader v-if="isMobile"></mobileHeader>
</template>
  
<script setup>
import mobileHeader from './mobileHeader.vue';
import { ref, watch } from "vue"

const isMobile = ref(false)
isMobile.value = window.innerWidth <= 1200
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 1200
})
const pathname = window.location.pathname
const activeNav = ref('')
console.log(pathname)
activeNav.value = pathname.match(/\/(.*).html$/)?.[1] || 'home'
watch(isMobile, (val) => {
  if (val) {
    (function (doc, win, designWidth) {
      const html = document.documentElement;
      const refreshRem = () => {
        const clientWidth = html.getBoundingClientRect().width;
          html.style.fontSize = clientWidth / designWidth + "px";
      }
      doc.addEventListener("DOMContentLoaded", refreshRem)
    })(document, window, 375)
  }
})

const login = () => {
  location.href = 'https://pub.yhs.cn/#/login'
}

function openPage(path) {
  window.location.href = path
}
</script>
  
<style lang="less" scoped>
@import '@assets/base.less';

.el-dropdown-link:focus {
  outline: none;
}

@boxShadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

// .solutionActive {
//           .parentNav {
//             color: @blue;
//           }
//         }
.mobileMenuIcon {
  display: none;
}

.header {
  height: 80px;
  position: relative;
  z-index: 9999999999999999999;

  .inner {
    width: 1200px;

    .navList {

      .hasChild {
        position: relative;

        &:hover {
          .childNav {
            height: auto;
            padding: 12px;
          }
        }

        .parentNav {
          &::after {
            content: '';
            position: absolute;
            right: -20px;
            margin-top: 2.5px;
            width: 7px;
            height: 7px;
            border-style: solid;
            border-width: 1px;
            border-color: transparent transparent #ccc #ccc;
            transform: rotate(-45deg);
          }
        }

        .navBox {
          box-shadow: @boxShadow;
          border: 1px solid #e4e7ed;
          background: white;

        }

        .childNav {
          position: absolute;
          inset: 28px auto auto 50%;
          transform: translate(-50%, 0);
          transition: all .2s;
          height: 0;
          overflow: hidden;

          ul {
            margin: 0;
            padding: 6px 0;
            z-index: 10;

            .active {
              color: @blue;
            }

            li {
              list-style: none;
              display: flex;
              align-items: center;
              white-space: nowrap;
              list-style: none;
              line-height: 22px;
              padding: 8px 16px;
              margin: 0;
              cursor: pointer;
              outline: 0;
              color: @text-color-regular;

              .productItem {
                img {
                  width: 24px;
                  height: 24px;
                  margin-right: 8px;
                }
              }
            }
          }

          .arrow {
            position: absolute;
            top: 8px;
            right: 50%;
            width: 10px;
            height: 10px;
            // box-shadow: @boxShadow;
            background: white;
            z-index: 1;
            display: block;
            transform: rotate(45deg);
          }

        }
      }

      &>div {
        font-size: @fourthLevel;
        margin-right: 80px;
        position: relative;
        cursor: pointer;
        border-bottom: 3px solid transparent;

        &:last-child {
          margin-right: 0;
        }



        &.active {
          color: #2168ff;
          border-bottom: 3px solid #2168ff;
          padding-bottom: 6px;
        }

        &.btn {
          cursor: pointer;
          font-size: @comLevel;
          text-align: center;
          width: 90px;
          height: 36px;
          line-height: 36px;
          padding: 0;
          border-radius: 2px;
          color: #fff;
          background-color: @btn-bg-blue;
          display: inline-block;
        }

        .line {
          height: 3px;
          width: 100%;
          background-color: #2168ff;
          position: absolute;
          bottom: -4px;
          left: 0;
        }
      }
    }

    img {
      width: 200px;
      height: 50px;
    }
  }
}
</style>

<style lang="less"></style>
