<template>
	
	<div class="wrapper">
		<main>
		<header class="main-head">
	<div class="banner">
		<img src="../assets/education/buct_bg1.jpg" style="height: fit-content;">
		<h3>宏德博学 化育天工</h3>
	</div>
	
	<div class="main">
		<ul class="count">
			<li>Location:</li>
			<li>
				<router-link to="/home">Biography</router-link>
				<em>></em>
			</li>
			<li>
				<router-link to="/education">Education</router-link>
				<em>></em>
			</li>
			<li>
				<router-link to="#">Bachelor</router-link>
			
			</li>
		</ul>
		<!--brief of BUCT-->
		<div class="brief">
			<h1>Beijing University of Chemical Technology</h1>
			<div class="brief-box1">
				<img src="../assets/education/buct_logo1.png" alt="">
			</div>
			<p class="p1"><b><a href="https://www.buct.edu.cn/">Beijing University of Chemical Technology (BUCT) </a></b> was founded in 1958, formerly known as Beijing Institute of Chemical Technology, under the former Ministry of China Chemical Industry. In 1971, Beijing Chemical Fiber Engineering Institute was merged. In 1978, Beijing Institute of Chemical Fiber Engineering was restored with the approval of the China State Council, and was officially separated in February of the following year. In 1994, it was renamed Beijing University of Chemical Technology. In 1996, Beijing Chemical Management Cadre College was merged. In 1998, it was transferred to the direct management of the China Ministry of Education.</p>
			<p class="p2">In 1960, the school was identified as a national key university; in 1996, it was identified as a China national "211 Project" key construction university; in 2008, it was identified as a national "985 Project Advantage Discipline Innovation Platform" construction university; in 2017, it was selected as a national "double First-class" construction of colleges and universities.</p>
			<h2>College of Chemical Engineering</h2>
			<div class="brief-box2">
				<img src="../assets/education/buct_bg2.jpg" alt="">
			</div>
			<p class="p1"><b><a href="https://chem.buct.edu.cn/">The College of Chemical Engineering </a></b> is one of the core colleges of Beijing University of Chemical Technology. Its predecessor covers basic organic synthesis and inorganic chemical engineering. It was founded in 1958 and created simultaneously with the school. The School of Chemical Engineering is adhering to the college spirit of "hard work, truth-seeking and innovation, teamwork, and daring to be the first", with the guiding ideology of "talent training is the foundation, discipline construction is the leader, system innovation is the key, and team strengthening is the guarantee". The construction of "System Innovation Project", "Innovative Talent Project" and "Ankang Project" is an initiative, striving to become an internationally renowned chemical engineering college.</p>
				</div>

		
	</div>
		</header>
	</main>
	</div>
</template>

<style scoped="scoped">

.wrapper{
display: grid;
gap: 0px;
grid-template-areas:
"banner"
"main"
"brief";
}
@media (min-width: 500px){
body{
	grid-template-columns: 1fr 3fr;
	grid-template-areas: 
	"banner banner"
	"main main"
	"brief brief-box1"
	"brief video-box";
}
}
@media (min-width: 700px){
body{
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-areas: 
	"banner banner banner"
	"main main main"
	"brief brief-box1 brief-box1"
	"brief video-box video-box";
}
}

.main-head {
grid-area: header;
}
.banner {
	width: 100%;
	height: 900px;
	position: relative;
}
.banner img {
	width: 100%;
	height: 450px;
}
.banner h3 {
	width: 100%;
	height: 43px;
	line-height: 43px;
	text-align: center;
	font-size: 60px;
	color: #ffffff;
	margin-bottom: 28px;
	position: absolute;
	top: 75%;
	margin-top: -21.5px;
	font-style: italic;
}
.banner p {
	width: 100%;
	height: 28px;
	text-align: center;
	font-size: 14px;
	line-height: 28px;
	color: #ffffff;
	position: absolute;
	bottom: 130px;
}

.main {
	width: 100%;
	height: 1800px;
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
/*brief*/
.brief {
	width: 1200px;
	height: 1500px;
	margin: 50px auto;
}
.brief h1 {
	width: 1200px;
	height: 40px;
	font-size: 36px;
	line-height: 40px;
	color: #1c1e2b;
	text-align: center;
	margin-bottom: 20px;
	font-weight: bold;
	/* background: red; */
}
.brief h2 {
	width: 1200px;
	height: 40px;
	font-size: 36px;
	line-height: 40px;
	color: #1c1e2b;
	text-align: center;
	margin-top: 100px;
	margin-bottom: 20px;
	font-weight: bold;
	/* background: red; */
}
.brief .p1 {
	width: 1200px;
	height: 144px;
	/*margin: 50px 0 12px;*/
	font-size: 18px;
	line-height: 30px;
	color: #41424a;
	text-indent: 2em;
}
.brief .p2 {
	width: 1200px;
	height: 54px;
	margin-top: 10px;
	font-size: 18px;
	line-height: 30px;
	color: #41424a;
	text-indent: 2em;
}

.brief-box1 {
	width: 270px;
	height: 270px;
	margin: 80px auto;
	position: relative;
	
}
.brief-box1 img{
	width: 270px;
	height: 270px;
}

.video-box {
margin-top: 50px;
padding: 110px;
width: 100% ;
position:relative;
}

.brief-box2 {
	width: 500px;
	height: 400px;
	margin: 80px auto;
	position: relative;
	
}
.brief-box2 img{
	width: 500px;
	height: 400px;
}


</style>