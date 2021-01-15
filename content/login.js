function logger(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    let sendObj = {"user":username,"pass":password};
    
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            if(this.responseText == "true"){
                window.location.replace("/");
            }else if(this.responseText == "password"){
                alert("Sorry, wrong password");
            }else{
                alert("Sorry, could not find User");
            }
            
        }else if(this.readyState==4 && this.status == 409){
            if(this.responseText == "password"){
                alert("Sorry, wrong password");
            }else{
                alert("Sorry, could not find User");
            }
        }
    }
    request.open("POST","/login", true)
    request.setRequestHeader('Content-Type',"application/json")
    request.send(JSON.stringify(sendObj));
}

function register(){
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPas").value;
    let confirm = document.getElementById("confirm").value;
    if(password != confirm){
        alert("passwords do not match sorry");
    }else{
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(this.readyState==4 && this.status==200){
                console.log(this.responseText);
                if(this.responseText == "true"){
                    window.location.replace("/");
                }else{
                    alert("Username has already been taken");
                }
                
            }if(this.readyState == 4 && this.status == 409){
                alert("Username has already been taken");
            }
        }
        request.open("POST","/register", true);
        request.setRequestHeader('Content-Type',"application/json");
        request.send(JSON.stringify({'username' : username, 'password' : password}));
    }
}