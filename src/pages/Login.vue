<template>
  <q-page class="flex flex-center" style="align-items: flex-start;">
    <BasicForm style=" margin-top: 30px;" :i="fromArg" @submit="login($event)" />
  </q-page>
</template>
<script>
/* eslint-disable */
import BasicForm from "../components/BasicForm";
export default {
  name: "Registe",
  data() {
    return {
      fromArg: {
        emailShow: false,
        password2Show: false,
        submitBtnName: "登陆"
      }
    };
  },
  components: {
    BasicForm
  },
  methods: {
    login(data) {
      // postman真是个好东西
      var rdata = new FormData();
      rdata.append("username", data.name);
      // rdata.append("email", data.email);
      rdata.append("passwd", data.password);

      this.$axios
        .post(this.global.api.url + "login", rdata, {
          headers: this.global.api.headers
        })
        .then(response => {
          // _this.$q.loading.hide();
          console.log(response);
          if (response.data.code === 0) {
            toast("登陆成功");
            this.$router.replace({
              path: "/",
              query: ''
            });
          }
        });
    }
  }
};
</script>
<style scoped>
</style>