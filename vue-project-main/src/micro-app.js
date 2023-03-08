// 单独创建一个配置文件，在main.ts中引入就好
const microApps = [
  {
    name: 'vue-sub',
    entry: '//localhost:6666',
    activeRule: '/vue-sub',
    container: '#subapp-container',
    props: {
      routerBase: '/vue-sub'
    }
  },
  {
    name: 'react-sub',
    entry: '//localhost:6666',
    activeRule: '/react-sub',
    container: '#subapp-container',
    props: {
      routerBase: '/react-sub'
    }
  }
]

export default microApps