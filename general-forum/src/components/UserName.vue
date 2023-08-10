<template>
	<div>
		<LabelInput
			@update:model-value="value => $emit('update:firstName', value)"
			:model-value="firstName"
			label="성"
		/>
		<LabelInput
			@update:model-value="value => $emit('update:lastName', value)"
			:model-value="lastName"
			label="이름"
		/>
	</div>
</template>

<script>
import LabelInput from '@/components/LabelInput.vue';
export default {
	props: ['firstName', 'lastName'],
	emits: ['update:firstName', 'update:lastName'],
	components: {
		LabelInput,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
