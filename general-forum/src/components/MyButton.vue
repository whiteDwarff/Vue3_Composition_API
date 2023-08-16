<template>
	<div class="container">
		<!-- 자식요소에 Non-prop 속성을 바인딩 : $attrs -->
		<button @click="sayHello" class="btn btn-primary" type="button">
			My Button
		</button>
	</div>
</template>

<script>
export default {
	// Non-prop 속성을 상속받지 않는다.
	//inheritAttrs: false,
	// attrs : context 객체
	// 자식요소로 Non-prop 속성을 바인딩 할 수 있다
	emits: ['click'],
	setup(props, context) {
		const sayHello = () => {
			context.emit('click');
		};
		console.log(context.attrs);
		console.log(context.attrs.class);
		console.log(context.attrs.onClick);
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
