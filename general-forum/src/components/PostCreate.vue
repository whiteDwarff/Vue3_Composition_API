<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">NEWS</option>
				<option value="notice">NOTICE</option>
			</select>
		</div>
		<div class="col col-8">
			<input
				v-model="title"
				type="text"
				class="form-control"
				id="exampleFormControlInput1"
			/>
		</div>
		<div class="col col-2 d-grid">
			<button @click="createPost" class="btn btn-primary">ADD</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: 이벤트를 정의, vue3의 권장사항
	emits: {
		createPost: newPost => {
			console.log(newPost);
			if (!newPost.title || !newPost.type) return false;
			return true;
		},
	},
	setup(props, { emit }) {
		const title = ref('');
		const type = ref('news');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
				content: 'default value',
				isLike: false,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return { title, createPost, type };
	},
};
</script>

<style lang="scss" scoped></style>
