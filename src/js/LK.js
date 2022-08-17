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

window.onload = () => {
  window.$Tip = new Tip;
}
