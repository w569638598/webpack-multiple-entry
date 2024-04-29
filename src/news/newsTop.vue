<template>
    <p class="title">新闻头条</p>
    <ul>
        <li v-for="(item, index) in  newsList " :key="index">
            <a :href="item.url" target="_blank">
                <span class="index"
                    :class="[index == 0 ? 'first' : index == 1 ? 'second' : index == 2 ? 'third' : '']"></span>
                {{ item.title }}
            </a>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
const newsList = ref([])

</script>

<style lang="less" scoped>
@import '@assets/base.less';
.title {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: solid 1px @border-color-regular;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

li {
    display: flex;
    align-items: center;
    // padding: 10px 0;
    margin: 12px 0;
    font-size: 14px;
    color: @text-color-primary;
    .index{
        font-size: 16px;
        color: #AEB9C3;
    }
    .first{
        color:#FF3232;
    }
    .second{
        color: #FF8832;
    }
    .third{
        color: #FFB340
    }
}

</style>