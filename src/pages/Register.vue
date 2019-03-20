<template>
  <q-page  class="flex flex-center">
    <!-- content -->
    <div>
		<img alt="Chattykids logo" src="~assets/CK_CN.png" width="400" class="q-mb-lg">
      	<p class="signUp"> Sign Up</p>
	  		<q-input
			  	class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
				v-model="signUpform.firstName"
				placeholder="First Name"
				  	:before="[
					{
						icon:'account_circle'
					}
			]"></q-input>
			<q-input
				class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
				v-model="signUpform.lastName"	
				placeholder="Last Name" 
				:before="[
					{
						icon:'account_circle'
					}
				]">
			</q-input>
			<q-input  ref="email"
				class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
				v-model="signUpform.email"
				placeholder="email"
				@blur="checkEmail"
				@keyup.enter="checkEmail"
				:error="$v.signUpform.email.$error"
				:before="[
					{
						icon:'email'
					}
				]"
			></q-input>

			
			   			     
			<q-input ref="password"
				class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
				v-model="signUpform.password1"
				type="password"
				placeholder="password"
				:before="[
			{
				icon:'lock'
				
			}]"
			></q-input>
			<q-input 
				class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
				v-model="signUpform.password2"
				type="password"
				placeholder="password confirm"
				@blur="confirmPassword"
				@keyup.enter="confirmPassword"
				:before="[
			{
				icon:'lock'
				
			}]"
			></q-input>

			<q-btn  color="orange" @click="signUp" class="full-width">Sign Up</q-btn>
			<p></p>
			<!-- <p align="center">Already have a account?<a href="/Index" >Login</a></p> -->
		</div>
  </q-page>
</template>

<script>
import {required, email } from 'vuelidate/lib/validators'
import {QInput} from 'quasar'
import Vue from 'vue'
import VueRouter from 'vue-router'
import utils from 'src/common/utils.js'

export default {
  // name: 'signUp Page',
  	components:{
		QInput,
  },
  
  	data(){
		return {
			signUpform:{
				firstName:'',
				lastName:'',
				email:'',
				password1:'',
				password2:''
			},
			users:[
				{
					firstName:'',
					lastName:'',
					email:'',
					password:''
				}

			],
			lastCheckTime: 0
			
		}
	},
	validations:{
		signUpform:{
			email:{required,email}
			// password:{required}
		}
	},

	created() {
		utils.saveTable('users', this.users)
		this.users = utils.getTable('users')
		console.log(this.users, this.users)
	},
	
	methods:{

			// getTable(table) {
			// 	let rows = localStorage.getItem(table)
			// 	return rows ? JSON.parse(rows) : []
			// },
			// saveTable(table, rows) {
			// 	rows = rows || this[table]
			// 	localStorage.setItem(table, JSON.stringify(rows))
			// },

		//Check if the email already exist?
			checkEmail(){
				// make sure it does not run this function twice in a shor time
				let now = (new Date()).getTime()
				console.log(now, this.lastCheckTime, now - this.lastCheckTime)
				if (now - this.lastCheckTime < 500) {
					this.lastCheckTime = now
					return
				} 
				this.lastCheckTime = now
				// check signupform format
				this.$v.signUpform.email.$touch()
				if (this.$v.signUpform.$error) {
					this.$q.notify({
						timeout: 800,
					    message:'Please review fields again!',
					    color:'negative',
					})
					this.signUpform.email=""
					this.$refs.email.focus()
					return
				}
				
				for (let i=0; i<this.users.length;i++)
				{ 
					if (this.signUpform.email==this.users[i].email)
					{
						// if email exist, ask to reinput the email
						this.$q.notify({
							timeout: 1000,
					    	message:'your email alread registered before! Please try again',
							color:'negative',
						})
						//    focus on input email again
						this.$refs.email.focus()
					}
					else {
						// if username does not exist, auto fucus on next input
						this.$q.notify({
							timeout: 1000,
					    	message:'your email checked, please continue!',
					    	color:'positive',
						})
				
						this.$refs.password.focus()
					}	
				
				}
			},
		// check the 2nd password is same as 1st password
			confirmPassword(){
				// make sure it does not run this function twice in a shor time
				let now = (new Date()).getTime()
				console.log(now, this.lastCheckTime, now - this.lastCheckTime)
				if (now - this.lastCheckTime < 500) {
					this.lastCheckTime = now
					return
				} 
				this.lastCheckTime = now
				if (this.signUpform.password1==this.signUpform.password2)
					{
						// if two input are same, focus on submit button			
						// this.$refs.singUpSubmit.focus()
						return
					}
					else {
						// if two input are different, ask reinput
						this.$q.notify({
					    message:'your confirmed password is different,plase input again!',
					    color:'negative',
						})
						this.signUpform.password1=""
						this.signUpform.password2=""
						this.$refs.password.focus()
					}	

			},
			
		signUp(){
		
			this.$v.signUpform.$touch()
			
			if(this.$v.signUpform.$error) 
			{
				alert('Please review fields again.') 
			} 
			else 
			{
			//submit button funciton save all the fields to to database.
				var userfirstName=this.signUpform.firstName
				let record = {
				firstName: this.signUpform.firstName,
				lastName: this.signUpform.lastName,
				email:this.signUpform.email,
				password:this.signUpform.password2
				}
			this.users.push(record)
			utils.saveTable('users', this.users)
			// utils.saveTable('bookings',days)
			console.log(this.users)
			}
				
			// save successful or not
				this.$q.dialog({
					title:"Registion Confirm",
					message:'You are registered sucessfull! Please go to login page to login our system.',
					color:'positive',
					ok:true,
				})

						// after register, go xxx page
			
				this.$router.push('/user/login')
	 		}
	 
			
		}
	}


</script>

<style>
.signUp{
	color: #ff9800;
	font-size: 24px;
	text-align: center;
}
</style>
