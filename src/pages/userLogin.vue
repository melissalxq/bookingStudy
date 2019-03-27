<template>
	<q-page class="flex flex-center">
		<div align="left">
			<img alt="Chattykids logo" src="~assets/CK_CN.png" width="400" class="q-mb-lg">
			<q-input
				class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
				ref="email"
				v-model="form.email"
				placeholder="User Name"
				@blur="$v.form.email.$touch"
				@keyup.enter="submit"
				:error="$v.form.email.$error"
				:before="[
			{
				icon:'account_circle'
			}
			]"
			></q-input>
			<q-input
				class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
				v-model="form.password"
				type="password"
				placeholder="password"
				:before="[
			{
				icon:'lock'
				
			}]"
			></q-input>

			<q-btn color="orange" @click="submit" class="full-width">Login</q-btn>
			<p></p>
			<p align="center">No account?<a href="/#/user/Register" >Register</a></p>
		</div>
		<q-modal v-model="opened" minimized >
			<q-modal-layout>
				<q-toolbar   color="red" slot="header" >
					<q-btn
						flat
						round
						dense
						v-close-overlay
						icon="warning"
						
					/>
					<q-toolbar-title>
						Alert
					</q-toolbar-title>
				</q-toolbar>
				
				<div class="alertModal">
					<p>Your username and password do not match our system, please review it!</p>
						<q-btn class="float-right alertButton"
							color="negative"
							v-close-overlay
							label="Close"
							@click="closeButton"
						/>
				</div>
			</q-modal-layout>
 		 </q-modal>
	</q-page>
</template>

<style scoped>
	.alertModal{
		padding:20px;
	}
	.alertButton{
		margin:20px;
	}

</style>


<script>
import {required, email } from 'vuelidate/lib/validators'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import utils from 'src/common/utils.js'
import {QInput} from 'quasar'

export default {
	name: 'userLogin',
	components:{
		QInput,
	},

	data(){
		return {
			form:{
				email:'1@test.com',
				password:'1'
			},
			users: [],
			opened: false
		}
	},
	validations:{
		form:{
			email:{required,email}
			// password:{required}
		}
	},

	created() {
		//utils.saveTable('users', this.users) 
		this.users = utils.getTable('users') 
		console.log(this.users, this.users)
	},

	methods:{
		submit(){
			
			this.$v.form.$touch()
			
			if(this.$v.form.$error) 
			{
				alert('Please review fields again.') 
			} 
			else 
			{
				//check the useranme in the database
	
				for (let i=0; i<this.users.length;i++){
						console.log(this.users[i].email)
					if(this.users[i].email==this.form.email && this.users[i].password==this.form.password){
						//if the username and password match the databse
						this.$q.notify({
							message:'you are logined',
							color:'positive',
						})
						//go to the Find teacher page
						this.$router.push({ name: 'FindTeachers' })
						return
					}
				}
				// username and password does not match the database
				this.opened=true
				
				return
			}
		},

		closeButton(){
			this.opened=false;
			this.form.email=""
			this.$refs.email.focus()
			this.form.password=""
		}
	}
}


</script>
