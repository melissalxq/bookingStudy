<template>
	<q-page class="flex flex-center">
		<div align="left">
			<img alt="Chattykids logo" src="~assets/CK_CN.png" width="400" class="q-mb-lg">
			<q-input
				class="bg-amber-2 q-mb-sm q-pa-sm round-borders"
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
			<p align="center">No account?<a href="/#/Register" >Register</a></p>
		</div>
	
	</q-page>
</template>

<style>
</style>


<script>
import {required, email } from 'vuelidate/lib/validators'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {QInput} from 'quasar';
export default {
	name: 'PageIndex',
	components:{
		QInput,
	},

	data(){
		return {
			form:{
				email:''
			//   password:''
			}
			
		}
	},
	validations:{
		form:{
			email:{required,email}
			// password:{required}
		}
	},


	methods:{
		submit(){
			console.log(this.form.email)
			this.$v.form.$touch()
			
			if(this.$v.form.$error) 
			{
				alert('Please review fields again.') 
			} 
			else 
			{
			 
				this.$q.notify({
					message:'you are logined',
					color:'positive',
		 
				})
			this.$router.push({ name: 'profile' })
	 
			}
	 
			
		}
	}
}

</script>
