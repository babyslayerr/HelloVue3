<template>
  <!-- submit.prevent는 폼의 기본동작을 막는 js에서 event.preventDefault와 같은 동작을 한다 submit함수 즉 제출전 reload가 실행되서(reload전에 폼전송도 실행됨) 함수가 동작되지 않기 때문에 설정해야한다-->
  <form v-on:submit.prevent="submit()"> <!--v-on은 DOM 이벤트를듣고 실행할 js를 정의할수있다. -->
    <label for="username">username</label>
    <input v-bind="username"/> <!--v-bind는 템플릿에가 값 변경 불가(일방향, v-model은 양방향 -->

    <label for="password" >password</label>
    <input v-model="password"/>
    <button type="submit">전송</button>
  </form>
</template>

<script>
  // axios 라이브러리 import
  import axios from 'axios';
  // composition api를 쓰기위한 import, 변수선언시 사용
  import {ref} from "vue";

  export default {
    // vue3에서 도입된 composition api사용
    setup(){
      // 변수 선언 ref함수안은 초기화될 값
      let username = ref('');
      let password = ref('');

      // form의 기본 형태를 막고 메소드로 대체(서버 전송 메소드)
      const submit = () => {
        // Post로 보낼 객체
        const data = {
          username : username.value, // 위에서 ref안의 초기값에 접근을 위해서 value필드 사용
          password : password.value
        }

        // axios를 통한 서버 통신 ( Fake API 사용, 가상서버)
        axios.post("https://jsonplaceholder.typicode.com/posts",data)
            .then(response =>{
              console.log(response)
            })
      }
      return {username, password, submit} // return 한 값들은 template 및 메소드 영역에서 다 접근가능
    }
    // Component에서 사용할 객체 선언
    // data() {
    //   return {
    //     username: '',
    //     password: ''
    //   }
    // },
    // methods: {
    //   // form의 기본 형태를 막고 메소드로 대체(서버 전송 메소드)
    //   submit() {
    //     // Post로 보낼 객체
    //     const data = {
    //       username : this.username,
    //       password : this.password
    //     }
    //
    //     // axios를 통한 서버 통신 ( Fake API 사용, 가상서버)
    //     axios.post("https://jsonplaceholder.typicode.com/posts",data)
    //         .then(response =>{
    //           console.log(response)
    //         })
    //   }
    // },
  }
</script>