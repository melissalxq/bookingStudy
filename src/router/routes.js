import User from 'layouts/User'
import Profile from 'pages/Profile'
import Posts from 'pages/Posts'

// import Posts from 'pages/Posts'
const routes = [
	{
		//default loading page
		path: '/',
		component: () => import('layouts/MyLayout.vue'),
		children: [
			// index page
			{ 
				path: '', 
				component: () => import('pages/Index.vue')
		 
			},
			//booking page
			{
				path:'booking',
				component:() => import('pages/booking.vue'),
			
			}
		]
	},

	{
			path: '/teacher',   
		// we use /src/layouts/User component which is imported above
		component: User,
		

		children: [
			 
			//profile page
			{ 
				path:'profile',//here it is ,route/user/profile 
				name:'profile',
				component:Profile,         //we reference /src/pages/Profile.vue imported above 
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
