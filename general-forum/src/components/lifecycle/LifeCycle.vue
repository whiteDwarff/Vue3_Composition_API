<template>
	<div class="container py-4">
		<!-- vue에서 DOM 조작 : ref 속성으로 연결 -->
		<input ref="inputRef" type="text" value="Hello World!" />
		<button @click="visible = !visible">CLICK !!</button>
		<hr />
		<LifeCycleChild v-if="visible" />
		<p id="message">
			{{ message }}
		</p>
	</div>
</template>

<script>
import LifeCycleChild from '@/components/lifecycle/LifeCycleChild.vue';
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
/*
  랜더링 순서
  1. 부모 컴포넌트의 onBeforeMount 까지 실행
  2. 자식 컴포넌트의 onMounted 까지 실행
  3. 부모 컴포넌트의 onMounted 실행
*/
export default {
	setup() {
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);
		/*
		//console.log('setup');
		onBeforeMount(() => {
			console.log('onBeforeMount');
		});
		onMounted(() => {
			console.log('onMounted');
		});
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate', message.value);
			// DOM tree를 업데이트 하기 전이기에 빈값 출력
			console.log(
				'[DOM content] :',
				document.querySelector('#message').textContent,
			);
		});
		onUpdated(() => {
			console.log('onUpdated', message.value);
			console.log(
				'[DOM content] :',
				document.querySelector('#message').textContent,
			);
		});
    */
		return { inputRef, LifeCycleChild, message, visible };
	},
	components: {
		LifeCycleChild,
	},
};
</script>

<style lang="scss" scoped></style>
