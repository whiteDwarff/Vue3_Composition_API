<template>
	<div>
		<p>{{ book }}</p>
		<p>{{ author }}</p>
		<p>{{ year }}</p>
		<p>{{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';
export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			content: '당신은 이 책을 읽습니다.',
			price: '무료',
		});

		// string 자료형을 ref() type으로 변환
		// 반응형 객체에서 여러개의 값을 구조분해할당 시 toRefs()사용
		const { year, title } = toRefs(book);
		// 단일값을 할당시 toRef() 사용
		// 두번째 인자로 할당할 값 넣기
		const author = toRef(book, 'author');
		return {
			book,
			author,
			year,
			title,
		};
	},
};
</script>

<style lang="scss" scoped></style>
