<template>
	<!-- 특정 조건에 렌더링 : v-if 사용 -->
	<div>
		<h1 v-if="visible">안녕하세요.</h1>
		<h1 v-else>반가워요.</h1>
		<button @click="visible = !visible">click</button>
		<hr />
		<h2 v-if="type === 'A'">A</h2>
		<h2 v-else-if="type === 'B'">B</h2>
		<h2 v-else>C</h2>
		<button @click="type = 'A'">A</button>
		<button @click="type = 'B'">B</button>
		<button @click="type = 'C'">C</button>
		<hr />
		<div>
			<template v-if="visible">
				<p>True</p>
			</template>
			<template v-else>
				<p>False</p>
			</template>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);
		const type = ref('A');
		return { visible, type };
	},
};
</script>

<style lang="scss" scoped></style>
