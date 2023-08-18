<template>
	<div class="container py-4">
		{{ msg }}
		<button @click="sayHello">click</button>
		<input v-model="message" type="text" />
		<CardView type="news" title="제목" contents="내용" :isLike="true" />
		<hr />
		<TemplateRefs ref="child" />
		<template v-if="child">
			<p>{{ child.msg }}</p>
		</template>
		<hr />
		<MyButton class="parent-class" />
	</div>
</template>

<!-- 
  - vue의 setup() 속성을 간편하게 사용
  - 상용구를 줄일 수 있음
  - 변수, 함수를 사용하여 랜더링 시  return 구문이 필요하지 않음.

-->
<script setup>
import axios from 'axios'
import { ref } from 'vue';
// component도 import 하고 components: {}에 등록 및 return 사용 x
import CardView from '@/components/scriptSetup/CardView.vue';
import TemplateRefs from '@/components/scriptSetup/TemplateRefsChild.vue';
import MyButton from './MyButton.vue';

const msg = 'hello world';
const sayHello = () => {
	alert('hello world');
};
const message = ref('');
const child = ref(null);
defineExpose({
	msg,
});
// script setup을 사용하면 비동기 통신에서 async 없이 await을 사용할 수 있다.
const response = await axios('https://dummy.restapiexample.com/api/v1/employees')
console.log(response);
</script>

<style lang="scss" scoped></style>
