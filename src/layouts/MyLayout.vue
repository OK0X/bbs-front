<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-white text-black" height-hint="98">
      <div class="title-bar">
        <div class="menu-left">
          <a href="https://b.ok0x.com">
            <img style="height: 45px;" src="statics/logo1.png" />
          </a>
          <div class="menu">
            <q-btn flat label="首页" to="/" />
            <q-btn flat label="关于我" to="/AboutMe" />
          </div>
        </div>
        <div>
          <div class="menu">
            <q-btn flat label="登陆" to="/Login" />
            <q-btn flat label="注册" to="/Registe" />
            <q-btn flat round color="primary" size="md" icon="edit" to="/PushArticle" />
          </div>
          <q-btn flat round color="primary" size="md" icon="menu" class="mobile-menu">
            <q-menu auto-close>
              <q-list style="min-width: 100px">
                <q-item clickable to="/">
                  <q-item-section>首页</q-item-section>
                </q-item>
                <q-item clickable to="/AboutMe">
                  <q-item-section>关于我</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable to="/Login">
                  <q-item-section>登陆</q-item-section>
                </q-item>
                <q-item clickable to="/Registe">
                  <q-item-section>注册</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
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
  },
  methods: {}
};
</script>
<style scoped>
.title-bar {
  padding-top: 10px;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content: space-between;
}
.menu-left {
  display: flex;
}
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.mobile-menu {
  display: none;
}
@media screen and (orientation: portrait) {
  .menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>