<template>
  <q-page class="flex flex-center" style="align-items: flex-start;">
    <BasicForm style=" margin-top: 30px;" :i="fromArg" @submit="registe($event)" />
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
        emailShow: true,
        password2Show: true,
        submitBtnName: "注册"
      }
    };
  },
  components: {
    BasicForm
  },
  methods: {
    registe(data) {
      // postman真是个好东西
      var rdata = new FormData();
      rdata.append("username", data.name);
      rdata.append("email", data.email);
      rdata.append("passwd", data.password);

      this.$axios
        .post(this.global.api.url + "register", rdata, {
          headers: this.global.api.headers
        })
        .then(response => {
          // _this.$q.loading.hide();
          // console.log(response);
          if(response.data.code===0){
            toast('注册成功')
          }
        });
    }
  }
};
</script>
<style scoped>
</style>