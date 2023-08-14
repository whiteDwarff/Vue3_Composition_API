<template>
	<div>
		<label for="">
			{{ label }}
			<!-- v-model: 
			내부적으로 value로 props를 보내고 @input="event"를 전달받는다.
			-->
			<!-- <input v-model="username" type="text" /> -->
			<!-- <input
				:value="modelValue"
				@input="e => $emit('update:modelValue', e.target.value)"
				type="text"
			/> -->
			<input v-model="value" type="text" />
		</label>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'], // value
	emits: ['update:modelValue'], // input
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
