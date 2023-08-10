<template>
	<div>
		<!-- nav -->
		<NavView />
		<MainView />
	</div>
</template>

<script>
import NavView from '@/views/NavView.vue';
import MainView from '@/views/MainView.vue';
export default {
	components: {
		NavView,
		MainView,
	},
};
</script>

<style lang="scss" scoped></style>
