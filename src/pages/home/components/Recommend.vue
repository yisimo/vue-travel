<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
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
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_200x200_2f08733b.jpg',
          title: '长隆野生动物世界',
          desc: '熊猫三胞胎与您共享欢乐时光'
      }, {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
          title: '美林湖温泉',
          desc: '远离喧嚣，彰显欧洲贵族气息'
      }, {
          id: '03',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
          title: '白水寨',
          desc: '奇趣水谷与天南第一梯'
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      padding: .1rem
      width: 1.7rem
      height: 1.7rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .16rem
        padding: 0 .2rem
        line-height: .44rem
        border-radius: .06rem
        background: #ff9300
        color: #fff
</style>
