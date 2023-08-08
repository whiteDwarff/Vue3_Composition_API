<template>
	<!-- 
		이벤트 처리는 v-on 디렉티브를 사용 
		v-on을 @으로 처리 가능
	-->
	<div>
		<button @click="printEventInfo('hello Vue3', $event)">
			inlineEventHandler
		</button>
		<hr />
		<input @keyup="onKeyOpHanlder" type="text" />
		<hr />
		<!-- preventDefault() : event의 기본 기능을 제어 (새로고침 ) -->
		<!-- stopPropagation() : event의 버블링을 제어 (이벤트 전파) -->
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (msg, event) => {
			console.log('msg: ' + msg);
			console.log('event:' + event.target);
			console.log('event target:' + event.target.tagName);
		};
		const onKeyOpHanlder = evnet => {
			// 사용자가 무슨 key를 입력했는지 확인할 수 있음.
			console.log(evnet.key);
		};

		return { printEventInfo, onKeyOpHanlder };
	},
};
</script>

<style lang="scss" scoped></style>
