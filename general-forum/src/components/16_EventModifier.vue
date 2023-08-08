<template>
	<div>
		<div id="modifiers">
			<!-- 버블링 효과에도 .capture를 지정하면 이벤트 대상을 제외한 .capture 대상이 이벤트 1순위가 됨 -->
			<div @click.capture="clickDiv">
				DIV
				<!-- 이벤트 대상을 클릭해야만 이벤트가 실행됨, 캡쳐링, 버블링의 영향 x -->
				<p @click.self="clickP">
					P
					<!-- @click.stop="" 이벤트의 전파를 제어 -->
					<!-- 상위테그로 이벤트 전파가 되지 않음  -->
					<!-- <span @click.stop="clickSpan">SPAN</span> -->
					<span @click="clickSpan">SPAN</span>
					<!-- 속성은 여러개 중첩가능 -->
					<a @click.prevent.stop="clickA" href="https://naver.com">Anchor</a>
				</p>
			</div>
		</div>
		<!-- 이벤트의 기본 동작을 제어, <a> 태그의 경우 링크 이동 등 ~~  -->
		<a @click.prevent="clickA" href="https://naver.com">Anchor</a>
		<!-- 한번만 실행되고 이후엔 실행되지 않음. -->
		<button @click.once="clickDiv"></button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			// alert('좋아요');
		};
		const clickA = () => {
			alert('어떤기능~');
		};
		return { clickA, clickDiv, clickP, clickSpan };
	},
};
</script>

<style scoped>
#modifiers * {
	padding: 40px;
}
#modifiers div {
	background-color: #333;
}
#modifiers p {
	background-color: #ccc;
}
#modifiers span {
	background-color: #ddd;
	display: block;
}
</style>
