<template>
	<div>
		<p>{{ count }}</p>
		<p>{{ state }}</p>
	</div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
	setup() {
		// ref => object
		const count = ref(0);
		const state = reactive({
			count,
		});
		// 값은 value로 접근
		// console.log(`count : ${count.value}`);
		// ref값을 할당받으면 value의 값이 필요없고 key로 접근 가능
		// console.log(`state: ${state.count}`);

		// 두 객체는 값을 공유함
		count.value++;

		// ref => array
		const msg = ref('hello');
		const arr = reactive([msg]);

		console.log(`msg : ${msg.value}`);
		// 배열에서 접근하기 위해서는 value 속성을 사용해야함
		console.log(`arr : ${arr[0].value}`);

		return {
			count,
			state,
		};
	},
};
</script>

<style lang="scss" scoped></style>
