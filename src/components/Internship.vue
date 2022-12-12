<template>
	
	<div class="wrapper">
		<main>
		<div class="banner">
			<!-- <img src="../assets/experiences/experiences_bg2.jpg" style="height: fit-content;"> -->
		</div>
		<div class="main">
		<ul class="count">
				<li>Location:</li>
				<li>
					<router-link to="/home">Biography</router-link>
					<em>></em>
				</li>
				<li>
					<router-link to="/experiences">Experiences</router-link>
					<em>></em>
				</li>
				<li>
					<router-link to="#">Internships</router-link>
				
				</li>
			</ul>
		</div>
        <div class="person">
            <!-- <header class="main-head"> -->
			<div class="example">
				<div class="example1">
						<h3>Software Engineer Intern</h3>
						<a href="https://www.empathie.care"><h5>🔗Empathie Health🔗</h5></a>
						<p> 
                        As a member of software engineer group in Empathie Health, build front-end pages for Empathie App.
                        The App is able to allow users check daily recommendation from Empathie Health and consult a therapist online.
                        Videos and audios are available on the App to provide users with a better experience.
                        Also, by submitting daily mood check-in data to Empathie, the user will receive suitable advice about mental health.
                    </p>
					<h4>👇🏻Read More!</h4>
					</div>
				<ul class="ul1">
				
						<li v-for="(a) in list" :key="a">
							<div class="mask1">
							</div>
							<img v-bind:src="a.src"/>
							<span>
								<img v-bind:src="a.src1" class="img2"/>
								<p class="p3">{{a.name}}</p>
								<div class="line1">
								</div>
								<!-- <img v-bind:src="a.src" class="img2"/> -->
							</span>
						</li>
				</ul>
			</div>
		<!-- </header> -->
        </div>
	</main>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				list:[
		        	{src:"./static/login.png",src1:"./static/tu5.png",name:"Login"},
		        	{src:"./static/home.png",src1:"./static/tu5.png",name:"Home"},
		        	{src:"./static/audio.png",src1:"./static/tu5.png",name:"Audio"},
		        	{src:"./static/video.png",src1:"./static/tu5.png",name:"Video"},
		        	{src:"./static/activity.png",src1:"./static/tu5.png",name:"Activity"},
		        ],
			}
		}
	} 
</script>

<style scoped="scoped">
	* {
		padding: 0;
		margin: 0;
		text-decoration: none;
		font-family: 'Arial', sans-serif;
    	box-sizing: border-box;
	}
	
	.main {
		width: 100%;
		height: 3300px;
	}

	.wrapper{
    display: grid;
    gap: 0px;
    grid-template-areas:
    "banner";
}
@media (min-width: 500px){
    body{
        grid-template-columns: 1fr 3fr;
        grid-template-areas: 
        "banner banner";
    }
}
@media (min-width: 700px){
    body{
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-areas: 
        "person person person";
    }
}
.banner {
		width: 100%;
		height: 850px;
		position: relative;
		background-image: url(../assets/experiences/experiences_bg3.jpg);
		background-size: cover;
	background-position: center;
    background-attachment: fixed;
    background-repeat: repeat-y;
	}


.main {
		width: 100%;
		height: 100px;
		overflow: hidden;
	}
	.count {
		width: 1200px;
		height: 20px;
		/*background: red;*/
		margin: 50px auto;
	}
	.count li {
		width: 100px;
		height: 20px;
		float: left;
		font-size: 14px;
		color: #9697a2;	
		text-align: center;
	}
	.count li a {
		display:block;
		width: 80px;
		height: 20px;
		line-height: 20px;
		font-size: 14px;
		color: #9697a2;	
		text-decoration: none;
		/*background: green;*/
		float: left;
	}
	.count li em {
		display: block;
		width: 10px;
		height: 20px;
		line-height: 20px;
		font-size: 14px;
		color: #9697a2;
		float: right;
		margin-right: 5px;
	}

/* examples */
.example {
		width: 100%;
		height: 1000px;
		margin-top: 30px;
	}
	.example1 {
		width: 1180px;
		height: 251px;
		margin: 0 auto;
		/* background: url(../assets/home/bg1.png) no-repeat; */
	}
	.example1 h3 {
		width: 1180px;
		height: 41px;
		font-size: 36px;
	  padding: 0px 0px 30px;
	  color: black;
	  font-weight: bold;
	  text-align: center;
	  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}

	.example1 h4 {
		width: 1180px;
		height: 41px;
		font-size: 30px;
	  padding: 100px 0 30px;
	  /* margin-top: 30px; */
	  color: rgb(9, 214, 112);
	  /* font-weight: bold; */
	  text-align: center;
	font-style: italic;	
}

	.example1 h5 {
		width: 1180px;
		height: 41px;
		font-size: 26px;
	  padding: 20px 0 30px;
	  /* margin-top: 30px; */
	  color: rgb(9, 214, 112);
	  /* font-weight: bold; */
	  text-align: center;
	font-style: italic;	
}

	.example1 p {
		width: 1180px;
		height: 30px;
		font-size: 18px;
		color: #666;
		padding-top: 20px;
		padding-left: 0%;
		line-height: 30px;
		font-style: italic;
	}

	
	.ul1 {
		width: 100%;
		height: 583px;
	}
	.ul1 li {
		width: 16.666%;
		padding: 2% 0 0;
		float: left;
		overflow: visible;
		position: relative;
		transition: .6s;
		margin: 22px;
		;
	}
	.ul1 .p1 {
		display: none;
	  position: absolute;
	  top: 55%;
	  left: 0;
	  width: 180px;
	  height: 100px;
	  color: #fff;
	  z-index: 3;
	  box-sizing: border-box;
	  font-size: 12px;
	  color: #fff;
	  margin-left: -40px;
	  margin-top: 80px;
	 	/*background: red;*/
	 	padding-top: 30px;
	}
	.mask1{
		transition: .5s;
		/*content: "";*/
	  z-index: 6;
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  display: block;
	  background: #E96809;
	  opacity: 1;	    
	}
	.ul1 li:hover .mask1 {
		overflow: hidden;
		bottom: -100%;
		opacity: 0;
	}
	.ul1 li:hover .p1 {
		display: block;
		opacity: 0;
	}

	.ul1 li .img2 {
		height: 100px;
		margin-top: 0px;
		opacity: 1;
	}
	.ul1 li:hover .img2 {
		margin-top: -50px;
		opacity: 0;
	}
	.ul1 li:hover .p3 {
		margin-top: -6px;
		opacity: 0;
	}

	.ul1 li:hover .line1 {
		opacity: 0;
	}
	.ul1 span {
		display: inline-block;
		width: 100px;
		height: 140px;
		margin: -110px 0 0 -50px;
		text-align: center;
		position: absolute;
		  top: 50%;
		  left: 50%;
		  z-index: 8;
	    
	}
	.ul1 img {
		width: 100%;
		transition: all .6s linear;
	}
	.ul1 span p {
		color: #fff;
		font-size: 28px;
		transition: all .6s linear;
	}
	.line1 {
		width: 20px;
		height: 3px;
		background: #fff;
		margin: 16px 34px -10px;
		z-index: 8;
	}
	
	
	
</style>