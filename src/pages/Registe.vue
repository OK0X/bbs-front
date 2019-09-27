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
        emailShow:true,
        password2Show:true,
        submitBtnName:'注册'
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