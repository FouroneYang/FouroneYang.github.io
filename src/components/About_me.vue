<template>
	<div class="wrapper">
        <main class="person">
			<!--about me-->
			<div class="avator">
					<div class="avator1">
						<div class="avator_left">
							<h3>Shiyi Yang</h3>
							<h5>BU Student <span>& Software Engineer</span></h5>
							<p>Master student in BU with main focus on Software Engineering. Currently have hand-on experiences in Full
                                        Stack Development and Machine Learning. Actively seeking for full-time software engineer jobs in 2023.</p>
								<!-- <div > -->
							<ul class="ul2">
								<li class="linkedin">
									<b><a href="https://www.linkedin.com/in/shiyi-yang-5b1528232/">Linkedin</a></b> 
								</li>
								<li class="github"><b><a href="https://github.com/FouroneYang">Github</a></b> 
								</li>
								<li class="leetcode"><b><a href="https://leetcode.com/HarveyYang41/">Leetcode</a></b></li>
							</ul>
		
						</div>
						<div class="avator_right">
							<img src="../assets/home/Shiyi_Yang.jpg" alt="" />
						</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isleft1:false,
				iscolor:false,
				iscolor1:true,
				list:[
					{name:'Linkedin'},
					{name:'Github'},
					{name:'Leetcode'},
				],
			}
		},
	}
</script>

<style scoped>
	* {
		list-style: none;
		text-decoration: none;
	}
	.wrapper{
    display: grid;
    gap: 0px;
    grid-template-areas:
    "person";
}
@media (min-width: 500px){
    body{
        grid-template-columns: 1fr 3fr;
        grid-template-areas: 
        "person person";
    }
}
@media (min-width: 700px){
    body{
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-areas: 
        "person person person";
    }
}

.person{
	height: 900px;
	width: 100%;
    position: relative;
	background-image: url(../assets/home/bg6.jpg);
	background-size: cover;
	background-position: center;
    background-attachment: fixed;
    background-repeat: repeat-y;
}

	/*avator*/
	.avator {
		width: 100%;
		height: 600px;
		margin-top: 200px;
	}
	.avator1 {
		width: 1181px;
		height: 551px;
		margin: 0 auto;
		background: url(../assets/home/bg1.png) no-repeat;
	}
	.avator .a {
		margin-top: 12px;
		text-decoration: none;
	}
	.avator_left {
		width: 710px;
		height: 371px;
		float: left;
	}
	.avator_left h3{
		width: 710px;
		height: 41px;
		font-size: 40px;
		color: #000;
		font-weight: bold;
		padding-left: 32%;
		padding-top: 10%;
		font-family:sans-serif;
	}
	.avator_left h5{
		color: black;
	letter-spacing: 2px;
	font-size: 24px;
	margin-bottom: 25px;
	text-transform: capitalize;
		padding-left: 18%;
		padding-top: 5%;
		font-style:oblique;
	}
	
	span{
	color: #E96809;
}
.avator_left a{
	display: inline-block;
	text-align: center;
	background-color:#1b71e9;
	color: white;
	text-decoration: none;
	border: 2px solid transparent;
	font-weight: bold;
	padding: 0px 20px;
	border-radius: 30px;
	transition: transform .4s; 
	font-size: 20px;
	margin-left: 10%;
	
}

.avator_left a:hover{
	transform: scale(1.2);
}

.linkedin a{
	display: inline-block;
	text-align: center;
	background-color:#1b71e9;
	color: white;
	text-decoration: none;
	border: 2px solid transparent;
	font-weight: bold;
	padding: 0px 20px;
	border-radius: 30px;
	transition: transform .4s; 
	font-size: 20px;
	margin-left: 10%;
	
}

.linkedin a:hover{
	transform: scale(1.2);
}

.github a{
	display: inline-block;
	text-align: center;
	background-color:#9c9d9d;
	color: white;
	text-decoration: none;
	border: 2px solid transparent;
	font-weight: bold;
	padding: 0px 20px;
	border-radius: 30px;
	transition: transform .4s; 
	font-size: 20px;
	margin-left: 10%;
	
}

.github a:hover{
	transform: scale(1.2);
}

.leetcode a{
	display: inline-block;
	text-align: center;
	background-color:#f77c0a;
	color: white;
	text-decoration: none;
	border: 2px solid transparent;
	font-weight: bold;
	padding: 0px 20px;
	border-radius: 30px;
	transition: transform .4s; 
	font-size: 20px;
	margin-left: 10%;
	
}

.leetcode a:hover{
	transform: scale(1.2);
}
	.avator_left p{
		width: 530px;
		height: 180px;
		font-size: 18px;
		color: #666;
		padding-left: 10%;
		line-height: 30px;
		font-style: italic;
	}


	.ul2 {
		width: 710px;
		height: 110px;
	}
	.ul2 li {
		width: 142px;
		height: 110px;
		float: left;
		margin-right: 69px;
	}
	.ul2 li a {
		display: inline-block;
		width: 142px;
		height: 64px;
		font-size: 27px;
		color: white;
		line-height: 64px;
		font-weight: bold;
		text-align: center;
	}
	.ul2 li span {
		display: inline-block;
		width: 142px;
		height: 16px;
		font-size: 14px;
		color: #666;
		line-height: 16px;
		text-align: center;
	}
	.avator_left h4{
		width: 710px;
		height: 60px;
		font-weight: normal;
	}

	.avator_right {
		width: 467px;
		height: 630px;
		float: left;
	}
	.avator_right img{
		width: 470px;
		height: 470px;
		margin-top: 25px;
		margin-left: -35px;
	}

</style>