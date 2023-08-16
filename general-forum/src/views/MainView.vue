<template>
	<main class="container py-4">
		<!-- event, class, id 는 root element에 상속된다.  -->
		<MyButton @click="sayHello" class="my-button" id="my-button" />
		<LabelInput label="이름" data-id="id임" />
		<hr />
		<FancyButton>
			click!
			<span style="color: red">123</span>
		</FancyButton>
		<FancyButton v-slot="{ fnacyMessage }">
			{{ fnacyMessage }}
		</FancyButton>
		<hr />
		<AppCard>
			<!-- 반응형 상태를 주입 가능 #[] -->
			<template #[slotArgs]="{ headerMessage }">
				<p>This is Title {{ msg }}</p>
				<hr />
				<p>
					{{ headerMessage }}
				</p>
			</template>
			<!-- 
				<template #default>CONTENT</template> 
				default slot은 암시적으로 사용 가능, 자리를 찾아감
				------------------------------------------
				#default="slotProps" : 하위 컴포넌트에서 올라온 데이터
				key : value 형식으로 slotProps.keyName 으로 사용 가능하다.
			-->
			<template #default="{ childMessage }">
				<p>Default Slot, {{ msg }}</p>
				<hr />
				<p>
					{{ childMessage }}
				</p>
			</template>
			<template #footer>FOOTER</template>
		</AppCard>
		<hr />
		<AppCard> hi </AppCard>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
export default {
	setup() {
		const slotArgs = ref('header');
		const msg = ref('Hello');
		const sayHello = () => {
			alert('hi');
		};
		return { sayHello, slotArgs, msg };
	},
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
};
</script>

<style lang="scss" scoped></style>
