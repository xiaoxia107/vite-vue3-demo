<template>
  <div class="preview">
    okk
  </div>
</template>

<script>
import index from './index.js'
export default {
  ...index
}
</script>


<style lang="less" scoped>
.preview{
  position: relative;
  width: 100%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &-item{
    position: absolute;
    display: inline-block;
    touch-action: none;
    overflow: hidden;
    &-content{
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
}
</style>
