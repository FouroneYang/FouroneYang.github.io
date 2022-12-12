<template>
	<div>
		<div class="footer">
        <h1 id="title">Contact Me</h1>
        <form name="hw4Form" action="https://cs601.bu-course-examples.com/hw4/380a98f5-5191-496f-8aa1-7acc1da83cc5" method="post" novalidate onsubmit="return validateForm()">
            <!-- a.First Name -->
			<div class="footer1">
				<div class="footer1_left">
            <div id="rowA">
                <label for="firstName"></label>
                <input type="text" placeholder="Your first name (required)" name="firstName" id="firstName" required>
            </div>
            <!-- b.Last Name -->
            <div id="rowB">
                <label for="lastName"></label>
                <input type="text" placeholder="Your last name (required)" name="lastName" id="lastName" required>
            </div>
            <!-- c.Email Address -->
            <div id="rowC">
                <label for="email"></label>
                <input type="text" placeholder="Your email address (required)" name="email" id="email" required>
            </div>
            <div id="validtxt">
                <p id="validA"></p>
                <p id="validB"></p>
            </div>
				</div>
            <!-- d.Radio Buttons -->
			<div class="footer1_right">
            <div id="rowD">
                <p>Reason for contacting me (Optional)</p>
                    <div id="radio">
						<label for="recruitment"></label>
                        <input type="radio" name="radioMessageType" value="Recruiter">Recruitment
                    </div>
                    <div id="radio">
						<label for="cooperation"></label>
                        <input type="radio" name="radioMessageType" value="Cooperation">Cooperation
                    </div>
                    <div id="radio1">
						<label for="other"></label>
                        <input type="radio" name="radioMessageType" value="Other">Other
                    </div>
            </div>
			</div>
			</div>
            <div id="rowE">
                <input type="submit" id="submit" value="Submit">
            </div>
        </form>
    </div>
</div>
	<!-- </div> -->
</template>

<script>
	method: {
		function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let valid = false;
    let validFirstName = true;
    let validLastName = true;

    // This statement is used to check if the input values for first name are alpha characters with length greater than 2.
    if (testExec(firstName) == false || firstName.length < 2) {
        validFirstName = false;
    }

    // This statement is used to check if the input values for last name are alpha characters with length greater than 2.
    if (testExec(lastName) == false || lastName.length < 2) {
        validLastName = false;
    }

    // catch errors
    if (validFirstName == false || validLastName == false) {
        document.getElementById("validA").innerHTML = "The length of firstname and lastname must be longer than 2 and only alpha characters!";
    }
    if (validFirstName == false) document.getElementById("firstName").style.border = "1px solid red";
    if (validLastName == false) document.getElementById("lastName").style.border = "1px solid red";
    if (validFirstName == true && validLastName == true) valid = true;

    // return true when all fields pass validation
    return valid;
}

function testExec(inputtxt) {
    let myRegex = new RegExp("^[a-zA-Z]+$");
    if (inputtxt.match(myRegex)) {
        return true;
    } else {
        return false;
    }
}
	}
	export default {
		data(){
			return {
			}
		}
		
	}
</script>
 
<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.footer {
		width: 100%;
		height: 400px;
		background: #1c1e2b;
		
	}
	.footer h1 {
		padding-top: 30px;
		color: white;
		font-style: italic;
	}
	/* .footer1 {
		display: inline-block;
	} */

	.footer1{
	display: flex;
	justify-content:left;
	align-items: center;
	min-height: 200px;
	/* padding: 10px; */
}

.footer1_left {
	padding-right: 80px;
}
.footer1_right {
	padding-left: 80px;
}
	
    p {
        font-size: 25px;
    }
    
    label {
        font-size: 25px;
        width: 400px;
        display: inline-block;
        text-align: right;
    }
    
    #title {
        font-size: 45px;
        text-align:center;
    }

	#rowA {
		/* margin-left: -400px; */
		position: relative;
		padding-top: 20px;
		text-align: left;
		z-index: 999;
	}

	#rowB {
		/* margin-left: -400px; */
		position: relative;
		padding-top: 20px;
		text-align: left;
		z-index: 999;
	}

	#rowC {
		/* margin-left: -400px; */
		position: relative;
		padding-top: 20px;
		text-align: left;
		z-index: 999;
	}

	#rowD p{
		position: relative;
		padding-top: 30px;
		text-align: left;
		color: white;
	}
	#rowE {
		/* position: relative; */
		padding-top: 30px;
		/* text-align: center;
		color: white; */
	}

	#radio {
		margin-left: -700px;
		position: relative;
		padding-top: 10px;
		text-align: center;
		/* text-align: center; */
		color: white;
	}
	#radio1 {
		margin-left: -741px;
		position: relative;
		padding-top: 10px;
		text-align: center;
		/* text-align: center; */
		color: white;
	}
    
    input{
        border: 1px solid #ccc;
        border-radius: 2px;
        color: #000;
        height: 30px;
        padding: 0 30px;
        width: 200px;
        
    }
    
    #validtxt {
        font-size: 15px;
        color: red;
    }
    
    #submit {
        align-self: center;
        width: 100px;
        margin: 0 50%;
        position: relative;
        left: -50px;
        cursor: pointer;
    }
</style>