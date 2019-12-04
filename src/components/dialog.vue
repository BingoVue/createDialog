<template>
  <div class="dialog" v-if="isShow">
    <h3>{{title}}</h3>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1000
    },
  },
  data(){
    return {
      isShow: false
    }
  },
  methods: {
    show(){
      this.isShow = true
      setTimeout(this.hide, this.duration)
    },
    hide(){
      this.isShow = false
      this.remove()
    }
  }
}
</script>

<style scoped>
.dialog{
  position: absolute;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border: 1px solid red;
}
</style>