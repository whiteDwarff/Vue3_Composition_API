<template>
	<div>
		<!-- input, textarea에서는 value와 input 이벤트 사용-->
		<form @submit.prevent="submitEvent">
			<div>
				<!-- v-model.lazy : 해당 인풋에서 focus()가 떨어지면 반응형이 동기화 -->
				<!-- <input v-model.lazy="id" type="text" /> -->
				<!-- .number : input의 값을 number로 형변환 -->
				<input v-model.number="id" type="text" />
			</div>
			<div>
				<!-- 사용자가 입력한 값의 앞/뒤 공백을 제거 -->
				<input v-model.trim="password" type="password" />
			</div>
			<div>
				<!-- 사용자가 입력한 값의 앞/뒤 공백을 제거 -->
				<textarea v-model.trim="textareaValue"></textarea>
			</div>
			<div>
				<input type="submit" value="submit" />
			</div>
		</form>

		<hr />
		<!-- checkbox와 radio에서는 checked와 change 사용 -->
		<div>
			<label for="checkBox">check</label>
			<input v-model="checkboxValue" id="checkBox" type="checkbox" />
		</div>

		<hr />
		<!-- radio, 선택한 값에 따라 반응형 데이터의 값이 변경됨 -->
		<div>
			<label for="radioA">O형</label>
			<input v-model="radioValue" value="O" id="radioA" type="radio" />
		</div>
		<div>
			<label for="radioB">A형</label>
			<input v-model="radioValue" value="A" id="radioB" type="radio" />
		</div>
		{{ radioValue }}

		<!-- select에서는 value와 change 사용, @chnange=""사용 -->
		<hr />

		<select v-model="select">
			<option value="html">HTML</option>
			<option value="css">CSS</option>
			<option value="javascript">JavaScript</option>
			<option value="vue">Vue</option>
		</select>

		<hr />
		<h2>CheckBox Values</h2>
		<label for="">
			html
			<input v-model="checkBoxValues" type="checkbox" value="html" />
		</label>
		<label for="">
			css
			<input v-model="checkBoxValues" type="checkbox" value="css" />
		</label>
		<label for="">
			javascript
			<input v-model="checkBoxValues" type="checkbox" value="javascript" />
		</label>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const id = ref('');
		const password = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const radioValue = ref('O');
		const select = ref('html');
		// 여러개의 체크박스의 값을 담는다.
		const checkBoxValues = ref([]);
		const submitEvent = () => {
			console.log(id.value, password.value, textareaValue.value);
		};
		return {
			id,
			password,
			textareaValue,
			submitEvent,
			checkboxValue,
			radioValue,
			select,
			checkBoxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
