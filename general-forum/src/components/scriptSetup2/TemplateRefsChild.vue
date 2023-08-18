<template>
	<div>
		<!--
			부모가 ref로 정의한 데이터를 사용
		-->
		{{ $parent.msg1 }}
	</div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('hello Parent');
const sayHello = () => alert(msg.value);
// 객체로 정의
// <script setup>에서 ref를 통한 양방향 데이터 전달이 가능하다.
// 현재 부모 컴포넌트로 데이터 전달
defineExpose({
	// 노출할 데이터를 key: value로 정의, 구조분해할당가능
	msg,
	sayHello,
});
</script>

<style lang="scss" scoped></style>
