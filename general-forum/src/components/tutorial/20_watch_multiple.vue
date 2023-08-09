<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
	setup() {
		const x = ref(0);
		const y = ref(0);
		const obj = reactive({ count: 0 });
		const parsen = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});
		watch(
			() => parsen.obj,
			newValue => {
				console.log('newValue : ', newValue);
			},
		);

		watch(
			() => x.value + y.value,
			(sum, oldValue) => {
				console.log(sum, oldValue);
			},
		);
		watch([x, y], ([newX, newY]) => {
			console.log('new ' + newX, newY);
		});
		// obj.count는 number형이라 반응형 데이터가 아님
		// count를 감지하고 싶다면 getter을 사용해야함
		// watch(
		// 	// getter 사용
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log(`newValue : ${newValue}`);
		// 		console.log(`oldValue : ${oldValue}`);
		// 	},
		// );
		watch(
			// getter 사용
			obj,
			(newValue, oldValue) => {
				console.log(`newValue : ${newValue}`);
				console.log(`oldValue : ${oldValue}`);
			},
		);
		return { x, y, obj, parsen };
	},
};
</script>

<style lang="scss" scoped></style>
