// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//first-level routing
import home from './components/Home.vue'

import aboutme from './components/About_me.vue'

import experiences from './components/Experiences.vue'
import intern from './components/Internship.vue'
import news from './components/news/news.vue'
import one from './components/news/one'
import two from './components/news/two'
import three from './components/news/three'
import four from './components/news/four'
import five from './components/news/five'
import six from './components/news/six'

import interests from './components/Interests.vue'
import workout from './components/Workout.vue'
import film from './components/Film.vue'
import film1 from './components/erji/look1.vue'
import film2 from './components/erji/look2.vue'
import film3 from './components/erji/look3.vue'
import film4 from './components/erji/look4.vue'

import education from './components/Education.vue'
import buct from './components/BUCT.vue'
import bu from './components/BU.vue'



//second-level routing
// import login1 from './components/login/Login1.vue'
// import yanzhengma from './components/login/Yanzhengma.vue'
// import saoma from './components/login/saoma.vue'


//define routing
let router = new VueRouter({
	  routes:[
	  		{path:'*',component:home},
	  		{path:'/home',component:home},
	  		{path:'/experiences',component:experiences},
	  		{path:'/intern',component:intern},
	  		{path:'/education',component:education},
			{path:'/buct',component:buct},
			{path:'/bu',component:bu},
	  		{path:'/aboutme',component:aboutme},
			{path:'/interest',component:interests},
			{path:'/workout',component:workout},

			{path:'/film',component:film,children:[
				{path:'',component:film1},
				{path:'/erji/look1',component:film1},
				{path:'/erji/look2',component:film2},
				{path:'/erji/look3',component:film3},
				{path:'/erji/look4',component:film4},
			]},

			{path:'/news',component:news,children:[
				{path:'',component:one},
				{path:'/news/one',component:one},
				{path:'/news/two',component:two},
				{path:'/news/three',component:three},
				{path:'/news/four',component:four},
				{path:'/news/five',component:five},
				{path:'/news/six',component:six},
			]},
			
 		
	  		
	  ]
})
Vue.config.productionTip = false


router.afterEach((to,from,next)=>{
	window.scrollTo(0,0);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
