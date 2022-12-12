<template>
	
		<div class="wrapper">
			<main>
            <header class="main-head">
		<div class="banner">
			<img src="../assets/education/bu_bg1.jpg" style="height: fit-content;">
			<h3>Learning, Virtue, Piety</h3>
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
					<router-link to="#">Master</router-link>
				
				</li>
			</ul>
			<!--brief of BU-->
			<div class="brief">
				<h1>Boston University</h1>
				<div class="brief-box1">
					<img src="../assets/education/bu_logo1.png" alt="">
				</div>
				<p class="p1"><b><a href="https://www.bu.edu">Boston University (BU) </a></b> is a private research university in Boston, Massachusetts. The university is nonsectarian, but has a historical affiliation with the United Methodist Church. It was founded in 1839 by Methodists with its original campus in Newbury, Vermont, before moving to Boston in 1867.</p>
				<p class="p2">The university now has more than 4,000 faculty members and nearly 34,000 students, and is one of Boston's largest employers. It offers bachelor's degrees, master's degrees, doctorates, and medical, dental, business, and law degrees through 17 schools and colleges on three urban campuses. The main campus is situated along the Charles River in Boston's Fenway-Kenmore and Allston neighborhoods, while the Boston University Medical Campus is located in Boston's South End neighborhood. The Fenway campus houses the Wheelock College of Education and Human Development, formerly Wheelock College, which merged with BU in 2018.</p>
				<div class="video-box">
					<video controls>
                        <source src="../assets/education/Welcome_to_BU.mp4" type="video/mp4">
                    </video>
				</div>
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
		height: 1600px;
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
	.brief .p1 {
		width: 1200px;
		height: 54px;
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

.video-box video {
    width: 80%;
    height: 60%;
    position: relative;
    top: 0;
    left: 0;
}
	.brief-box2 {
		width: 500px;
		height: 500px;
		margin: 120px auto;
		position: relative;
		
	}
	.brief-box2 img{
		width: 1000px;
		height: 270px;
	}
	
</style>