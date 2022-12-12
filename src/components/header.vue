<template>
	<div>
		<div class="header" v-bind:class="top1?'aa':'bb'">
			<!--Center-->
			<div class="center">
				<div class="center-left" >
					<div class="logo">
							<h4 class="biography" v-bind:class="top2?'cc':'dd'">Shiyi Yang's <span>Biography</span></h4>
					</div>
				</div>
				<div class="center-right">
					<ul>
						
						<li  v-bind:class="top1?'ee':'ff'">
							<router-link to="/home" v-bind:class="top3?'color':''">Home</router-link>
						</li>
						<li v-bind:class="top1?'ee':'ff'">
							<router-link to="/aboutme" v-bind:class="top3?'color':''">About Me</router-link>
						</li>
						<li v-bind:class="top1?'ee':'ff'">
							<router-link to="/experiences" v-bind:class="top3?'color':''">Experiences</router-link>
							<ul class="box box1">
								<li>
									<router-link to="/intern" class="a1">Internships</router-link>
								</li>
								<li>
									<router-link to="/news" class="a1">Projects</router-link>
								</li>
							</ul>
						</li>
						<li v-bind:class="top1?'ee':'ff'">
							<router-link to="/interest" v-bind:class="top3?'color':''">My Interests</router-link>
							<ul class="box box1">
								<li>
									<router-link to="/workout" class="a1">Workout</router-link>
								</li>
								<li>
									<router-link to="/film" class="a1">Films</router-link>
								</li>
							</ul>
						</li>
						 
						<li v-bind:class="top1?'ee':'ff'">
							
							<router-link to="/education" v-bind:class="top3?'color':''">Education</router-link>
							<ul class="box box1">
								<li>
									<router-link to="/bu" class="a1">Master</router-link>
								</li>
								<li>
									<router-link to="/buct" class="a1">Bachelor</router-link>
								</li>
							</ul>
						
						</li>
						<!-- <li v-bind:class="top1?'ee':'ff'">
							
							<router-link to="/login" v-bind:class="top3?'color':''">Login/router-link>
						</li> -->
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				top1:false,
				top2:false,
				top3:false,
				scroll:"",
			}
		},
		mounted () {
           		 window.addEventListener('scroll', this.handleScroll,true);  
            	 // monitoring(binding) to the scrolling events
        },
		methods:{
			
        	handleScroll(){
            // page scroll distance from top
	            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	            // console.log(scrollTop);
	            var scroll = scrollTop - this.i;
//	            console.log(scroll);
	            this.i = scrollTop;
	            if(scroll>0){
//	            alert(1);
	               this.top1=true;
	               this.top2=true;
	               this.top3=true;
	            }else {
	            	this.top1=false;
	               	this.top2=false;
	               	this.top3=false;
	            	}
	        	},
	        },

	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
		font-style: italic;
	}
	.header {
		width: 100%;
		/*height: 100px;*/
		/*background: white;*/
		border-bottom: 1px solid #ccc;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		box-sizing: border-box;
		transition: height .3s linear;
	}
	.center {
		width: 100%;
		height: auto;
		margin: 0 auto;
		position: relative;
	}
	/*logo*/
	.center-left {
		width: 400px;
		height: auto;
		float: left;
		
	}
	.logo {
		width: 400px;
		height: auto;
		float: left;
		transition: height .3s linear;
	}
	.logo a {
		display: block;
		width: 450px;
		height: auto;
		overflow: hidden;
	}
	.logo  img {
		display: block;
		/*width: 100%;
		height: 54px;*/
		margin: 10px 0;
		/*transition: all .6s linear;*/
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 0;
		transition: all .3s linear;
	}

	.biography{
	color: rgb(255, 255, 255);
	font-size: 28px;
	letter-spacing: 1px;
	cursor: pointer;
	}
	span{
		color: #E96809;
	}

	/*Navigation Bar*/
	.center-right {
		width: 700px;
		height: auto;
		float: right;
		/*position: relative;*/
	}
	.center-right ul li {
		list-style: none;
		float: left;
		/*text-align: center;*/
		/*vertical-align: middle;*/
		margin-right: 33px;
		cursor: pointer;
		position: relative;
		/*background: red;*/
		transition: all .3s linear;
		/*margin-top: 10px;*/
	}
	.center-right ul li:last-of-type {
		margin-right: 0;
	}
	.center-right ul li a:hover {
		color: #e96809;
		font-weight: 900;
		border-bottom: 2px solid #e96809;
	}
	.center-right ul li a {
		display: block;
		font-size: 18px;
		color:#E96809;
		font-weight: 600;
		text-decoration: none;
		/*background: red;*/
	}
	.aa {
		height: 60px;
		line-height: 60px;
		background: #272936;
		border-bottom: 0;
	}
	.ee {
		height: 58px;
		line-height: 58px;
		font-weight: 700;
	}
	.cc {
		width: 400px;
		height: 44px;
		line-height: 54px;
	}
	.bb {
		height: 99px;
		line-height: 99px;
	}
	.ff {
		height: 98px;
		line-height: 98px;
	}
	.dd {
		width: 400px;
		height: 54px;
		line-height: 84px;
		margin-left: 25px;
	}
	.color {
		color: #E96809 !important;
		font-weight: 600;
	}
	
	
	/*drag down*/
	.box {
		width: 125px;
		height: 150px;
		background: rgba(0,0,0,.6);
		display: none;
	}
	.box li {
		width: 125px;
		height: 50px;
	}
	.box li .a {
		display: block;
		width: 125px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 14px;
		color: white;
		font-weight: 300;
		margin-top: 2px;
	}
	.box li .a:hover {
		color: #E96809;
		border-bottom: 0;
	}
	
	.center-right ul li:hover .box {
		display: block;
	}
	.box1 {
		width: 90px;
		height: 110px;
	}
	.box1 li {
		width: 90px;
		height: 50px;
	}
	.box1 li .a1 {
		display: block;
		width: 90px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 14px;
		color: white;
		font-weight: 300;
		margin-top: 2px;
	}
	.box li .a1:hover {
		color: #E96809;
		border-bottom: 0;
	}
	
	.center-right ul li:hover .box {
		display: block;
	}
</style>