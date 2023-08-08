<template>
	<div>
		<!-- inline style binding -->
		<div :style="comStyleObject">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magni
			nostrum ut recusandae inventore sunt maxime! Labore, officiis repellat.
			Veritatis dolor tempora eos accusamus tempore id unde commodi maiores
			esse.
		</div>
		<button @click="fontSize++">+</button>
		<button @click="fontSize--">-</button>
	</div>
</template>

<script>
import { reactive, ref, computed } from 'vue';
export default {
	setup() {
		const styleObject = reactive({
			color: 'red',
			fontSize: '13px',
		});

		const fontSize = ref(13);

		const comStyleObject = computed(() => {
			return {
				color: 'red',
				fontSize: `${fontSize.value}px`,
			};
		});

		return {
			styleObject,
			comStyleObject,
			fontSize,
		};
	},
};
</script>

<style lang="scss" scoped></style>
