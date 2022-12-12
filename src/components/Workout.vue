<template>
	
	<div class="wrapper">
		<main>
		<div class="banner">
		</div>
		<div class="main">
		<ul class="count">
				<li>Location:</li>
				<li>
					<router-link to="/home">Biography</router-link>
					<em>></em>
				</li>
				<li>
					<router-link to="/interest">Interests</router-link>
					<em>></em>
				</li>
				<li>
					<router-link to="#">Workout</router-link>
				
				</li>
			</ul>
		</div>

		<div class="main-one">
	   		<div class="main-one-box">
				<div class="one-right">
	   				<span></span>
	   				<h2>Squat</h2>
	   				<span></span>
	   				<p>
						A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up.					</p>
	   			</div>
	   			<div class="one-left">
	   				<img src="../assets/interests/squat.jpg" />
	   			</div>
	   		</div>
	   </div>

		<div class="main-two">
	   		<div class="main-two-box">
	   			<div class="two-left">
	   				<img src="../assets/interests/bench_press.jpg" />
	   			</div>
	   			<div class="two-right">
	   				<span></span>
	   				<h2>Bench Press</h2>
	   				<span></span>
	   				<p>
						The bench press, or chest press, is a weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench. Although the bench press is a full-body exercise, the muscles primarily used are the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.
					</p>
	   			</div>
	   		</div>
	   </div>

	   <div class="main-one">
	   		<div class="main-one-box">
				<div class="one-right">
	   				<span></span>
	   				<h2>Dead Lift</h2>
	   				<span></span>
	   				<p>
						The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground. It is one of the three powerlifting exercises, along with the squat and bench press.					</p>
	   			</div>
	   			<div class="one-left">
	   				<img src="../assets/interests/dead_left.jpg" />
	   			</div>
	   		</div>
	   </div>

	   <div class="main-two">
	   		<div class="main-two-box">
	   			<div class="two-left">
	   				<img src="../assets/interests/pull_up.jpg" />
	   			</div>
	   			<div class="two-right">
	   				<span></span>
	   				<h2>Pull Up</h2>
	   				<span></span>
	   				<p>
						A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands, gripping a bar or other implement at a distance typically wider than shoulder-width, and pulled up. As this happens, the elbows flex and the shoulders adduct and extend to bring the elbows to the torso.					</p>
	   			</div>
	   		</div>
	   </div>

	   <div class="main-one">
	   		<div class="main-one-box">
				<div class="one-right">
	   				<span></span>
	   				<h2>Row</h2>
	   				<span></span>
	   				<p>
						In strength training, rowing (or a row, usually preceded by a qualifying adjective — for instance a seated row) is an exercise where the purpose is to strengthen the muscles that draw the rower's arms toward the body (latissimus dorsi) as well as those that retract the scapulae (trapezius and rhomboids) and those that support the spine (erector spinae). When done on a rowing machine, rowing also exercises muscles that extend and support the legs (quadriceps and thigh muscles). In all cases, the abdominal and lower back muscles must be used in order to support the body and prevent back injury.					</p>
	   			</div>
	   			<div class="one-left">
	   				<img src="../assets/interests/row.jpg" />
	   			</div>
	   		</div>
	   </div>

	   <div class="main-two">
	   		<div class="main-two-box">
	   			<div class="two-left">
	   				<img src="../assets/interests/bar_dip.jpg" />
	   			</div>
	   			<div class="two-right">
	   				<span></span>
	   				<h2>Bar Dip</h2>
	   				<span></span>
	   				<p>
						The triceps dip is a bodyweight exercise performed on parallel bars or on a pull-up and dip station. It targets the triceps first, but also stretches and strengthens the chest and shoulders. Dips with a triceps focus are usually performed with an upright torso, the knees bent and crossed, and the arms close to the body. Dips can be performed for low reps for strength or higher reps for muscle growth.					</p>
	   			</div>
	   		</div>
	   </div>
	</main>

   
	</div>
</template>




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
		background-image: url(../assets/interests/workout.png);
		background-size: cover;
	background-position: center;
    background-attachment: fixed;
    background-repeat: repeat-y;
	}

.main-head {
    grid-area: header;
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


	.main-one {
		width: 100%;
		height: 500px;
		/* background: white; */
		overflow: hidden;
	}
	.main-one .main-one-box {
		width: 100%;
		height: 370px;
		/*background: gold;*/
		margin: 65px auto;
	}
	.main-one .main-one-box .two-left {
		width: 685px;
		height: 370px;
		/*background: forestgreen;*/
		float: left;
	}

	.main-one .main-one-box .one-left img{
		padding-left: 50px;
		width: 640px;
		height: 370px;
		/*background: forestgreen;*/
		float: left;
	}

	.main-one .main-one-box .one-right {
		width: 650px;
		height: 218px;
		/*background: blue;*/
		float: left;
	}
	.main-one-box .one-right span {
		display: block;
		height: 2px;
		background: #666;
		width: 15%;
		margin-left: 83%;
	}
	.main-one-box .one-right h2 {
		line-height: 1.4em;
		font-size: 27px;
		/* margin: 0.6em 30%; */
		margin-top: 0.6em;
		margin-bottom: 0.6em;
		padding-right: 2%;
		text-align: right;
		color: #333;
	}
	.main-one-box .one-right p {
		font-size: 17px;
		color: #666;
		margin-top: 3em;
		line-height: 30px;
		/* margin-left: 30px; */
		padding-left: 40px;
	}


	.main-two {
		width: 100%;
		height: 500px;
		background: #e2ebf5;
		overflow: hidden;
	}
	.main-two .main-two-box {
		width: 100%;
		height: 370px;
		/*background: gold;*/
		margin: 65px auto;
	}
	.main-two .main-two-box .two-left {
		width: 685px;
		height: 370px;
		/*background: forestgreen;*/
		float: left;
	}

	.main-two .main-two-box .two-left img{
		padding-left: 50px;
		width: 640px;
		height: 370px;
		/*background: forestgreen;*/
		float: left;
	}

	.main-two .main-two-box .two-right {
		width: 600px;
		height: 218px;
		/*background: blue;*/
		float: left;
	}
	.main-two-box .two-right span {
		display: block;
		height: 2px;
		background: #666;
		width: 15%;
		margin-left: 20px;
	}
	.main-two-box .two-right h2 {
		line-height: 1.4em;
		font-size: 27px;
		margin: 0.6em 20px;
		color: #333;
	}
	.main-two-box .two-right p {
		font-size: 17px;
		color: #666;
		margin-top: 3em;
		line-height: 30px;
		margin-left: 20px;
	}

	
</style>
