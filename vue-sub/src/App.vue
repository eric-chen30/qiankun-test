<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <p>当前处于<code>{{ isInQiankun ? 'qiankun' : '独立运行'}}</code>环境</p>
    </div>
    <div class="btns">
      <template v-if="isInQiankun">
        <button @click="gotoSubReact">从当前子应用内跳转到`sub-react`子应用</button>
        <button @click="openSubVue">独立打开sub-vue子应用</button>
      </template>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    isInQiankun () {
      return window.__POWERED_BY_QIANKUN__
    }
  },
  methods: {
    gotoSubReact () {
      history.pushState(null, 'react-sub', '/react-sub')
    },
    openSubVue () {
      if (!this.isInQiankun) {
        alert('当前已经是单独运行的子应用')
        return
      }
      // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，谨慎使用，生产环境建议将跳转地址维护在环境变量中
      window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btns{
  margin: 100px;
}
.btns button{
  margin: 0 10px;
}
</style>
