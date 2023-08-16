<template>
	<button class="fancy-btn">
		<slot :fnacyMessage="fnacyMessage">Default Slot!!</slot>
	</button>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const fnacyMessage = ref('fancy message');
		return { fnacyMessage };
	},
};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: #43d392;
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
