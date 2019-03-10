<template>
  <div class="header">
    <div>城市选择</div>
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position: relative  
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    font-size: .32rem
    text-align: center
    background: $bgColor
    color: #fff
    .header-back
      position: absolute
      left: 0
      top: 0
      width: .64rem
      font-size: .4rem
      color: #fff
</style>
