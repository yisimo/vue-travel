<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: 'Hello HomeHeader'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      line-height: .86rem
      float: left
      .back-icon
        margin-top: .12rem
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      box-sizing: border-box
      margin-top: .24rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: .1rem
      float: right
      text-align: center
</style>
