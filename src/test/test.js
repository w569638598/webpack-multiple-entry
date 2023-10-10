function component() {
    const element = document.createElement('h1');
    element.innerText = '测试页面';
    return element;
  }
  
  document.body.appendChild(component());