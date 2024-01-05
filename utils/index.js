/**
 * css选择器函数-返回第一个
 * @param {*} e css选择器
 * @returns 
 */
function $(e) {
    return document.querySelector(e);
}
/*
 * css选择器函数 选择返回所有
 * @param {*} e css选择器
 * @returns 
 */
function $All(e) {
    return document.querySelectorAll(e);
}

/**
 * 数字滚动动画
 * @param {*} el 
 * @param {*} num 
 * @param {*} opt 
 * opt.unit = ''
 * opt.seconds = 1
 */
function animationNum(el, num, opt = { unit: '', seconds: 1 }) {
    let splitNum = countdown(num)
    let total = 0;
    const timer = setInterval(() => {
        if (total <= num) {
            total += splitNum
            el.innerText = parseInt(total) + opt.unit
        } else {
            el.innerText = num + opt.unit
            clearInterval(timer)
        }
    }, 10)
    function countdown(tagNum) {
        return tagNum / (opt.seconds ? opt.seconds * 100 : 100)
    }
}

// 判断是否移动端，移动端适配
function isMobile(params) {
    let isMobileP = false;
    if (window.innerWidth <= 1200) {
        isMobileP = true;
        (function (doc, win, designWidth) {
            const html = document.documentElement;
            const refreshRem = () => {
                const clientWidth = html.getBoundingClientRect().width;
                //   if (clientWidth >= designWidth) {
                //     html.style.fontSize = "100px";
                //   } else {
                html.style.fontSize = clientWidth / designWidth + "px";
                //   }
            }
            doc.addEventListener("DOMContentLoaded", refreshRem)
        })(document, window, 375)
    } else {
        isMobileP = false
    }
    return isMobileP
}

/**
 * 监听元素是否在屏幕内
 * @param {string} el document.querySelector(el)
 * @param {function} inCb 进入屏幕内的回调 接收传入元素参数
 * @param {function|undefined} outCb 滚出屏幕的回调 接收传入元素参数
 * @returns 
 */
function inScreenAnimation(el, inCb, outCb) {
    let elNode = document.querySelector(el)
    if (!elNode) {
        return
    }
    function elIsIntersecting(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                inCb(elNode)
            } else {
                outCb && outCb(elNode)
            }
        });
    }
    var observer = new IntersectionObserver(elIsIntersecting, {
        root: null, // 根元素为视口  
        rootMargin: '0px', // 根元素的边距为0  
        threshold: 0.1 // 当元素进入视口的比例达到10%时触发回调函数
    });
    observer.observe(elNode)
}

// 添加客服按钮
function addCustomerService() {
    let customerServiceEl = document.createElement('div')
    customerServiceEl.classList.add('customer-service-box')
    if (window.innerWidth <= 1200) {
        customerServiceEl.addEventListener('click', e => {
            document.querySelector('.customer-service-box-content')?.classList.toggle('hover')
        })
    }else{
        customerServiceEl.addEventListener('mouseover', e => {
            document.querySelector('.customer-service-box-content')?.classList.add('hover')
        })
        customerServiceEl.addEventListener('mouseout', e => {
            document.querySelector('.customer-service-box-content')?.classList.remove('hover')
        })
    }
    const innerHtml = `
            <div class="customer-service-box-title">
                <div class="customer-service-box-title-icon"><img src=/staticResources/customerService.png></div>
                <div class="customer-service-box-title-text">联系客服</div>
            </div>
            <div class="customer-service-box-content">
                <img src=/staticResources/enterpriseEWM.png>
                <p>扫码添加商务</p>
            </div>
    `
    customerServiceEl.innerHTML = innerHtml;
    document.body.appendChild(customerServiceEl)
}

export {
    $,
    $All,
    animationNum,
    isMobile,
    inScreenAnimation,
    addCustomerService
}