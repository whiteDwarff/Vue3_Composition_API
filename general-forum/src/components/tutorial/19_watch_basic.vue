<template>
	<!-- 반응형 상태가 변경되었을때에 감지하여 다른 작업을 수행해야하는 경우 watch 사용-->
	<!-- 상태가 변경되었을 때 DOM을 변경하거나 비동기 작업을해서 다른 상태를 변경하는 경우 watch를 사용하여 특정작업 수행  -->
	<!-- 
		watch(message, (newValue, oldValue) => {
			// newValue : 새로 변경되는 값, oldValue : 이전 값
			console.log('newValue : ', newValue);
			console.log('oldValue : ', oldValue);
		})
	 -->
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const msg = ref('');
		watch(msg, (newValue, oldValue) => {
			console.log(`newValue : ${newValue}`);
			console.log(`oldValue : ${oldValue}`);
		});
		return { msg };
	},
};
</script>

<style lang="scss" scoped></style>
