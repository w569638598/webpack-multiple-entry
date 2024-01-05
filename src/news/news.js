import { createApp } from 'vue'
import footerBox from '@comp/footerBox.vue'
import headerBox from '@comp/headerBox.vue'
import list from './list.vue'
import newTop from './newsTop.vue'
import './news.less'

const app = createApp(headerBox)
app.mount('#header')

const footer = createApp(footerBox)
footer.mount('#footer')

// const listVue = createApp(list)
// listVue.mount('#listBox')


// const newTopVue = createApp(newTop)
// newTopVue.mount('#newsTop')

const isMobileP = utils.isMobile()
if (isMobileP) {
    utils.$('#pc').style.display = 'none'
    utils.$('#mobile').style.display = 'block'
    const listVue = createApp(list)
    listVue.mount('#listBoxM')
    const newTopVue = createApp(newTop)
    newTopVue.mount('#newsTopM')
} else {
    utils.$('#pc').style.display = 'flex'
    utils.$('#mobile').style.display = 'none'
    const listVue = createApp(list)
    listVue.mount('#listBox')
    const newTopVue = createApp(newTop)
    newTopVue.mount('#newsTop')
}

// 添加客服浮窗
utils.addCustomerService()