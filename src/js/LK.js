import "../css/LK.css"

class Tip {
  constructor() {
    const div = document.createElement('div')
    div.classList.add("tip-container")
    this.div = div
    const body = document.body
    body.appendChild(this.div)
  }
  info(message) {
    return this._tip(message, "info")
  }

  error(message) {
    return this._tip(message, "error")
  }

  success(message) {
    return this._tip(message, "success")
  }

  _tip(message, type) {
    let tip = document.createElement("div");
    tip.className = "tip";
    switch (type) {
      case "error": tip.classList.add("error"); break;
      case "success": tip.classList.add("success"); break;
    }
    tip.innerText = message;
    this.div.appendChild(tip)
    setTimeout(() => {
      tip.remove()
    }, 3000)
  }
}

window.addEventListener("load", () => {
  window.$Tip = new Tip;

  // 实现tab切换
  const LK_tabs = document.querySelectorAll(".LK-tab")
  LK_tabs.forEach((item) => {
    let list = item.querySelectorAll(".LK-tab>ul>li")
    let contents = item.querySelectorAll(".LK-tab>.content>.item")
    for (var i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        for (var i = 0; i < list.length; i++) {
          list[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('data-index');
        for (var i = 0; i < contents.length; i++) {
          contents[i].style.display = 'none';
        }
        contents[index - 1].style.display = 'block';
      }
    }
  })

  // 弹窗隐藏
  const buttons = document.querySelectorAll('.LK-modal .close')
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id')
      const alert = document.querySelector(`#${id}`)
      const body = document.querySelector('body')
      alert.style.display = 'none'
      body.classList.remove('noscroll')
    })
  })
  function openAlert(id) {
    const alert = document.querySelector(`#${id}`)
    alert.style.display = 'flex'
    const body = document.querySelector('body')
    body.classList.add('noscroll')
  }

  window.openAlert = openAlert
})

