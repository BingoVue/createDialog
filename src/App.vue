<template>
  <div id="app">
    <button @click="showDialog">弹窗</button>
  </div>
</template>

<script>
import Dialog from './components/dialog.vue'

export default {
  name: 'app',
  methods: {
    showDialog(){
      this.$create(Dialog, {
        title: "自定义弹窗组件",
        duration: 2000,
        message: "内容主体"
      }).show()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
