<template>
  <div
    class="q-pa-md mform"
    style="width: 400px;background-color: white;border-radius: 0.25rem;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);"
  >
    <q-form  @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="用户名"
        hint
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入用户名']"
      />
      <q-input
        filled
        type="email"
        v-model="email"
        label="邮箱地址"
        hint
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入你的邮箱地址']"
        v-if="i.emailShow"
      />
      <q-input
        filled
        type="password"
        v-model="password"
        label="密码"
        hint
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入你的密码']"
      />
      <q-input
        filled
        type="password"
        v-model="password2"
        label="确认密码"
        hint
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请再次输入你的密码']"
        v-if="i.password2Show"
      />
      <div>
        <q-btn :label="i.submitBtnName" @click="onSubmit" color="primary" />
        <q-btn label="清空" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password2: null
    };
  },
  props: ["i"],
  methods: {
    onSubmit() {
      
      if(this.i.password2Show&&(this.password!==this.password2)){
        toast('两次密码输入不一致')
        return
      }

      this.$emit('submit',{
        name:this.name,
        email:this.email,
        password:this.password
      })
    },
    onReset() {
      this.name = null;
      this.email = null;
      this.password = null;
      this.password2 = null;
    }
  }
};
</script>
<style scoped>
.mform {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 0px;
  margin: 30px 16px;
  width: 500px;
}
</style>