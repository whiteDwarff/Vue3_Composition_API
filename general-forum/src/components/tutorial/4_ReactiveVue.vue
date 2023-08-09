<template>
	<div>
		<button @click="change">click</button>
		<p>{{ state }}</p>
		<p>{{ state.count }}</p>
		<p>{{ msg }}</p>
		<p>{{ reactiveMsg }}</p>
		{{ a }}
		{{ b }}
		{{ c }}
	</div>
</template>

<script>
// javascrip 객체에서 반응형 상태를 생성하기 위해 reactive() 함수 사용
// 내부적으로 return된 객체는 reactive로 만들어짐 : return { data{ } }
import { reactive, ref } from 'vue';
export default {
	setup() {
		// 반응형 객체 선언, key : value
		const state = reactive({ count: 0 });
		// 반응형 객체가 아닌 문자열 생성
		// reactive()는 객체 타입에만 반응형으로 동작함, 문자, 숫자형 x
		let msg = reactive('Hello Vue');

		const change = () => {
			state.count++;
			msg = msg + '!'; // 컴파일 오류,
			reactiveMsg.value += '!'; // 값에 접근 시 value를 사용
			changeState();
		};
		////////////////////////////////////////////////

		// ref()를 통해 string, number, boolean 값을 동적으로 생성
		// ref()로 생성되는 객체는 string, number, boolean 형식만 사용 가능
		// 변이가능한 객체로 반환하며 value라는 속성 하나만 포함한다.
		// 해당 객체는 내부의 value 값에 대한 반응형 참조(refence)역할을 함.
		const reactiveMsg = ref('Hello Reactive Vue');

		////////////////////////////////////////////////

		const a = ref(0);
		const b = ref('a');
		const c = ref('false');

		const changeState = () => {
			a.value++;
			b.value += b.value;
			c.value = !c.value;
		};

		return {
			state,
			change,
			msg,
			reactiveMsg,
			a,
			b,
			c,
			changeState,
		};
	},
};
</script>

<style lang="scss" scoped></style>
