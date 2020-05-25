
var mobile = document.getElementById("mobile");
 
var phnerror = document.getElementById("phnerror");

var email = document.getElementById("email");
var mailerror = document.getElementById("mailerror");
var paswrd = document.getElementById("paswrd");
var paswderror = document.getElementById("paswderror");
var confirmPwd = document.getElementById("confirmPwd");
var confirmPawd = document.getElementById("confirmPawd");


    function signup(){

    var regexpmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var regexpmobile = /^([0-9]{3}?)[\ .-]?([0-9]{3})[\ .-]?([0-9]{4})$/;
    
    

    if (regexpmobile.test(mobile.value)){
        document.getElementById("phnerror").innerHTML= "valid";
        document.getElementById("phnerror").style.color="green"
    
            if (regexpmail.test(email.value)){   
                
                document.getElementById("mailerror").innerHTML= "valid";
                document.getElementById("mailerror").style.color="green";

        
                        
                            
                        if (paswrd.value==(document.getElementById("confirmPwd").value)){
                        // alert("password must contain atleat one lowercase, uppercase, number and alphanumeric")
                            return true;
                    
                        } else {
                            
                            document.getElementById('confirmPawd').innerHTML = "Retype Confirm Password";
                            document.getElementById('confirmPawd').style.color = 'red';
                            confirmPwd.focus();
                            return false;
                        }

                
            } else{
                    document.getElementById("mailerror").innerHTML="Enter a valid mail address";
                    document.getElementById("mailerror").style.color="red";
                    return false;
                    }
         } else{
            document.getElementById("phnerror").innerHTML="Please enter a valid number";
            document.getElementById("phnerror").style.color="red";
            return false;
    }
}


var pwd = document.getElementById("paswrd");
var strengthBar = document.getElementById("strength");
pwd.addEventListener("keyup",check)
function check(){
    var regexp25 = /[a-zA-Z0-9]+/;
    var regexp50 =/[&$#]+/;
    var regexp75 = /[*@]/;
    var strength = 0;

if(pwd.value.match(regexp25)){
    strength +=1;
}
if(pwd.value.match(regexp50)){
    strength +=1;
}
if(pwd.value.match(regexp75)){
    strength +=1;
}
if(pwd.value.length>8){
    strength =+1;
}
switch(strength){
    case 0:
        strengthBar.value = 0;
        break;

    case 1:
        strengthBar.value = 50;
        strengthBar.innerHTML = "poor";
        strengthBar.style.backgroundColor = "red"
        break;
    case 2:
        strengthBar.value = 75;
        strengthBar.innerHTML = "good";
        strengthBar.style.backgroundColor = "orange"
        break;
    case 3:
        strengthBar.value = 100;
        strengthBar.innerHTML = "strong";
        strengthBar.style.backgroundColor = "green"
        break;
    }
}
    