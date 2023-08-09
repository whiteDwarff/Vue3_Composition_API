<template>
	<div>
		<input @keyup.enter="addTodo" type="text" />
		<ul>
			<li v-for="todo in todos" :key="todo">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);
		const addTodo = e => {
			todos.push(e.target.value);
			e.target.value = '';
			e.target.focus();
		};
		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
