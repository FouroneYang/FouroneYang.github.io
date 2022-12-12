<template>
	<div class="new-page">
			<div class="new-page-main">
				<ul>
					<li>
						<a href="#" class="a2">
							<img src="../../assets/experiences/online_shop1.jpg"/>
							<h2 class="h2">
								<b class="b1">Online Shop Design</b>
								<del>Design and implement an online shop with 5+ features including personal account management, commodity,
category, my collection, my orders, shopping cart, address.</del>
								<ins>Read more ></ins>
								<em>Present</em>
							</h2>
						</a>
					</li>
					<li>
						<a href="#" class="a2">
							<img src="../../assets/experiences/sudoku.jpg"/>
							<h2 class="h2">
								<b class="b1">AI Sudoku Solver</b>
								<del>Designed 4 algorithms for the AI Sudoku solver: Unique Method, Exclusion Method, 3-Chian Number
Reduction Method, Number Pair Method. The AI Sudoku Solver is able to solve any Sudoku game, even the most difficult 17-Sudoku with only one
solution.</del>
								<ins>Read more ></ins>
								<em>12/2021</em>
							</h2>
						</a>
					</li>
					<li>
						<a href="#" class="a2">
							<img src="../../assets/experiences/thermodynamics.png"/>
							<h2 class="h2">
								<b class="b1">Predict Thermodynamic Properties of Fluids</b>
								<del>Established 3 ML models to correlate 4 thermodynamic properties of 6000+ compounds. Used only 2 - 3 data sets of different thermodynamic properties as input, obtained boiling point data that is
difficult to obtain by experimentation or EOS method.</del>
								<ins>Read more ></ins>
								<em>05/2021</em>
							</h2>
						</a>
					</li>
					<li>
						<a href="#" class="a2">
							<img src="../../assets/experiences/stock.png"/>
							<h2 class="h2">
								<b class="b1">Use News Headlines to Predict Stock Movements</b>
								<del>Scraped news headline data from 2008-2016, predict daily stock movements with Python. Implemented 3 algorithms on Tensorflow training 60K datasets and made visualization.</del>
								<ins>Read more ></ins>
								<em>08/2020</em>
							</h2>
						</a>
					</li>
					<li>
						<a href="#" class="a2">
							<img src="../../assets/experiences/stock.png"/>
							<h2 class="h2">
								<b class="b1">Use News Headlines to Predict Stock Movements</b>
								<del>Scraped news headline data from 2008-2016, predict daily stock movements with Python. Implemented 3 algorithms on Tensorflow training 60K datasets and made visualization.</del>
								<ins>Read more ></ins>
								<em>08/2020</em>
							</h2>
						</a>
					</li>
					<li>
						<a href="#" class="a2">
							<img src="../../assets/experiences/stock.png"/>
							<h2 class="h2">
								<b class="b1">Use News Headlines to Predict Stock Movements</b>
								<del>Scraped news headline data from 2008-2016, predict daily stock movements with Python. Implemented 3 algorithms on Tensorflow training 60K datasets and made visualization.</del>
								<ins>Read more ></ins>
								<em>08/2020</em>
							</h2>
						</a>
					</li>
					
					<li>
						<div class="new-page-footer">
							<span class="sp2">1</span>
							<router-link to="/news/two" class="a1">2</router-link>
							<router-link to="/news/three" class="a1">3</router-link>
							<router-link to="/news/two" class="a1">Next Page</router-link>
							<router-link to="/news/six" class="a1">Last Page</router-link>

						</div>
					</li>
				</ul>
				
				
			</div>
			
		</div>
</template>

<script>
</script>

<style>
	.new-page {
		width: 100%;
		overflow: hidden;
	}
	.new-page .new-page-main {
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 3%;
		margin-bottom: 4%;
	}
	.new-page .new-page-main ul {
		width: 100%;
		float: left;
		overflow: hidden;
		background: #fff;
		padding: 3%;
	}
	.new-page .new-page-main ul li .a2{
		display: block;
		width:94%;
		overflow: hidden;
		background: url(../../assets/experiences/bg1.jpg) no-repeat;
		background-size: 100% 100%;
		padding-bottom: 3%;
		margin-bottom: 3%;
		
	}
	.new-page-main ul li .a2 img {
		width: 34%;
		height: auto;
		float: left;
		margin-top: 3%;
		margin-left: 2%;
		transition: all 1s ease;
	}
	.new-page-main ul li .a2:hover img {
		transform: scale(1.1);
	}
	
	.new-page-main ul li .a2 .h2 {
		position: relative;
	    width: 60%;
	    float: left;
	    margin-top: 4%;
	    margin-left: 4%;
	    font-weight: 400;
	}
	.new-page-main ul li .a2 .h2 .b1 {
		display: block;
		color: #444;
		font-size: 21px;
		font-weight: 400;
	}
	.new-page-main ul li .a2:hover .b1 {
		color: #06509C;
	}
	.new-page-main ul li .a2 .h2 del {
		text-decoration: none;
		display: block;
		color: #818181;
		font-size: 14px;
		line-height: 1.5em;
		margin-top: 2%;
		margin-right: 2%;
	}
	.new-page-main ul li .a2 .h2 ins {
		text-decoration: none;
		display: block;
		color: #0aacf2;
		font-size: 15px;
		margin-top: 4%;
	}
	.new-page-main ul li .a2 .h2 em {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 14px;
		color: #333;
		font-style: normal;
		margin-right: 3%;
	}
	
	
	.new-page-footer .sp2 {
		padding: 5px 18px;
	    text-decoration: none;
	    font-size: 1em;
	    height: 35px;
	    text-align: center;
	    line-height: 35px;
	    color: #fff;
	    font-size: 12px;
	    background: #06509C;
	    margin-left: 5px;
	}
	.new-page-footer .a1 {
		display: inline;
	    padding: 5px 18px;
	    text-decoration: none;
	    font-size: 1em;
	    margin-left: 5px;
	    height: 35px;
	    text-align: center;
	    line-height: 35px;
	    font-size: 12px;
	    color: #696969;
   	 	background: #DCDCDC;
	}
</style>