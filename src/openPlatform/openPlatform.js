import {createApp} from 'vue'
import footerBox from '@comp/footerBox.vue'
import headerBox from '@comp/headerBox.vue'
import collaborationProcessVue from './collaborationProcess.vue';

import './openPlatform.less'

const app = createApp(headerBox)
app.mount('#header')

const footer = createApp(footerBox)
footer.mount('#footer')


const CollaborationProcess = createApp(collaborationProcessVue)
CollaborationProcess.mount('#collaborationProcess')

utils.isMobile()

// 动画
utils.inScreenAnimation('.sceneBox .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.interfaceBox .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.collaborationProcess .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})
// 添加客服浮窗
utils.addCustomerService()