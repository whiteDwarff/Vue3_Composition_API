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

<!-- scoped : 해당 컴포넌트에서만 style을 사용 -->
<!-- module : style이 style의 내장객체로 사용됨, style.red  -->
<style module>
.red {
	color: red;
}
</style>
