<template>
	<div>
		<button @click="increment">Counter :{{ counter }}</button>
	</div>
</template>

<script>
// option을 선언한 대신 가져온 함수 (ref, onMounted..)를 사용하여 Vue 컴포넌트를 작성하는 API 세트

import { onMounted, ref } from 'vue';
export default {
	setup() {
		const counter = ref(0);
		const increment = () => counter.value++;

		onMounted(() => {
			console.log('Mounted Succesed!!');
		});
		return {
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<!-- v-base-3 -->
