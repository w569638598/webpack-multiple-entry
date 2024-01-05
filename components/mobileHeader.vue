<template>
    <div class="mobileMenu">
        <img class="logo" src="../assets/images/index/logo_header.png" @click="openPage('/')" alt="" />
        <div class="menu">
            <img v-if="!isOpenMenu" @click="isOpenMenu = true" class="mobileMenuIcon"
                src="/staticResources/header/menuIcon.svg" alt="">
            <img v-else @click="isOpenMenu = false" class="mobileMenuIcon" src="/staticResources/header/menuCloseIcon.svg"
                alt="">
            <ul class="menuList" v-if="isOpenMenu">
                <li @click="openPage(nav)" v-for="(nav, i) of navList"
                    :class="[nav.children ? 'hasChildren' : '', 'navItem', nav.isOpenChildren ? 'openedChildren' : 'closedChildren']">
                    <div class="navItemBox" :class="['navItem', activeNav == nav.page? 'active':'']">
                        <span class="text">{{ nav.text }}</span>
                        <img class=" arrow" @click="nav.isOpenChildren = !nav.isOpenChildren"
                            v-if="nav.children && !nav.isOpenChildren" src="/staticResources/header/arrow.svg" alt="">
                        <img class="addIcon" v-else-if="nav.children && nav.isOpenChildren"
                            @click="nav.isOpenChildren = !nav.isOpenChildren" src="/staticResources/header/addIcon.svg" alt="">
                    </div>
                    <ul v-if="nav.children && nav.isOpenChildren">
                        <li @click="openPage(cNav)" v-for="(cNav, i) of nav.children">
                            <div class="navItemBox" :class="['navItem', activeNav == cNav.page? 'active':'']">
                                <span class="text">{{ cNav.text }}</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const pathname = window.location.pathname

const activeNav = ref('')
activeNav.value = pathname.match(/\/html\/(.*)\//)[1]


const isOpenMenu = ref(false)
const navList = ref([
    {
        text: '首页',
        path: '/html/home/index.html',
        page: 'home'
    },
    {
        text: '产品服务',
        path: '/html/home/index.html',
        isOpenChildren: true,
        children: [
            {
                text: 'SaaS系统',
                path: '/html/saas/index.html',
                page: 'saas'
            },
            {
                text: '电影卡片',
                path: '/html/movieCard/index.html',
                page: 'movieCard'
            },
            {
                text: '抖音电影票',
                path: '/html/douyin/index.html',
                page: 'douyin'
            }
        ]
    },
    {
        text: '开放平台',
        path: '/html/openPlatform/index.html',
        page: 'openPlatform'
    },
    {
        text: '资讯中心',
        path: '/html/news/index.html',
        page: 'news'
    },
    {
        text: '关于我们',
        path: '/html/about/index.html',
        page: 'about'
    }
])
function openPage(nav) {
    if (nav.children) return;
    window.open(nav.path, '_self')
}
</script>

<style lang="less" scoped>
@import '@assets/base.less';
div.active{
    border-left: solid 3rem @blue;

}
.mobileMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    position: relative;
    z-index: 9999999999999999999999;
    .logo {
        width: 150px;
    }

    .menu {
        position: relative;
        .closedChildren{
            border-bottom: none !important;
            .navItemBox{
                border-bottom: none !important;
                padding-bottom: 0 !important;
            }
        }
        .openedChildren{
            padding-bottom: 0;
            &>div.navItemBox{
            padding-bottom: 12px !important;}
        }
        .hasChildren {
            border-bottom: solid 1px @border-color-primarry;
            &>div {
                border-bottom: solid 1px @border-color-primarry;
                padding-bottom: 12PX;
            }

            li {
                padding-left: 0;
            }
        }

        .menuList {
            position: absolute;
            height: 100vh;
            background: white;
            width: 276px;
            right: -16px;

            .addIcon {
                width: 14px;
            }

            .navItem {
                .navItemBox {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 16px;
                }
            }
        }

        .arrow {
            width: 26px;
        }

        .mobileMenuIcon {
            width: 24px;
            height: 24px;
        }
    }

    ul {
        padding: 0;

        li {
            list-style: none;
            font-size: 14px;
            padding: 12px 0;
        }
    }
}</style>