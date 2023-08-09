<template>
	<div>
		<!-- 디렉티브란?
			v- 접두사가 잇는 특수 속성, 컴포넌트에게 '~~하게 작동해라'하고 지시를 해주는 지시문
			ex) 
				v-html,
				v-if,
				v-for,
				v-html,
				v-on,
				v-bind .....
		-->
		<!-- v-text -->
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<hr />
		<p v-html="html" />
		<hr />
		<!-- 렌더링이 최초 1회만 실행 -->
		<p v-once>{{ msg }}</p>
		<br />
		<br />
		<br />
		<div v-memo="[subscribers]">
			<p>subscribers : {{ subscribers }}</p>
			<p>views : {{ views }}</p>
			<p>likes : {{ likes }}</p>
		</div>
		<div>
			<p>subscribers : {{ subscribers }}</p>
			<p>views : {{ views }}</p>
			<p>likes : {{ likes }}</p>
		</div>
		<button @click="subscribers++">Subs</button>
		<button @click="views++">Views</button>
		<button @click="likes++">Likes</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const html = ref('<strong>안녕</strong>');

		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { msg, html, subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
