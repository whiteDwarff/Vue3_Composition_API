<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>{{ staticMsg }}</p>
			<p>{{ msg }}</p>
			<p>{{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		/*
			inject : 상위 컴포넌트에서 전달받은 데이터를 사용, 반응형 상태로 유지가능
			inject(arg1, arg2)
			- 첫번째 파라미터는 전달받은 데이터
			- 두번째 파라미터는 데이터를 전달받지 못하였을 경우 렌더링되는 default 값
		*/
		const staticMsg = inject('static-message', 'default message');
		const { msg, updateMsg } = inject('dynamic-message');
		// msg의 value를 updateMsg를 통해 변경
		updateMsg('hi');
		const count = inject('count');
		return { staticMsg, msg, count };
	},
};
</script>

<style lang="scss" scoped></style>
