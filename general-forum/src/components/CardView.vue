<template>
	<div class="card">
		<div class="card-body">
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn" @click="toggleLike" :class="isLikeClass"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	methods: {},
	props: {
		type: {
			type: String,
			// 해당 속성이 props로 오지 않을 경우 default값을 news로 하겠다.
			default: 'news',
			// validator : props로 넘어오는 속성의 유효성을 검사
			// news나 notice가 아니면 에러가 발생함
			validator: value => ['news', 'notice'].includes(value),
		},
		title: {
			type: String,
			// props로 무조건 넘어와야하는 속성이다.
			required: true,
		},
		contents: {
			type: String,
			//required: true,
		},
		isLike: {
			type: Boolean,
			//default: false,
		},
	},
	// setup()의 method에서 emit을 사용시 선언해줘야 함
	emit: ['toggleLikde'],
	// setup의 매개변수는 첫번째, porps, 2번째 context 객체
	// context를 구조분해할당하여 { emit } 선언
	setup(props, { emit }) {
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? 'NEWS' : 'NOTICE',
		);
		const toggleLike = () => {
			// emit : 상위 컴포넌트로 event를 발생시킴
			return emit('toggleLike');
		};
		return { isLikeClass, typeName, toggleLike };
	},
};
</script>

<!-- scoped : 해당 컴포넌트에서만 style을 사용 -->
<!-- module : style이 style의 내장객체로 사용됨, style.red  -->
<style module>
.red {
	color: red;
}
</style>
