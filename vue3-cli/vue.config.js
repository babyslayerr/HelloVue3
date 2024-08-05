const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// npm run은 node_modules/.bin 에 있는 vue-cli-service 바이너르릴 찾아실행하지만 터미널에서 vue-cli-service를 환경변수로 추가되어있지않아 해당명령을 찾을수 없다고 나온다.
