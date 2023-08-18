<template>
	<main>
		<div>
			<!-- <LifeCycle /> -->
			<TemplateRefs />
		</div>
	</main>
</template>

<script>
//import LifeCycle from '@/components/lifecycle/LifeCycle.vue';
import TemplateRefs from '@/components/template_refs/TemplateRefs.vue';
export default {
	setup() {
		return {};
	},
	components: {
		//LifeCycle,
		TemplateRefs,
	},
};
</script>

<style lang="scss" scoped></style>
