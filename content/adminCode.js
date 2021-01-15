//Shows the dropdown
function dropFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

//This filters the dropdown
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function timer(){
  //console.log(marketTimes + " You Are Here")
  var today = new Date();
  var h = today.getHours();
  //console.log(marketTimes + " time");
  //getTimes(h);
  var checker = "AM";
  if(h > 12){
    h -= 12;
    checker = "PM";
  }
  var m = today.getMinutes();
  if(m % 5 == 0){
    updateStocks();
  }
  if(m < 10){
    m = "0" + m;
  }
  
  document.getElementById("time").innerHTML ="The Time is: "+ h + ":" + m + checker;
  //console.log(h + " and " + m + " checker = " + marketCheck);
  
  //checkMarket(h);
  var t = setTimeout(timer, 60000);
}

function toggleDay(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log(request.responseText);
        alert(this.responseText);
      }
    }
    request.open("POST", "/toggleDay", true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
    
}

function setOpen(){
    var time = document.getElementById("openHour").value;
    var timeCheck = document.getElementById("timeofDay").value;
    temp1 = parseInt(time);
    if(timeCheck == "PM"){
      temp1 += 12;
    }
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log(request.responseText);
        alert(this.responseText);
      }
    }
    request.open("POST", "/setOpen", true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({'time': temp1}));
}

function setClose(){
    var time = document.getElementById("closeHour").value;
    var timeCheck = document.getElementById("timeDayClose").value;
    var temp1 = parseInt(time);
    if(timeCheck == "PM"){
      temp1 += 12;
    }
    console.log(temp1);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log(request.responseText);
      }
    }
    request.open("POST", "/setClose", true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({'time': temp1}));
}

function changeAdmin(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        
      }
    }
    request.open("POST", "/adminPriv", true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
}

function logout(){
  let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log(request.responseText);
        location.replace('http://localhost:3000/');
        //location.reload();
      }
    }
    request.open("GET", "/logout", true);
    request.setRequestHeader('Content-type', 'text/html');
    request.send();
}