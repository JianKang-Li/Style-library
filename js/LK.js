class Tip {
  constructor() {

  }
  info(message) {
    return this._tip(message)
  }

  _tip(message) {
    let tip = document.createElement("div");
    tip.className = "tip";
    tip.innerText = message;
    document.body.appendChild(tip)
    let _this = this
    setTimeout(() => {
      _this._destory()
    }, 3000)
  }

  _destory() {
    let e = document.querySelector(".tip")
    document.body.removeChild(e)
  }
}

"undefined" != typeof module && void 0 !== module.exports ? module.exports = new Tip : window.$Tip = new Tip;