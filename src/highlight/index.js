
/* eslint-disable */
// highlight.js
import hljs from "highlight.js/lib/highlight";
import go from "highlight.js/lib/languages/go";
import "highlight.js/styles/a11y-light.css";

hljs.registerLanguage("go", go);

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  })
}
export default Highlight