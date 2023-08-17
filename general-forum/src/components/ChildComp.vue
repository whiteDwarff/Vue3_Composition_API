<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			<DeepChildComp />
			{{ appMsg }}
		</div>
	</div>
</template>

<script>
import DeepChildComp from '@/components/DeepChildComp.vue';
import { inject } from 'vue';
export default {
	setup() {
		const appMsg = inject('app-message');
		return { appMsg };
	},
	components: {
		DeepChildComp,
	},
};
</script>

<style lang="scss" scoped></style>
