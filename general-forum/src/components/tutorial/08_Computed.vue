<template>
	<div>
		<p>{{ teacher.name }}</p>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p> -->
		<p>{{ hasLecture }}</p>
		<button @click="addNum">click</button>
		<p>{{ counter }}</p>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
export default {
	setup() {
		const teacher = reactive({
			name: 'kang',
			lectures: ['HTML / CSS', 'JavaScript', 'Vue3'],
		});
		// 한번 계산된 결과를 저장 후 반응형 데이터가 변경되는 시점에만 실행
		// getter로 읽기전용 method임
		// 값을 할당하거나 수정 불가
		const hasLecture = computed(() => {
			return teacher.lectures.length > 0 ? true : false;
		});

		const counter = ref(0);
		const addNum = () => (counter.value += 1);

		const firstName = ref('강');
		const lastName = ref('문호');
		const fullName = computed({
			get() {
				return firstName.value + lastName.value;
			},
			set(value) {
				console.log(`value: ${value}`);
				// value를 한 단어씩 나눈다.
				console.log(value.split(''));
				// 구조분해를 하는 대상이 문자일 경우 할당 시 [ ] 사용
				// 객체일 경우 { }를 사용
				[firstName.value, lastName.value] = value.split('');
			},
		});

		// computed()는 읽기 전용 객체임 !!
		// but,
		// computed()에서 set() 메서드를 정의하였기에 값을 재할당 할 수 있음.
		fullName.value = '문호';

		console.log(firstName.value);
		console.log(lastName.value);
		return {
			teacher,
			hasLecture,
			counter,
			addNum,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
