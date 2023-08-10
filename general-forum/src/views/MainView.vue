<template>
	<main class="container py-4">
		<PostCreate @createPost="createPost" />

		<hr class="my-4" />

		<div class="container text-center">
			<div class="row g-3">
				<div class="col col-4" v-for="post in posts" :key="post.id">
					<CardView
						:title="post.title"
						:contents="post.contents"
						:isLike="post.isLike"
						:type="post.type"
						@toggleLike="post.isLike = !post.isLike"
					/>
				</div>
			</div>

			<hr class="my-4" />

			<LabelInput v-model="userName" label="이름" />

			<hr class="my-4" />

			<LabelTitle v-model:title="userName" label="제목" />

			<hr class="my-4" />

			<UserName v-model:firstName="firstName" v-model:lastName="lastName" />
		</div>
	</main>
</template>

<script>
import UserName from '@/components/UserName.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import CardView from '@/components/CardView.vue';
import PostCreate from '@/components/PostCreate.vue';
import { reactive, ref } from 'vue';
export default {
	components: {
		CardView,
		PostCreate,
		LabelInput,
		LabelTitle,
		UserName,
	},
	setup() {
		const posts = reactive([
			{
				id: 0,
				title: 'Card title1',
				contents:
					'"Some quick example text to build on the card title and make up the bulk of the card"s content',
				isLike: true,
				type: 'news',
			},
			{
				id: 1,
				title: 'Card title2',
				contents:
					'"Some quick example text to build on the card title and make up the bulk of the card"s content',
				isLike: true,
				type: 'news',
			},
			{
				id: 2,
				title: 'Card title3',
				contents:
					'"Some quick example text to build on the card title and make up the bulk of the card"s content',
				isLike: true,
				type: 'news',
			},
			{
				id: 3,
				title: 'Card title4',
				contents:
					'"Some quick example text to build on the card title and make up the bulk of the card"s content',
				isLike: false,
				type: 'notice',
			},
			{
				id: 4,
				title: 'Card title5',
				contents:
					'"Some quick example text to build on the card title and make up the bulk of the card"s content',
				isLike: true,
				type: 'news',
			},
			{
				id: 5,
				title: 'Card title6',
				contents:
					'"Some quick example text to build on the card title and make up the bulk of the card"s content',
				isLike: false,
				type: 'notice',
			},
		]);
		const createPost = newPost => {
			console.log('newPost', newPost);
			posts.push(newPost);
		};
		const userName = ref('');
		const firstName = ref('');
		const lastName = ref('');
		return { posts, createPost, userName, firstName, lastName };
	},
};
</script>

<style lang="scss" scoped></style>
