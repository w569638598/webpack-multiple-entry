import {createApp} from 'vue'
import footerBox from '@comp/footerBox.vue'
import headerBox from '@comp/headerBox.vue'
import purchaseProcessCom from './purchaseProcess.vue'
import './movieCard.less'

const app = createApp(headerBox)
app.mount('#header')

const footer = createApp(footerBox)
footer.mount('#footer')

utils.isMobile()

const purchaseProcess = createApp(purchaseProcessCom)
purchaseProcess.mount('#purchaseProcess')


// 动画
utils.inScreenAnimation('.supportBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.chatBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.purchaseProcess .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})


// 添加客服浮窗
utils.addCustomerService()