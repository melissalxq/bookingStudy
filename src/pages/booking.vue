<template>
	<q-page padding>
		<q-list>
			<q-list-header class="listHeaader">Book a session</q-list-header>

			<q-item>
				<q-item-side icon="account_circle"/>
				<q-btn-dropdown color="orange" :label="teachers[0].name" class="full-width">
					<q-list highlight >
						<q-item v-for="n in teachers" :key="n.name" v-close-overlay @click.native="handlerFunction">
							<q-item-side>
								<q-item-tile avatar>
									<img src="~assets/CONFUSEDbaby.jpg" width="50">
								</q-item-tile>
							</q-item-side>
							<q-item-main>{{n.name}}</q-item-main>
							<!-- <q-item-tile label>{{n.name}}</q-item-tile> -->
						</q-item>
						<!-- <q-item>
							<q-item-side>
								<q-item-tile avatar>
									<img src="statics/boy-avatar.png">
								</q-item-tile>
							</q-item-side>
							<q-item-tile label>Bella</q-item-tile>
						</q-item>
						<q-item>
							<q-item-tile label>Kathy</q-item-tile>
						</q-item> -->
					</q-list>

				</q-btn-dropdown>
			</q-item>
<!-- copy sample -->
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>
<!-- copy sample end		 -->

			<q-item>
				<q-item-side icon="event"/>
				<q-item-main>
					<q-datetime
						v-model="model"
						type="date"
						float-label="Date"
						color="orange"
						class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
					/>
				</q-item-main>
			</q-item>
			<q-item>
				<q-item-side icon="schedule"/>
				<q-item-main>
					<q-datetime
						v-model="model"
						type="time"
						float-label="Time"
						color="orange"
						class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
					/>
				</q-item-main>
			</q-item>
		</q-list>
		<q-btn color="orange" @click="submit" class="full-width">confirm</q-btn>
	</q-page>
</template>

<script>
//start copy
import Vue from 'vue'
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})
//start copy

export default {
	// name: 'booking page',
	data() {
		return {
			model: new Date(),
			teachers: [
				{ name:'teachers'},
				{ name:'Anna'},
				{ name:'Bella'}
				],
				// start copy
					newTodoText: '',
			todos: [
			{
				id: 1,
				title: 'Do the dishes',
			},
			{
				id: 2,
				title: 'Take out the trash',
			},
			{
				id: 3,
				title: 'Mow the lawn'
			}
			],
			nextTodoId: 4
				// end copy
		};
	
	},
	
	methods: {
		submit() {},
		handlerFunction(){

		},

		// start copy
		addNewTodo: function () {
		this.todos.push({
			id: this.nextTodoId++,
			title: this.newTodoText
		})
		this.newTodoText = ''
		}

		// end copy
	}
}
</script>

<style>
.listHeaader {
	color: #ff9800;
	font-size: 18px;
}
</style>
