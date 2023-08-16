<template>
	<div>
		<!-- 
			:modelValue로 하위 컴포넌트로 props
			@update:modelValue는 하위 컴포넌트에서 올라온 이벤트,
		-->
		<LabelInput
			:modelValue="firstName"
			@update:modelValue="value => $emit('update:firstName', value)"
			label="성"
		/>
		<LabelInput
			:modelValue="lastName"
			@update:modelValue="value => $emit('update:lastName', value)"
			label="이름"
		/>
	</div>
</template>

<script>
import LabelInput from '@/components/LabelInput.vue';

export default {
	props: ['firstName', 'lastName'],
	emits: ['update:firstName', 'update:lastName'],
	setup() {
		return {};
	},
	components: {
		LabelInput,
	},
};
</script>

<style lang="scss" scoped></style>
