<template>
  <q-page class="mypage">
    <q-card flat bordered class="my-card" @click="gotoDetail(item)" v-for="item in articles" v-bind:key="item.index">
      <q-card-section style="display:flex;flex-direction: column;">
        <span style="font-size: 20px;">{{item.title}}</span>
        <span style="color:gray">作者:{{item.author}} 发布于：{{item.pub_date}}</span>
      </q-card-section>
      <q-separator />
      <q-card-section>{{ item.txt.substring(0,200) }}</q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" @click.stop="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
    <div style="margin-top:10px;">
      <q-btn flat color="primary" label="上一页" v-show="hasPrev" @click="goPrev"/>
      <q-btn flat color="primary" label="下一页" v-show="hasNext" @click="goNext"/>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      hasPrev:false,
      hasNext:false,
      page: 1,
      articles: [
      ]
    };
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    getArticles(){
      this.$axios
      .get(this.global.api.url + "articles?p=" + this.page)
      .then(response => {
        // _this.$q.loading.hide();
        // console.log(response);
        if (response.data.code === 0) {
          this.articles=response.data.data.articles;
          this.hasNext=response.data.data.has_more
        }
      })
      .catch(error => {
        console.error(error);
        // toast('请求失败')
      });
    },
    goPrev(){
      this.page--
      if(this.page<2){
        this.hasPrev=false
      }
      this.getArticles()
    },
    goNext(){
      this.page++
      this.hasPrev=true
      this.getArticles()
    },
    favorite() {
      toast("已收藏");
    },
    gotoDetail(item) {
      // console.log(data);
      this.$router.push({
          path: "/ArticleDetail",
          query: {
            id:item.id
          }
        });
    }
  }
};
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 1100px;
  margin: 5px;
}
</style>
