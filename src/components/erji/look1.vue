<template>
	<div class="main2">
		
		<ul>
			<li v-for="(list) in list1" :key="list">
				<i></i>
				<a href="javaScript:;">
						<img v-bind:src="list.src" v-bind:alt="list.tit" />
					<h3><span>FILM</span>{{list.tit}}</h3>
				</a>
			</li>
		</ul>
		<div class="route">
			<img src="../../assets/interests/fy_prev_btn.png" class="fl"/>
			<span v-for="(list,index) in list2" :key="index">
				<router-link v-bind:to="list.ly"  @click.native="btn(index)"  v-bind:class="{aa1:index==current}">
					<span>{{list.mun}}</span>
				</router-link>
			</span>
			<img src="../../assets/interests/fy_next_btn.png" class="fr"/>
			</div>
	</div>
</template>

<script>
export default {
methods:{
		btn(index){
	    	this.current=index;
		},
},
data(){
		return{
			current:0,
			list1:[
				{src:('../../static/pic1_1.png'),tit:'Brave Youth',},
				{src:'../../static/pic1_2.png',tit:'Wood',},
				{src:'../../static/pic1_3.png',tit:'Freedom',},
				{src:'../../static/pic1_4.png',tit:' Moonlight',},
				{src:'../../static/pic1_5.png',tit:'Assassin',},
				{src:'../../static/pic1_6.png',tit:'Lamb',},
				{src:'../../static/pic1_7.png',tit:'Movie Title',},
				{src:'../../static/pic1_8.png',tit:'The Front Line',},
				{src:'../../static/pic1_9.png',tit:'Spider Man',},
			],
			list2:[
				{mun:'1',ly:'/erji/look1'},
				{mun:'2',ly:'/erji/look2'},
				{mun:'3',ly:'/erji/look3'},
				{mun:'4',ly:'/erji/look4'},
			]
		}
	}
}
</script>
<style scoped>
	.aa1{
		background: #ffc878!important;
		color: #fff!important;
	}
	.main2{
		width: 100%;
    	margin: 0 auto 80px;
    	position: relative;
    	height: 2000px;
    	margin-top: 20px;
		margin-left: 100px;
	}
	.main2>ul{
		width: 1280px;
    	height: 1262px;
		margin-bottom: 20px;
	}
	.main2 ul li{
		position: relative;
    	width: 385px;
    	float: left;
    	margin: 0 20px 20px 0;
    	font-family: "syht_l2";
    	text-transform: uppercase;
  		transition: all ease-out 0.3s;
  		display: list-item;
    	text-align: -webkit-match-parent;
	}
	.main2 ul li i{
		width: 100%;
   		height: 8px;
   		position: absolute;
    	top: 0;
    	background: #ffc878;
    	opacity: 0;
    	transition: all ease-out 0.3s;
	}
	.main2 li:hover i{
		opacity: 1;
	}
	.main2 li:hover {
    	background: #bfbfbf;
   		box-shadow: 0px 0px 15px #888888;
   		transition: all 0.2s ease-out 0s,background-color 0.3 linear 0s;
	}
	.main2 li:hover h3{
		color: #FFFFFF;
	}
	.main2 li:hover span{
		color: #FFFFFF;
	}
	.main2 ul li h3{
		text-align: center;
    	font-size: 24px;
    	margin: 0px auto 12px;
    	letter-spacing: 1px;
    	font-weight: normal;
    	width: 90%;
    	line-height: 30px;
    	color: #333;
	}
	.main2 ul li span{
		font-size: 16px;
    	letter-spacing: 1px;
    	display: block;
    	color: #333;
	}
	.route
	{
		width: 50%;
    	text-align: left;
    	position: relative;
    	padding: 0 0 80px;
    	padding-top: 0px;
	}
	.route a{
		width: 34px;
	    height: 34px;
	    text-align: center;
	    line-height: 34px;
	    background-color: #969696;
	    border-radius: 4px;
	    font-family: syht_l2;
	    color: #fff;
	    font-size: 16px;
	    margin: 0 10px;
	    display: inline-block;
	}
	.route a:hover{
		background-color: #ffc878;
	}
	.fl{
		position: relative;
		top: 10px;
		left: -12px;
	}
	.fr{
		position: relative;
		top: 10px;
		right: -12px;
	}
</style>