<template>
	<div class="wrapper">
        <main class="person">
            <header class="main-head">
                <div class="person">
                    <!-- Welcome to my world -->
                    <div class="content" style="left:30%;top: 50%;">
                        <h4>Hello</h4>
                        <h1>I'm Shiyi</h1>
                        <h3>This is all about me...</h3>
                        
                    </div>
                </div>
            </header>
        </main>
    </div>

</template>

<style scoped>
	*{
    padding: 0;
    margin: 0;
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
}

.wrapper{
    display: grid;
    gap: 0px;
    grid-template-areas:
    "header"
    "content"
}
@media (min-width: 500px){
    body{
        grid-template-columns: 1fr 3fr;
        grid-template-areas: 
        "header  header"
    }
}
@media (min-width: 700px){
    body{
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-areas: 
        "header header  header"
    }
}

.main-head {
    grid-area: header;
}
.content {
    grid-area: content;
    position: relative;
	top: 50%;
	left:0%;
	transform: translateY(-50%);
}
.person{
	height: 100vh;
	width: 100%;
    position: relative;
	background-image: url(../assets/home/background.jpg);
	background-size: cover;
	background-position: center;
    background-attachment: fixed;
    background-repeat: repeat-y;
}

h1{
	color: #e96809;
	margin: 0px 0px 0px;
	font-size: 75px;
    font-style: italic;
    font-family:Arial, Helvetica, sans-serif;
}
h2{	
	color: rgb(255, 255, 255);
    font-size: 75px;
    font-weight: bold;
    
}
h3{
    color: rgb(255, 255, 255);
    margin: 0;
    padding: 20px;
    font-size: 45px;
    font-style: italic;
    font-family:Arial, Helvetica, sans-serif;
}
h4{
	color: rgb(210, 210, 210);
	letter-spacing: 2px;
	font-size: 28px;
    font-style: italic;
    font-family:Arial, Helvetica, sans-serif;
}
</style>