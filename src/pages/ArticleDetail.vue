<template>
  <q-page class="mypage">
    <q-card flat bordered class="article-detail">
      <q-card-section>
        <q-card-section style="display:flex;flex-direction: column;">
          <h1>{{article.title}}</h1>
          <span style="color:gray">作者:{{article.author}} 发布于：{{article.pub_date}}</span>
        </q-card-section>
        <q-separator />
        <q-card-section v-html="article.content" style="overflow: auto;" v-highlight></q-card-section>
        <q-separator />
        <span style="color: #9e9e9e;">入群交流，QQ交流群：872578039 ；微信群加微信：914730875 入群，备注：ok0x</span>
      </q-card-section>
    </q-card>
    <div style="margin-top:10px;">
      <q-btn flat color="primary" label="上一篇" @click="goPrev" />
      <q-btn flat color="primary" label="下一篇" @click="goNext" />
    </div>
  </q-page>
</template>

<script>
/* eslint-disable */
import marked from "marked";
// import 'highlight.js/styles/dark.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  // highlight: function(code) {
  //   return hljs.highlightAuto(code).value;
  // },
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
      articleid: "",
      article: ""
    };
  },
  mounted() {
    // console.log(this.$route.query);
    this.articleid = this.$route.query.id;
    this.getDetail(this.articleid);
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
          }
        })
        .catch(error => {
          console.error(error);
          // toast('请求失败')
        });
    },
    goPrev() {
      this.articleid--;
      this.getDetail(this.articleid);
    },
    goNext() {
      this.articleid++;
      this.getDetail(this.articleid);
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
