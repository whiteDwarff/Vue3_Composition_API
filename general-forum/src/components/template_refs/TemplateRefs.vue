<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- onMounted 된 후 input에 값이 할당된 후 접근해야함. -->
		<p v-if="input">{{ input.value }}</p>
		<p v-if="$refs.input">{{ $refs.input.value }}</p>
		<p>{{ $refs.input === input }}</p>
		<hr />
		<ul>
			<li
				v-for="(fruit, index) in fruits"
				:key="index"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
			<!--
        ref="itemRefs"를 사용하여 mounted가 된 후 DOM요소인 li는
        itemRefs의 배열에 채워진다.
      -->
			<!-- <li v-for="(fruit, index) in fruits" :key="index" ref="itemRefs">
				{{ fruit }}
			</li> -->
		</ul>
		<hr />
		<TemplateRefsChild ref="child" />
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from '@/components/template_refs/TemplateRefsChild.vue';
export default {
	setup() {
		// HTML 태그속성인 ref와 동일한 변수명을 가져야함
		const input = ref(null);
		// ref()로 할당된 변수에 접근하려면 onMounted 된 이후에 가능하다.
		onMounted(() => {
			input.value.value = 'Hello World';
			console.log('onMounted :', input.value);
			itemRefs.value.forEach(item => {
				console.log(item);
				console.log('child : ', child.value.msg);
				// console.log(item.textContent, item);
			});
			child.value.sayHello();
		});
		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);
		const child = ref(null);
		return { input, fruits, itemRefs, child };
	},
	components: {
		TemplateRefsChild,
	},
};
</script>

<style lang="scss" scoped></style>
