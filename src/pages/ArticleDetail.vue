<template>
  <q-page class="mypage">
    <q-card class="article-detail">
      <q-card-section>
        <q-card-section style="display:flex;flex-direction: column;">
          <h1>{{article.title}}</h1>
          <span style="color:gray">作者:{{article.author}} 发布于：{{article.pub_date}}</span>
        </q-card-section>
        <q-separator />
        <q-card-section v-html="article.content" style="overflow: auto;"></q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
/* eslint-disable */
import marked from "marked";
import hljs from "highlight.js/lib/highlight";
import go from "highlight.js/lib/languages/go";
import "highlight.js/styles/a11y-light.css";
// import 'highlight.js/styles/dark.css';

hljs.registerLanguage("go", go);

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default {
  data() {
    return {
      article: ""
    };
  },
  mounted() {
    console.log(this.$route.query);
    // this.item=this.$route.query.id
    this.getDetail(this.$route.query.id);
  },
  methods: {
    getDetail(id) {
      this.$axios
        .get(this.global.api.url + "article/detail?id=" + id)
        .then(response => {
          // _this.$q.loading.hide();
          console.log(response);
          if (response.data.code === 0) {
            this.article = response.data.data.article;
            if (this.article.markdown) {
              this.article.content = marked(this.article.content);
            }
            // this.hasNext=response.data.data.has_more
          }
        })
        .catch(error => {
          console.error(error);
          // toast('请求失败')
        });
    }
  }
};
</script>
<style scoped>
.article-detail {
  width: 100%;
  max-width: 1100px;
}
</style>
