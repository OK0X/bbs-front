<template>
  <q-page class="flex flex-center" style="align-items: flex-start;">
    <BasicForm style=" margin-top: 30px;" :i="fromArg"/>
  </q-page>
</template>
<script>
/* eslint-disable */
import BasicForm from "../components/BasicForm"
export default {
  name: "Registe",
  data() {
    return {
      fromArg:{
        emailShow:false,
        password2Show:false,
        submitBtnName:'登陆'
      }
    };
  },
  components: {
    BasicForm
  }
};
</script>
<style scoped>
</style>