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
      // console.log(data.name+data.email+data.password)
      this.$axios
        .post(this.global.api.url, 
        {
          username:data.name,
          email:data.email,
          passwd:data.password
        },
        {
          headers: this.global.api.headers
        })
        .then(response => {
          // _this.$q.loading.hide();
          console.log(response);
          
        });
    }
  }
};
</script>
<style scoped>
</style>