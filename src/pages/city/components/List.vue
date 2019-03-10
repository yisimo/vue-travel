<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="title border-topbottom">A</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
          <div class="item border-bottom">阿勒泰</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    padding-left: 0.2rem;
    font-size: 0.26rem;
    background: #eee;
    color: #666;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.3%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
        text-align: center;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
