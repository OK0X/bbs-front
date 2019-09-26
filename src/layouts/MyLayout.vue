<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <div class="title-bar">
        <img style="height: 45px;" src="statics/logo1.png" />
        <q-btn flat color="black" label="首页" to="/" />
        <q-btn flat color="black" label="热点" to="/Test" />
        <q-btn flat color="black" label="其他" />
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.title-bar{
padding-top:10px;
display: flex;
}
</style>