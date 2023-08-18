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

<script setup>
import { computed } from 'vue';
/*
	- defineProps, defineEmits는 <script setup>안에서만 사용할 수 있는 컴파일러 메크로임.
	- import 구문 생략
	- 문자열 또는 객체로 선언할 수 있다. 
*/
const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(['toggleLike']);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? 'NEWS' : 'NOTICE'));
const toggleLike = () => emit('toggleLike');
</script>

<!-- 
	한번만 실행되는 로직을 구현하려면 <script> 사용
-->
<script>
console.log('Nomal Script');
</script>

