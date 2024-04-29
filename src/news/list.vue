<template>
    <ul class="listBox">
        <li v-for="item in list">
            <div class="listBox-item-info">
                <h3>
                    标题一
                </h3>
                <p>
                    @text-color-regular
                </p>
                <p class="otherInfo">
                    <span class="time">
                        <img src="../../staticResources/news/timeIcon.svg" alt=""> 2023-12-20 12:00:00
                    </span>
                    <span class="personal">
                        <img src="../../staticResources/news/personal.svg" alt=""> 王大春
                    </span>
                </p>
            </div>
            <div class="listBox-item-img">
                <img :src="item.img" alt="">
            </div>
        </li>
    </ul>
    <div class="pagination">
        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script setup>
import {ref} from 'vue'
const list = ref([{
    title: '标题一',
    content: '内容一',
    img: require('@assets/images/card/cardStyle.png')
}, {
    title: '标题二',
    content: '内容二',
    img: ''
}, {
    title: '标题三',
    content: '内容三',
    img: ''
}])
</script>

<style lang="less" scoped>
:deep(.el-pagination) {
    li,.btn-next,.btn-prev {
        background: transparent !important;
    }

}
li{
    display: flex;
        align-items: stretch;
        justify-content: space-between;
}
.listBox-item-img{
    width: 214px;
    overflow: hidden;
    height: 108px;
    img{
        min-width: 100%;
        min-height: 100%;
    }
}
</style>