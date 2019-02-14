<template>
	<q-page padding>
		<q-list>
			<q-list-header class="listHeaader">Book a session</q-list-header>
	
			<q-item>
				<q-item-side icon="account_circle"/>
				<!-- dropdown way -->
				<q-item-main>
				<q-btn-dropdown  class="bg-amber-2 q-mb-sm q-pa-sm round-borders full-width" :label="TeacherName">
					<q-list highlight >
						<q-item v-for="n in teachers" :key="n.name" v-close-overlay @click.native="handlerFunction(n.name)">
							<q-item-side>
								<q-item-tile avatar>
									<img :src="n.img" >
									<!-- <img src='~assets/CONFUSEDbaby.jpg' width="50"> -->
								</q-item-tile>
							</q-item-side>
							<q-item-main>{{n.name}}</q-item-main>
						</q-item>
					</q-list>
				</q-btn-dropdown>
				</q-item-main>
				<!-- dropdown way end -->
				<!-- <q-item-main>
				<q-select 
					v-model="TeacherName"
					float-label="Select your teachers"
					:options="teachers"
					class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
					/>
				</q-item-main> -->
			</q-item>

			<q-item>
				<q-item-side icon="event"/>
				<q-item-main>
					<q-datetime
						v-model="day"
						type="date"
						:min="fromDate"
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
						v-model="time"
						type="time"
						float-label="Time"
						color="orange"
						min="2019-02-13T15:00:00.000+11:00"
						class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
					/>
				</q-item-main>
			</q-item>
		</q-list>
		<q-btn color="orange" @click="confirmBooking" class="full-width">confirm</q-btn>
		<!-- <div>{{TeacherName}}</div> -->
	</q-page>
</template>

<script>
//start copy
import Vue from 'vue'
import { Dialog } from 'quasar'
// (Promise) Dialog.create(configObj)

import {date} from 'quasar'

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
			TeacherName:'Select the teacher',
			teachers: [],
			fromDate: null,
			day:null,
			time: null,	
			bookings:[],	
			teachers: [
				{
					id:0,
					name: 'Kristy',
					value: 'Kristy',
					stars: 3,
					discri: 'The world in which we live is full of wonderful places that most of us do not know they really exist. Here you can see some of those breathtaking places around the world. Enjoy!',
					img: 'statics/CONFUSEDbaby.jpg',
					},
				{ 
					id:1,
					name: 'Bella',
					value:'Bella',
					stars: 2,
					discri: 'The world in which we live is full of wonderful places that most of us do not know they really exist. Here you can see some of those breathtaking places around the world. Enjoy!',
					img: 'statics/CONFUSEDbaby.jpg',
					},
				{ 
					id:2,
					name: 'Anna',
					value:'Anna',
					stars: 5,
					discri: 'The world in which we live is full of wonderful places that most of us do not know they really exist. Here you can see some of those breathtaking places around the world. Enjoy!',
					img: 'statics/CONFUSEDbaby.jpg',
				}
				],

				
			
		};
	
	},

	created() {
		this.saveTable('teachers', this.teachers)
		this.teachers = this.getTable('teachers')
		this.bookings = this.getTable('bookings')
		this.fromDate = this.getFromDate()
		console.log(this.teachers, this.bookings)
	},
	
	methods: {
		getTable(table) {
			let rows = localStorage.getItem(table)
			return rows ? JSON.parse(rows) : []
		},
		saveTable(table, rows) {
			rows = rows || this[table]
			localStorage.setItem(table, JSON.stringify(rows))
		},

		getFromDate() {
			var from = new Date();
			from.setDate(from.getDate()+1);
			return from
		},

		handlerFunction(name){
			this.TeacherName = name

		},

		confirmBooking() {
		if (this.TeacherName =='Select the teacher'){
				this.$q.dialog({
				title:'Alert',
				message:'Please select the teacher!'
			})
		} else if (this.day == null ){
			this.$q.dialog({
				title:'Alert',
				message:'Please select the day!'
			})
		}else if(this.time == null){
			this.$q.dialog({
				title:'Alert',
				message:'Please select the time'
			})
		} else
		{
			let record = {
				teacherName: this.TeacherName,
				day: date.formatDate(this.day,'YYYY-MM-DD-dddd'),
				// day: this.day,
				time:date.formatDate(this.time,'HH-mm')
				// time: this.time
			}
			this.bookings.push(record)
			this.saveTable('bookings')
			// this.saveTable('bookings',days)
			console.log(this.bookings)
			
			}
			
		},
	 	// teacherChange(selectedTeacher){
		// 	console.log('teacherChange',selectedTeacher)
		// 	let teacherName=selectedTeacher
		// 	return teacherName
			
		// },

		// start copy
		addNewTodo: function () {
		this.todos.push({
			id: this.nextTodoId++,
			title: this.newTodoText
		})
		console.log(this.newTodoText);
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
