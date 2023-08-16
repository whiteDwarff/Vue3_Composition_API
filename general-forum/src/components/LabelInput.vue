<template>
	<label class="form-label">
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
	</label>
	<!-- 컴포넌트가 다중 루트인 경우 명시적으로 상속받을 태그를 설정해야함 -->
	<input v-bind="$attrs" v-model="value" type="text" class="form-control" />
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
				// 상위컴포넌트에 update:modelValue로 이벤트 전달
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
