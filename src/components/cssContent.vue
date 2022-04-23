<template>
  <div>
      <h3>css 部分</h3>
      <div class="line"></div>
      <div class="triangle"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/*移动端开发时, 由于屏幕是 retina, 即高清屏幕. 当写 1px 时, 实际的线宽为 2px,会显得很粗.
此时就有了 0.5px 的需求: 主要应对 iPhone*/
.line{
  background:black; 
  /*width:10px; 不写 width 默认100% */
  height:1px;
  transform: scaleY(0.5); /** y轴缩放一半 */
  transform-origin: 0 0;/** 以x y 为中心转换 */
}
/**
    border 是由三角形组成的，width & height 为0时可得出。只需把某三边设为透明色即可得到三角形。
 */
.triangle{
    width: 0px;
    height: 0px;
    border: 40px solid;
    border-color: transparent transparent green;
}
</style>