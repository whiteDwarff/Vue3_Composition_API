<template>
	<div>
		<p>{{ original.count }}</p>
		<p>{{ copy.count }}</p>
	</div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		console.log(original.count++);

		// 해당 객체는 readonly 객체라 수정이 불가능함
		// 하위 컴포넌트에서 받은 데이터의 경우 readonly가 된다.
		const copy = readonly(original);
		console.log(copy.count++);

		return {
			original,
			copy,
		};
	},
};
</script>

<style lang="scss" scoped></style>
