<template>
  <q-page padding>
    <!-- content -->
    <h4>ChattyKids Tutors</h4>
	  <q-search
	        autofocus
			v-model="searchString"
			placeholder="Search your favourite teacher"
			icon="search"
			class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
			
		/>
		<!-- search bar is empty -->

      	<q-list  highlight v-for="n in filterTeachers" :key="n.name" >
			<q-item >
				<q-item-side>
					<q-item-tile >
						<img :src="n.img" style="width:50px" class="avatar">
					</q-item-tile>
				</q-item-side>

				<q-item-main > 
				    <q-item-tile label>{{n.name}}</q-item-tile>
                		<q-item-tile label>{{n.discri}}</q-item-tile>
                		<q-item-side right>
							<span class="text-amber">
								<q-item-tile icon="star" v-for="x in n.stars" :key="x" /> 
							</span>
						</q-item-side>
                </q-item-main>
					<q-item-side right>
					<q-btn flat round dense icon="more_vert">
						<q-popover>
							<q-list link>
								<q-item v-close-overlay>
									<q-item-main label="Booking" />
								</q-item>
								<q-item v-close-overlay>
									<q-item-main label="View" />
								</q-item>
								<q-item v-close-overlay>
									<q-item-main label="Like" />
								</q-item>
							</q-list>
						</q-popover>
					</q-btn>
				</q-item-side>
			</q-item>
		</q-list>



  </q-page>
</template>

<script>
import Vue from 'vue'

export default {
  // name: 'TeacherProfile',

	data() {
		return {
			searchString:'',
			filterTeachers: []
		}
	},

	created() {
			// this.saveTable('teachers', this.teachers)
			this.teachers = this.getTable('teachers')
			this.filterTeachers = this.teachers
	},

  	
	watch: {
		searchString(value) {
			value = value.toLowerCase()
			// this.filterTeachers = teachers.filter(teacher => teacher.name.indexOf(value) >= 0)
			this.filterTeachers = this.teachers.filter(function(teacher) { 
				return (teacher.name + ' ' + teacher.discri).toLowerCase().indexOf(value) >= 0 
			})
		}
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

	
	
  }

  
}

</script>


	

<style>
</style>
