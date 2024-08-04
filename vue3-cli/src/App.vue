<template>
  <img alt="Vue logo" src="./assets/logo.png"> <!-- 더이상 Vue3에서는 root태그가 필요없어졌음 -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' // HelloWorld Vue컴포넌트 파일을 import

export default { // Vue의 인스턴스 옵션 속성 후에 다른 컴포넌트(루트컴포넌트 포함)에서 사용하기 위함 -> 후에 main.js에 의해 mount될 dom영역에 최종적으로 사용됨(마지막 create(App<-여기에 import하기 위함)
  name: 'App', // 후에 main.js에서 create(App) 에서 속성이 import됨
  components: {
    HelloWorld
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
</style>
