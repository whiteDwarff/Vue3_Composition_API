<template>
	<div class="card">
		<!-- 
      상위 컴포넌트에서 사용시 #header 라는 slot이 정의되어 있을 경우에만 렌더링 시킴
    -->
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="This is Header Message!!"
				>#Header</slot
			>
		</div>
		<div v-if="$slots.default" class="card-body">
			<!-- default named slot, name속성이 없는 경우 -->
			<slot :child-message="childMsg">#Body</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-body-secondary">
			<slot name="footer">#Footer</slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup(props, { slots }) {
		const hasFooter = computed(() => !!slots.footer);
		const childMsg = ref('This is Child-message');
		return { childMsg, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
