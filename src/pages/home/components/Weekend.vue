<template>
  <div>
    <div class="title">周末去哪玩</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '清远周边逛',
          desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
      }, {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1812/fe/208e0360d686b8.jpg_r_640x214_7b9e6607.jpg',
          title: '广州泡汤圣地',
          desc: '解压之地，放松自己，来一段轻松的旅程。'
      }, {
          id: '03',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title: '广州必打卡',
          desc: '感受现代与传统相融合的广州'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 29.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
