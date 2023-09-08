var x = document.getElementById("flogin");
var y = document.getElementById("fregister");
var z = document.getElementById("button");
var userArray=['1234'];
var passArray=['1234'];

function btnregister(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function btnlogin(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}



function register(){

    var username = document.getElementById("ruser").value;
    var password = document.getElementById("rpswd").value;
    var password2 = document.getElementById("re-rpswd").value;


    if( username == ""){
        alert("Username Required.");
        return;
    }

    else if(password == ""){
        alert("Password Required.");
        return;
    }

    else if(password2 == ""){
        alert("Confirm Password Required.");
        return;
    }

    else if(password != password2){
        alert("Password do not same.")
    }

    else if(userArray.indexOf(username) == -1){
        userArray.push(username);
        passArray.push(password);
        
        alert(username + "  Thanks for Registration. \nYou can try Login now.");
        document.getElementById("ruser").value ="";
        document.getElementById("rpswd").value="";
        document.getElementById("re-rpswd").value="";
        document.getElementById("remail").value="";
        document.getElementById("rphone").value="";

    }

    else{
        alert(username + "is already register.");
        return;
    }
}




function login(){
    
            var username = document.getElementById("luser").value;
            var password = document.getElementById("lpswd").value;

          
            var i = userArray.indexOf(username);
            

            if(userArray.indexOf(username) == -1){
                if (username == ""){
                    alert("Username required.");
                    return ;
                }
                alert("Username does not exist.");
                return ;
            }

            else if(passArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }

            else {
                alert(username + ", you success to Login \n Welcome to our Shop.");

                document.getElementById("lname").value ="";
                document.getElementById("lpswd").value="";
                return ;
            }
}