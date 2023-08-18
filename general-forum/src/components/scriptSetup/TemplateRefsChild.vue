<template>
	<div>
		{{ $parent }}
		<!--
		<ul>
			<li v-for="fruit in $parent.fruits" :key="fruit">
				{{ fruit }}
			</li>
		</ul> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('hello');
const sayHello = () => alert(msg.value);
defineExpose({
	// 노출할 데이터를 key: value로 정의, 구조분해할당가능
	msg,
	sayHello,
});
</script>

<style lang="scss" scoped></style>
