<template>
	<div class="container">
		<!-- 자식요소에 Non-prop 속성을 바인딩 : $attrs -->
		<button @click="sayHello" class="btn btn-primary" type="button">
			My Button <small>{{ message }}</small>
		</button>
	</div>
</template>

<script>
export default {
	// Non-prop 속성을 상속받지 않는다.
	inheritAttrs: false,
};
</script>
<script setup>
import { ref } from 'vue';
const message = ref('message');
</script>

<style lang="scss" scoped></style>
