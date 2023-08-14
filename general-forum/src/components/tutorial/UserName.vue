<template>
	<div>
		<LabelInputTest
			:modelValue="firstName"
			@update:modelValue="value => $emit('update:firstName', value)"
			label="성"
		/>
		<LabelInputTest
			:modelValue="lastName"
			@update:modelValue="value => $emit('update:lastName', value)"
			label="이름"
		/>
	</div>
</template>

<script>
import LabelInputTest from '@/components/tutorial/LabelInputTest.vue';

export default {
	props: ['firstName', 'lastName'],
	emits: ['update:firstName', 'update:lastName'],
	setup() {
		return {};
	},
	components: {
		LabelInputTest,
	},
};
</script>

<style lang="scss" scoped></style>
