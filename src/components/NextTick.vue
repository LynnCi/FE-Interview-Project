<template>
  <div>
      <h2>$nextTick</h2>
      <!-- <div id="id1" ref="msg">{{message}}</div> -->
      <div @click="changeMessage" ref="msg">{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'NextTick',
    data(){
        return{
            message:'未更新'
        }
    },
    methods:{
        changeMessage(){
            let that = this;
            that.message = '已更新'
            console.log('dom1',this.$refs.msg.innerText) //未更新
            that.$nextTick(function(){
                console.log('dom2',this.$refs.msg.innerText) //已更新
            })
        }
    }

}
</script>

<style>

</style>