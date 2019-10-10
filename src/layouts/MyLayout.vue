<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-white text-black" height-hint="98">
      <div class="title-bar">
        <div class="menu">
          <img style="height: 45px;" src="statics/logo1.png" />
          <q-btn flat label="首页" to="/" />
          <q-btn flat label="关于我" to="/AboutMe" />
        </div>
        <div class="menu">
          <q-btn flat label="登陆" to="/Login" />
          <q-btn flat label="注册" to="/Registe" />
          <q-btn flat round color="primary" size="md" icon="edit" to="/PushArticle"/>
        </div>
      </div>
    </q-header>
    <q-page-container style="background-color: #f2f5f9;">
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
.title-bar {
  padding-top: 10px;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content:space-between
}
.menu{
display: flex;
justify-content: center;
flex-wrap:wrap;
}
</style>