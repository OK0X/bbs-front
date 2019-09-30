// import something here
import _util from 'src/util'
import Toasted from 'vue-toasted'

// leave the export, even if you don't use it
export default ({ Vue }) => {
  // something to do
  Vue.use(Toasted)
  // toast
  window.toast = function (msg) {
    Vue.toasted.show(msg, {
      theme: 'bubble',
      position: 'top-center',
      duration: 3000
    })
  }

  Vue.prototype.util = _util
}
