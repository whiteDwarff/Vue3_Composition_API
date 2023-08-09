<template>
	<div>
		<form @submit.prevent="save(title, contents)">
			<!-- lazy : focus가 떨어지면 실행 -->
			<input v-model.lazy="title" type="text" />
			<textarea v-model.lazy="contents"></textarea>
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장됨 title : ${title}, contents : ${contents}`);
		};
		// watchEffect()는 최초로 즉시 실행함
		watchEffect(() => {
			save(title.value, contents.value);
		});
		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
