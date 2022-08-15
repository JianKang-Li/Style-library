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
    setTimeout(() => {
      tip.remove()
    }, 3000)
  }
}

"undefined" != typeof module && void 0 !== module.exports ? module.exports = new Tip : window.$Tip = new Tip;