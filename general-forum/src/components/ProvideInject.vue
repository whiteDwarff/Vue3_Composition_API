<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">Provide_Inject Component</div>
			<div class="card-body">
				<button @click="count++">click!!</button>
				<ChildComp />
				<p>{{ appMsg }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import ChildComp from '@/components/ChildComp.vue';
import { provide, ref, readonly, inject } from 'vue';
export default {
	setup() {
		const staticMsg = 'static msg';
		const msg = ref('message');
		const updateMsg = newMsg => {
			msg.value = newMsg;
		};
		const count = ref(10);
		/*
      provide : 자식 컴포넌트로 데이터 전달, 최말단 컴포넌트까지 한번에 전달 가능
      provide(arg1, arg2)
        - 첫번째 인자는 key
        - 두번째 인자는 value
        - 데이터를 받는 자식 컴포넌트에서는 key로 데이터를 사용 가능
      
      -----------------------------------------------------------

      데이터를 수정해야할 상황이 생길경우를 대비하여 반응형 상태를 수정하는 메서드까지 같이 보내주는 것이 좋다
      하위컴포넌트에서의 데이터 수정을 막으려면 ?
        - provide(arg1, readonly(arg1))로 전달하면 된다.
        - 객체 형식으로 전달
    */

		provide('static-message', staticMsg);
		// msg의 값을 수정하지 못하게 readonly 사용
		provide('dynamic-message', { msg: readonly(msg), updateMsg });
		provide('count', count);
		// -----------------------------------------------------------
		// app-level에서 정의된 provide 사용
		const appMsg = inject('app-message');
		return { count, appMsg };
	},
	components: {
		ChildComp,
	},
	mounted() {
		console.log(this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
