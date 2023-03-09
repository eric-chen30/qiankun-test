<script lang="ts">
import microApps from './micro-app'
export default {
  data() {
    return {
      microApps,
      current: '/vue-sub/'
    }
  },
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule)
      console.log(item)
    },
    // 根据初始url决定子应用的显示
    bindCurrent () {
      const path = window.location.pathname
      if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
        this.current = path
      }
    },
    listenRouterChange () {
      const _wr = function (type) {
        const orig = history[type]
        return function () {
          const rv = orig.apply(this, arguments)
          const e = new Event(type)
          e.arguments = arguments
          window.dispatchEvent(e)
          return rv
        }
      }
      history.pushState = _wr('pushState')

      window.addEventListener('pushState', this.bindCurrent)
      window.addEventListener('popstate', this.bindCurrent)

      // this.$once('hook:beforeDestroy', () => {
      //   window.removeEventListener('pushState', this.bindCurrent)
      //   window.removeEventListener('popstate', this.bindCurrent)
      // })
    }
  },
  mounted() {
    this.listenRouterChange()
  },
  created() {
    this.bindCurrent()
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <div class="title">qiankun-test</div>
      <ul class="sub-apps">
        <li
          v-for="item in microApps"
          :class="{ active: item.activeRule === current }"
          :key="item.name"
          @click="goto(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- 子应用挂载处 -->
    <div id="#subapp-container"></div>
  </div>
</template>

<style scoped lang="scss">
html, body{
  margin: 0 !important;
  padding: 0;
  background-color: #541bcd;
}
.layout-wrapper {
  width: 100%;
  .layout-header{
    height: 50px;
    width: 1200px;
    box-shadow: 0 2px 8px rgba(70, 20, 220, 0.8);
    line-height: 50px;
    background-color: #090909;
    .title {
      float: left;
      margin: 0 50px;
      font-size: 24px;
      font-weight: bold;
      color: #3408e6;
    }
    .sub-apps {
      list-style: none;
      margin: 0;
      li{
        font-size: 24px;
        font-weight: bold;
        color: #fffdfd;
        list-style: none;
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
        &.active{
          color: #ca2020;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>