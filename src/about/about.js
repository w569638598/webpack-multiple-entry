import { createApp } from 'vue'
import aboutCom from './about.vue'
import footerBox from '@comp/footerBox.vue'
import './about.less'
const app = createApp(aboutCom)
app.mount('#header')

const footer = createApp(footerBox)
footer.mount('#footer')

const line = utils.$('#line')
const onlineApp = utils.$('#onlineApp')
const totalTicket = utils.$('#totalTicket')
const customer = utils.$('#customer')
function elIsIntersecting(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            utils.animationNum(line, 12000, { unit: '+' })
            utils.animationNum(onlineApp, 3000, { unit: '+' })
            utils.animationNum(totalTicket, 1000, { unit: 'W+' })
            utils.animationNum(customer, 2000, { unit: '+' })
        } else {
            line.innerText = 0
            onlineApp.innerText = 0
            totalTicket.innerText = 0
            customer.innerText = 0
        }
    });
}
var observer = new IntersectionObserver(elIsIntersecting, {
    root: null, // 根元素为视口  
    rootMargin: '0px', // 根元素的边距为0  
    threshold: 0.1 // 当元素进入视口的比例达到10%时触发回调函数
});
observer.observe(utils.$('#data'))

// contentMainTitle
const  isMobileP  = utils.isMobile()
if (isMobileP) {
    utils.$('.banner').innerHTML=`<img src='/staticResources/about/mobileBanner.png' />`

}else{

}


// 动画
utils.inScreenAnimation('.contentMain .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

utils.inScreenAnimation('.contactUs .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

  // 添加客服浮窗
utils.addCustomerService()