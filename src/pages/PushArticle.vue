<template>
  <q-page class="mypage">
    <q-input
      style="max-width: 837px;width:100%;"
      v-model="title"
      label="标题"
      hint
      lazy-rules
      :rules="[ val => val && val.length > 0 || '请输入标题']"
    />
    <VueEditor v-model="content" useCustomImageHandler @image-added="handleImageAdded"  style="height: 580px;"/>
    <q-btn label="发布" @click="pushArticle" color="primary" style="margin-top:80px;width:100px;" />
  </q-page>
</template>

<script>
/* eslint-disable */
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    pushArticle() {
      console.log(this.title);
      console.log(this.content);

      var rdata = new FormData();
      rdata.append("title", this.title);
      // rdata.append("email", data.email);
      rdata.append("content", this.content);

      this.$axios
        .post(this.global.api.url + "articles/new", rdata, {
          headers: this.global.api.headers,
          "withCredentials":true
        })
        .then(response => {
          // _this.$q.loading.hide();
          console.log(response);
          if(response.data.code===0){
            toast('发布成功')
            this.$router.replace({
              path: "/",
              query: ''
            });
          }
        }).catch(error=>{
          console.error(error)
          toast('请求失败')
        })

    },
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {


      var formData = new FormData();
      formData.append("image", file);
      // console.log(file)
      // return

      this.$axios
        .request({
          url:
            "https://api2.bmob.cn/2/files/" +
            // this.global.wallet.ethAddress +
            "test.jpg",
          method: "post",
          headers: {
            "X-Bmob-Application-Id": "ac7f17d258941e666eb88514048c351a",
            "X-Bmob-REST-API-Key": "f31e47e1bcf4d276e1bc19226abee442",
            "Content-Type": "image/jpeg"
          },
          data: file
        })
        .then(response => {
          // console.log(response);
          if (response.status === 200) {
            let url = response.data.url;
            Editor.insertEmbed(cursorLocation, "image", url);
            resetUploader();

          }

        })
        .catch(error => {
          console.error(error);

        });

    }
  }
};
</script>
<style scoped>

</style>