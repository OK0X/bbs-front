// import something here
import _global from 'src/global'

// leave the export, even if you don't use it
export default ({ Vue }) => {
  // something to do
  Vue.prototype.global = _global
}
