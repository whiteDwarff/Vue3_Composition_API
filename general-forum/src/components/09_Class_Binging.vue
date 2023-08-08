<template>
	<div>
		<!-- class명에 특수문자가 있는 경우 ''사용, 없는 경우 문자열로 binding -->
		<div class="text" :class="{ active: isActive, 'text-denger': hasError }">
			텍스트입니다.
		</div>
		<button @click="toggle">click me!</button>
		<button @click="error">click me!</button>
		<hr />
		<div :class="classObject">CLASS OBJECT</div>
		<hr />
		<div :class="[activeClass, err]">test</div>
		<div :class="[isActive ? 'active' : 'class', err, classObject]">test</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	// class 속성은 binding과 기본 문법이 공존 가능하다
	setup() {
		const isActive = ref(true);
		const toggle = () => {
			isActive.value = !isActive.value;
		};

		const hasError = ref(false);
		const error = () => {
			hasError.value = !hasError.value;
		};

		// const classObject = reactive({
		// 	active: true,
		// 	'text-denger': false,
		// });
		const classObject = computed(() => {
			return {
				active: true && true,
				'text-denger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const err = ref('error');
		return {
			isActive,
			toggle,
			hasError,
			error,
			classObject,
			activeClass,
			err,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: bold;
}
.text-denger {
	color: #f00;
}
.error {
	font-size: 20px;
}
.text-blue {
	color: #0f0;
}
</style>
