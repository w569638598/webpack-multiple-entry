<template>
  <div class="stepBox wow animate__slideInUp" :class="[textList.length > 4 ? 'moreItem' : '']">
    <div class="warpTitleBox wow animate__slideInDown">
      <h2 class="title contentTitle">{{ title }}</h2>
    </div>
    <div class="list flex flexjustifyCenter flexalignCenter">
      <template v-for="(item, i) of textList">
        <div class="listItem">
          <template v-if="!imgList">
            <img v-if="i == 0" src="@assets/images/index/zczh.png" alt="" />
            <img v-if="i == 1" src="@assets/images/index/hzqy.png" alt="" />
            <img v-if="i == 2" src="@assets/images/index/yydj.png" alt="" />
            <img v-if="i == 3" src="@assets/images/index/sxyy.png" alt="" />
          </template>
          <template v-else>
            <img :src="imgList[i]" alt="">
          </template>
          <div class="title">{{ item }}</div>
        </div>
        <img v-if="i != textList.length - 1" class="line" :src="isMobile ? mobileArrowIcon : arrow_line" alt=""
          srcset="" />
      </template>
    </div>
  </div>
</template>

<script setup>

// import { ref } from "vue"
// ['title', 'textList']
const { title, textList } = defineProps({
  title: {
    type: String,
    default: "合作流程",
  },
  textList: {
    type: Array,
    default: ['注册账号', '合作签约', '应用搭建', '上线运营'],
  },
  imgList: {
    type: Array,
    default: null,
  },

})
import mobileArrowIcon from '@assets/images/index/mobile_arrow.svg'
import arrow_line from '@assets/images/index/arrow_line.png'
import useIsMobile from '@hooks/useIsMobile'
const { isMobile } = useIsMobile()
</script>

<style lang="less" scoped>
@import '@assets/main.less';

@media(max-width: 1200px) {
  .moreItem {
    .list {
      height: auto !important;
      padding-top: 20rem;

      .line {
        top: -21rem !important;
      }

      .listItem {
        img {
          width: 30rem !important;
          height: 30rem !important;
        }

        div.title {
          font-size: 10rem !important;
        }
      }
    }
  }

  .stepBox {

    .contentTitle {
      padding: @titlePadding !important;
      font-size: @mobileTitleFs !important;
    }

    .list {
      .centerWrap();

      .line {
        width: auto !important;
      }

      .listItem {
        .title {
          font-size: 16px !important;
        }
      }
    }
  }
}

.moreItem {
  .listItem {
    .title {
      font-size: @thirdLevel !important;
    }
  }

  .line {
    width: 96px !important;
  }
}

.stepBox {
  text-align: center;
  padding-bottom: 48px;
  .list {
    width: 1200px;
    height: 180px;
    margin: 0 auto;
    background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 64%);
    border-radius: 500px;

    .listItem {
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        // transform: translateY(-10px);
        transform: scale(1.1);
      }

      img {
        width: 60px;
        height: 60px;
      }

      .title {
        padding: 0;
        margin: 12px 0;
        font-size: @secondLevel;
        font-weight: 500;
      }
    }

    .line {
      width: 156px;
      height: 16px;
      position: relative;
      top: -30px;
    }
  }
}</style>
