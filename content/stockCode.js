
//Functions that must be loaded at the start
function indexLoad(){
  timer();
  checkEvent();
  getPrice();
}

//Updates the price every minute
function getPrice(){
  let temp = document.getElementById("currentStock").innerHTML;
  console.log(temp);
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
      let element = JSON.parse(this.responseText);
      let temp1 = document.getElementById("currentPrice");
      temp1.innerHTML = "Current Price: $"+ element.Price;
    }
  }
  request.open("POST", "/getPrice", true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify({'prefix' : temp}));
  setTimeout(getPrice, 60000);
}

//check the users event subscriptions
function checkEvent(){
  console.log("IN CHECK EVENTS");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
      let events = document.getElementById("events");
      let stuff = JSON.parse(this.responseText);
      if(stuff.type == true){
        for(i = 0; i < stuff.items.length; i++){
          let a = document.createElement('a');
          let link = document.createTextNode(stuff.items[i].said);
          a.appendChild(link);
          a.title = "here";
          a.href = "localhost:3000/stocks/" + stuff.items[i].prefix;
          events.appendChild(a);
          console.log(events);
        }
        setTimeout(remover, 10000);
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
    }
  }
  request.open("GET", "/checkEvents", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send();

  setTimeout(checkEvent, 90000);
}

//Removes from the event subscription and closes it
function remover(){
  let events = document.getElementById("events");
  while(events.firstChild){
    events.removeChild(events.firstChild);
  }
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//For the dropdown list of stocks
function dropFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

//filters from the search bar
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

// Opens the sideBar for the event Subscription
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

//CLoses the sideBar for event Subscription
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//Time of day
function timer(){
  var today = new Date();
  var h = today.getHours();
  var checker = "AM";
  if(h > 12){
    h -= 12;
    checker = "PM";
  }
  var m = today.getMinutes();
  if(m % 5 == 0){
  }
  if(m < 10){
    m = "0" + m;
  }
  document.getElementById("time").innerHTML ="The Time is: "+ h + ":" + m + checker;
  var t = setTimeout(timer, 60000);
}

//Does the purchases
function purchase(UID, prefix){
  console.log(UID);
  let sharesBuy = prompt("How much shares would you like to buy?");
  if(isNaN(sharesBuy) || sharesBuy <= 0){
    alert("Sorry, it is invalid");
  }else{
    var sending = {'uid' : UID, 'buying': parseInt(sharesBuy), 'prefix' : prefix};
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log(request.responseText);
        alert(this.responseText);
        location.reload();
      }else if(this.readyState == 4 && this.status == 409){
        console.log(this.responseText);
        location.reload();
      }
    }
    request.open("POST", "/buyingShares", true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(sending));
  }
}
//Adds the stock to the users watchlist
function addWatchList(prefix){
  console.log(prefix);
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      alert(this.responseText);
    }else if(this.readyState == 4 && this.status == 405){
      alert(this.responseText);
    }
  }
  request.open("POST", "/addWatch", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify({'prefix' : prefix}));
}

//Places the stock Order
function placeOrder(prefix, id){
  let sharesBuy = prompt("How much shares would you like to buy? (Whole Number)");
  if(isNaN(sharesBuy) || sharesBuy <= 0){
    alert("Sorry, it is invalid");
  }
  let maxPrice = prompt("What is your max price to buy?");
  if(isNaN(maxPrice) || maxPrice <= 0){
    alert("Sorry, it is invalid");
  }else{
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log(request.responseText);
        alert(this.responseText);
        //location.reload();
      }else if(this.readyState == 4 && this.status == 405){
        alert(this.responseText);
      }
    }
    request.open("POST", "/placeOrder", true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({'sharesBuying' : parseInt(sharesBuy), 'maxPrice' : parseFloat(maxPrice), 'prefix' : prefix, 'id' : id}));

  }
}

//Lets user logout
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