<template>
  <div class="container py-4">
    <p>{{ msg }}</p>
    <button @click="sayHello">CLICK HERE!!</button>
    <div>
      <input v-model="message" type="text">
    </div>
    <CardView type="news" title="제목" contents="내용" :isLike="true" />
    <TemplateRefsChild ref="child"/>
    <template v-if="child">
      <p>
        {{ child.msg }}
      </p>
    </template>

    <hr>
    <Mybutton />
  </div>
</template>


<!-- 
  <script setup> 내부의 함수 -> setup() {} 함수처럼 컴파일 된다.
  변수와 함수를 랜더링하는 return 문이 생략된다. **
-->
<script setup>
import axios from 'axios'
// component import 후 선언과정이 생략되고 바로 사용 가능하다.
import CardView from './CardView.vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
import Mybutton from './Mybutton.vue';
import { ref } from 'vue';

// ------------------------------------------------------
const msg = 'Hello Child'
const sayHello = () => alert('hello world');
// ------------------------------------------------------
const message = ref('')
const testMessage = ref('Hello World!!')
// 초기엔 빈 객체지만 HTML 요소에 ref를 사용하여 자식 컴포넌트가 랜더링 되면
// 자식 컴포넌트가 보내는 데이터로 인해 객체로 변경된다.
const child = ref(null)
// ------------------------------------------------------
// <script setup>에서 ref를 통한 양방향 데이터 전달이 가능하다.
// 자식컴포넌트로 보낸 child의 데이터를 보내주기 위함.
defineExpose({
  'msg1': testMessage,
})
// ------------------------------------------------------
const {status} = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log(status);

</script>

<style lang="scss" scoped>

</style>