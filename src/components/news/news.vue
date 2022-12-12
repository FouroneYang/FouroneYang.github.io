<template>
	<div id="new">
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
					<router-link to="#">Projects</router-link>
				
				</li>
			</ul>
		</div>
		
		
		<div class="new">
			<router-view></router-view>
		</div>
	
	</div>
</template>

<script>
	export default {
	  
}
</script>

<style scoped>
	
	.new .sp1 {
		display: block;
		color: #fff;
		font-size: 36px;
		margin-top: 0.5em;
		line-height: 1;
	}
	.new b {
		display: block;
	    height: 2px;
	    width: 5%;
	    background: #fff;
	    margin: 1em 0;
	    font-weight: 400;
	}
	.new strong {
		display: block;
	    font-size: 21px;
	    color: #fff;
	    margin-bottom: 0.5em;
	    line-height: 1;
	    font-weight: normal;
	}
	
	
	.new {
		width: 100%;
		margin: 0 auto;
	}
	
	.banner {
		width: 100%;
		height: 850px;
		position: relative;
		background-image: url(../../assets/experiences/experiences_bg4.png);
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

	
</style>
