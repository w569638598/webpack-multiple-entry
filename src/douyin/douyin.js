import {createApp} from 'vue'
import footerBox from '@comp/footerBox.vue'
import headerBox from '@comp/headerBox.vue'
import './douyin.less'

const app = createApp(headerBox)
app.mount('#header')

const footer = createApp(footerBox)
footer.mount('#footer')

utils.isMobile()

// 动画
utils.inScreenAnimation('.supportBox .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.chatBox .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})
// 添加客服浮窗
utils.addCustomerService()