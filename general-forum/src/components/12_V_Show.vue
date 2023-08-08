<template>
	<div>
		<!-- 
			v-if와 v-show의 차이

			v-if : 조건에 일치하지 않다면 렌더링을 지원하지 않음, 전환비용이 높음
						런타임 시 조건이 변경되지 않는다면 v-if 사용 
			v-show : 조건에 일치하지 않아도 렌더링이 되나 display 속성이 none으로 설정됨
							랜더링 비용이 높은
							자주 변경되는 데이터는 v-show 사용

		-->
		<h1 v-show="ok">타이틀입니다.</h1>
		<button @click="ok = !ok">click!</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);
		const ok = ref(true);
		return { visible, ok };
	},
};
</script>

<style lang="scss" scoped></style>
