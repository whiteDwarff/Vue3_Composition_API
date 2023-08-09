<template>
	<div>
		{{ msg }}
		<div>
			<button @click="addMsg">click</button>
			<!-- 데이터 binding이 최초 1회만 적용됨 -->
			<p v-once>{{ msg }}</p>
		</div>
		<!-- html 태그를 binging -->
		<!--
      HTML을 동적으로 렌더링하면 XSS(악성코드)의 남용이 발생할 수 있음.
      <script>코드의 실행 등... 
      관리자가 작성한 글 또는 신뢰할 수 있는 콘텐츠에서만 사용
    -->
		<p v-html="rwaHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려보세요.</div>
		<input type="text" value="홍길동" :disabled="isInputDisabled" />
		<input :value="attrs.value" :type="attrs.type" />
		<hr />
		{{ msg.split('').reverse() }} <br />
		{{ isInputDisabled ? 'y' : 'no' }}
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const msg = ref('hello');
		const addMsg = () => {
			msg.value = msg.value + '!';
		};

		const rwaHtml = ref('<strong>안녕하세요</strog>');

		const dynamicTitle = ref('안녕하세요');

		const isInputDisabled = ref('true');

		const attrs = ref({
			type: 'password',
			value: '1234',
			disabled: 'false',
		});
		return {
			msg,
			addMsg,
			rwaHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
