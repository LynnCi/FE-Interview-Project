<template>
  <div>
    <child v-model="test"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  components:{ child },
  name:'parent',
  data(){
    return {
      test:'abc'
    }
  }

}
</script>

<style>

</style>