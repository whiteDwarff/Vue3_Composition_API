<template>
	<label for="">
		{{ label }}
		<input v-model="value" type="text" />
		<!-- :value="modelValue"
    @input="e => $emit('update:modelValue', e.target.value)" -->
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'], // value
	emits: ['update:modelValue'], // @input
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
