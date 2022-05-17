<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="change">改变</button>
  </div>
</template>

<script>
export default {
  name:'child',
  props:['msg'],
  model:{
    prop:'msg',
    event:'changeMsg'
  },
  methods:{
    change(){
      this.$emit('changeMsg','我被子组件改变了')
    }
  }


}
</script>

<style>

</style>