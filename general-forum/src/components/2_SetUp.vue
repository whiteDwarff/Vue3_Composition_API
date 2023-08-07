<template>
	<div>
		<button @click="increment">click</button>
		{{ counter }}
		<p>{{ msg }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const counter = ref(0);
		const increment = () => {
			counter.value += 1;
		};

		const msg = ref('Hello Vue3');
		return {
			counter,
			msg,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
