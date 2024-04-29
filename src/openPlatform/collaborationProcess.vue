<template>
<stepBox :imgList="[step1,step2,step3,step4,step5,step6]" :textList="['需求沟通', '协议签订', '接口测试', '技术对接', '平台联调', '部署上线']"></stepBox>

</template>

<script setup>
import stepBox from '@comp/stepBox.vue';
import step1 from '@assets/images/openPlatform/step1.png';
import step2 from '@assets/images/openPlatform/step2.png';
import step3 from '@assets/images/openPlatform/step3.png';
import step4 from '@assets/images/openPlatform/step4.png';
import step5 from '@assets/images/openPlatform/step5.png';
import step6 from '@assets/images/openPlatform/step6.png';
</script>

<style lang="scss" scoped>

</style>