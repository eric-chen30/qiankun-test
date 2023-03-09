// 单独创建一个配置文件，在main.ts中引入就好
const microApps = [
  {
    name: 'vue-sub',
    entry: 'process.env.VUE_APP_VUE_SUB',
    activeRule: '/vue-sub',
    container: '#subapp-container',
    props: {
      routerBase: '/vue-sub'
    }
  },
  {
    name: 'react-sub',
    entry: 'VUE_APP_REACT_SUB',
    activeRule: '/react-sub',
    container: '#subapp-container',
    props: {
      routerBase: '/react-sub'
    }
  }
]

export default microApps