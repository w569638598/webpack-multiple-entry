import { createApp } from 'vue'
import footerBox from '@comp/footerBox.vue'
import headerBox from '@comp/headerBox.vue'
import stepBox from './collaboration.vue';
import './saas.less'

const app = createApp(headerBox)
app.mount('#header')

const footer = createApp(footerBox)
footer.mount('#footer')

const CollaborationProcess = createApp(stepBox)
CollaborationProcess.mount('#collaborationProcess')

const isMobileP = utils.isMobile()
if (isMobileP) {
    utils.$('#bannerImg').src = '/staticResources/saas/index_banner_mobile.png'
}



// 动画
utils.inScreenAnimation('.advantageBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})


utils.inScreenAnimation('.partnerBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.showPage .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('#collaborationProcess .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

// 添加客服浮窗
utils.addCustomerService()