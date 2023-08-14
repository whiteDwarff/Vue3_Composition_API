<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news" selected>News</option>
				<option value="notice">Notice</option>
			</select>
		</div>
		<div class="col col-2">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2" d-grid>
			<button @click="createPost" class="btn btn-primary">click</button>
		</div>
	</div>
</template>
<script>
import { ref } from 'vue';

export default {
	// create-post 메서드에 event 추가 (validation 로직 등을 작성, event가 없다면 null 선언)
	// emits는 method 이름이 아닌 발생시키는 event명으로 작성
	// 컴포넌트를 문서화 하기 위해서 모든 이벤트를 정의하는것이 좋음
	emits: {
		createPost: newPost => {
			if (!newPost.title) alert('Empty value !!');
			else if (!newPost.type) alert('Select Type !!');
			else return true;
			// createPost : null => validation 로직이 없을 경우
		},
	},
	setup(props, { emit }) {
		const title = ref('');
		const type = ref('news');

		const createPost = () => {
			const newPost = {
				id: 0,
				title: title.value,
				contents: 'new content',
				isLike: false,
				type: type.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return { createPost, title, type };
	},
};
</script>

<style lang="scss" scoped></style>
