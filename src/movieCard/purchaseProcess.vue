<template>
    <stepBox title="采购流程" :textList="['注册账号', '合作签约', '发卡制卡', '上线使用']" :imgList="imgList" ></stepBox>
</template>
    
<script setup>
import stepBox from '@comp/stepBox.vue';

import step1 from '@assets/images/card/1.png';
import step2 from '@assets/images/card/2.png';
import step3 from '@assets/images/card/3.png';
import step4 from '@assets/images/card/4.png';
const imgList = [step1 , step2, step3, step4]

</script>
    
<style lang="scss" scoped></style>