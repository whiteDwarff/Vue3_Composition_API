<template>
	<div>
		<p>{{ msg }}</p>
		<p>{{ reverseMsg }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const msg = ref('hello vue3');
		const reverseMsg = ref('');

		const reverseFuntion = newValue => {
			console.log('start');
			reverseMsg.value = newValue.split('').reverse().join('');
		};
		watch(msg, reverseFuntion);
		reverseFuntion(msg.value);
		// 데이터가 변경되야 한다는 watch 조건을 최초로 즉시 실행함
		return { msg, reverseMsg };
	},
};
</script>

<style lang="scss" scoped></style>
