<template>
	<div>
		<ul>
			<!-- <template v-for="item in items" :key="item.id">
				<li v-if="item.id % 2 == 0">
					{{ item.message }}
				</li>
			</template> -->
			<li v-for="item in evenItem" :key="item.id">
				{{ item.message }}
			</li>
		</ul>
		<ul>
			<li v-for="(key, value, index) in myObject" :key="index">
				<span>{{ index }}-</span>
				<span>{{ value }}-</span>
				<span>{{ key }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);
		const evenItem = computed(() => items.filter(item => item.id % 2 == 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2016-01-01',
		});
		return { items, evenItem, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
