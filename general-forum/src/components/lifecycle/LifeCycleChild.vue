<template>
	<div class="card">
		<div class="card-body">CHILD COMPONENT</div>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		// console.log('[CHILD] setup');
		onBeforeMount(() => {
			console.log('[CHILD] onBeforeMound');
		});
		onMounted(() => {
			console.log('[CHILD] onMounted');
		});
		onBeforeUnmount(() => {
			console.log('[ CHILD ] : onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('[ CHILD ] : onUnmounted');
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
