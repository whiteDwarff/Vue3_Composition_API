<template>
	<div>
		<label for="">
			{{ label }}
			<input v-model="value" type="text" />
		</label>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	// 상위 컴포넌트에서 전달인자를 title로 넘김
	props: ['title', 'label'], // value
	emits: ['update:title'], // input
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
