import _ from 'lodash';
import './home.less';
import Icon from '../../images/690-140.png'
function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    console.log(element,11111);

      // 将图像添加到已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());