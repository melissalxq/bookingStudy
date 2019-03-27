import User from 'layouts/UserLayout'
import findTeachers from 'pages/FindTeachers'
import userLogin from 'src/pages/userLogin'
import Posts from 'src/pages/Posts'

// import Posts from 'pages/Posts'
const routes = [
	{
		//default loading page
		path: '/',
		component: () => import('layouts/HomeLayout.vue'),
		children: [
			// index Home page
			{ 
				path: '', 
				component: () => import('pages/Index.vue')
		 
			},
			{ 
				// user login/register
				path: '/user/login', 
				
				component: userLogin
		 
			},
			// register page
			{ 
				path: 'user/register', 
				component: () => import('pages/Register.vue')
		 
			},
		]

	},
	{
		//parent layout
		path: '/student',
		component: () => import('layouts/MyLayout.vue'),
		children: [
			//booking page
			{
				path:'booking',
				component: () => import('layouts/MyLayout.vue'),
				component:() => import('pages/booking.vue'),
			
			},
				//search teacher page
			{ 
				path:'searchTeachers',//here it is ,route/student/search testcher
				name:'FindTeachers',
				component:findTeachers,         //we reference /src/pages/FindTeachers.vue imported above 
			}

		]
	},

	{
		//teacher layout
		path: '/teacher',   
		// component: () => import('layouts/MyLayout.vue'),
		// we use /src/layouts/User component which is imported above
		component: User,
		
		children: [
			 
			//teacher profile page
			{ 
				path:'myprofileTeacher',//here it is ,route/user/profile 
				component:() => import('pages/teacherProfile.vue'),        //we reference /src/pages/teacherProfile.vue imported above 
			}
		]
	}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('pages/Error404.vue')
	})
}

export default routes
