import './home.less';
import { createApp } from 'vue'
import homeVue from './home.vue'
const app = createApp(
  homeVue
)
app.mount('#home')

utils.isMobile()

//   ; (function (d, w, c) {
//     if (w[c]) return
//     var s = d.createElement('script')
//     w[c] = function () {
//       ; (w[c].z = w[c].z || []).push(arguments)
//     }
//     s.async = true
//     s.src = 'https://static.ahc.ink/hecong.js'
//     if (d.head) d.head.appendChild(s)
//   })(document, window, '_AIHECONG')
// _AIHECONG('ini', { channelId: 'pV9b6N' })


// 联系我们


// 动画
utils.inScreenAnimation('.advantageBox .warpTitleBox', e => {
  e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.mode .warpTitleBox', e => {
  e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.stepBox .warpTitleBox', e => {
  e.classList.add('animate__slideInUp', 'animate__animated')
})



// 添加客服浮窗
utils.addCustomerService()