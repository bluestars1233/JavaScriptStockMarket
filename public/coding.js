
var character;
let selection = " ";
var currentStocks;
let marketCheck = 1;

function adminloader(){
  check();
  specialcheck();
  timer();
}

//Used to load the UserPage
function userLoader(){
  check();
  getUser();
  checkEvent();
  timer();
  

}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function checkEvent(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      //console.log(this.responseText);
      let events = document.getElementById("events");
      let stuff = JSON.parse(this.responseText);
      //console.log("I AM HERE IN CHECK EVENT");
      //console.log(stuff);
      if(stuff.type == true){
        for(i = 0; i < stuff.items.length; i++){
          let a = document.createElement('a');
          let link = document.createTextNode(stuff.items[i].said);
          a.appendChild(link);
          a.title = "here";
          a.href = "localhost:3000/stocks/" + stuff.items[i].prefix;
          events.appendChild(a);
          //console.log(events);
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

function remover(){
  let events = document.getElementById("events");
  while(events.firstChild){
    events.removeChild(events.firstChild);
  }
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function specialcheck(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
    }
  }  
  request.open("GET", "/checkadmin", true);
  request.setRequestHeader('Content-type', 'text/html');
  request.send();
}

function check(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        let temp = JSON.parse(this.responseText);
        //console.log(temp);
        if(temp.type == false){
          location.replace("http://localhost:3000/login.html");
        }

    }
  }  
  request.open("GET", "/checkLog", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send();
}

function logger(){
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let sendObj = {"user":username,"pass":password};
  
  document.getElementById("username").value="";
  document.getElementById("password").value="";
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
          //console.log(this.responseText);
          window.location.replace("/");
      }
  }
  request.open("POST","/login")
  request.setRequestHeader('Content-Type',"application/json")
  request.send(JSON.stringify(sendObj));
}
//Keeps the Time updated at the top of the page
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
    updateStocks();
  }
  if(m < 10){
    m = "0" + m;
  }
  
  document.getElementById("time").innerHTML ="The Time is: "+ h + ":" + m + checker;
  var t = setTimeout(timer, 60000);
}

function toggleDay(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(request.responseText);
    }
  }
  request.open("GET", "/toggleTime", true);
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
  console.log(temp1);
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(request.responseText);
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


function updateStocks(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log("Updating Prices");
    }
  };
  request.open("GET", "updateStocks", true);
  request.send();
}

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

//Brings back the user to the UserPage
function backUser(){
  location.href = "UserPage.html";
}



//This adds the stock into the Users watchlist
function addWatchList(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(request.responseText);
    }
  }
  request.open("POST", "/addWatchList", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify(currentStocks));	
  
}



//This grabs what the user selected so it loads in for the StockPage
function stockPage(selected){
  //console.log("IT IS WORKING");
  var selectedID = selected.id;
  let request = new XMLHttpRequest();

  request.onreadystatechange = function(){	
		if(this.readyState == 4 && this.status == 200){
			console.log(request.responseText);
		}
  }
  request.open("GET", "/stockTemp", true);
  request.setRequestHeader('Content-type', 'text/html');
  request.send(JSON.stringify({'item' : selectedID}));	
}

//How the user is able to access the admin page, more functionality in the future
function toAdmin(){
  var answer = prompt("Please enter the password to enter the admin Page: ", "here");
  let responder = "";
  let sending = {'password' : answer};
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      if(this.responseText == "canLog"){
        alert("Gained Admin privileges, will now be redirected to page");
        location.replace('http://localhost:3000/adminPage');
      }else{
        alert("Wrong password");
      }
    }else if(this.readyState == 4 && this.status == 401){
      alert(this.responseText);
    }
  }
  request.open("POST", "/toAdmin", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify({'password' : answer}));
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


//Grabs the user information
function getUser(){
   let request = new XMLHttpRequest();
   request.onreadystatechange = function(){
     if(this.readyState == 4 && this.status == 200){
      character = JSON.parse(this.responseText);
      console.log(character);
      characterBalance = character.accountBalance;
      document.getElementById("balance").innerHTML = "Current Balance: $" + characterBalance.toFixed(2);
      portfolioPage(character);
      ordersPage(character);
      watchlistPage(character);
      subscribePage(character);
      //accountHist();
      //getTimes();
     }
   };
   request.open("GET", "getUser", true);
   request.send();
 }

//used to update user information, prototype as it takes to much memory from the website
 function updateUser(){
   portTable = document.getElementById("portfolio1");
   ordersTable = document.getElementById("orders1");
   watchingTable = document.getElementById("watchlist1");
   subscriptionTable = document.getElementById("subscribe1");
   while(portTable.rows.length > 1){
     portTable.deleteRow(1);
   }
   while(ordersTable.rows.length > 1){
    ordersTable.deleteRow(1);
  }
  while(watchingTable.rows.length > 1){
    watchingTable.deleteRow(1);
  }
  while(subscriptionTable.rows.length > 1){
    subscriptionTable.deleteRow(1);
  }
  getUser();
 }

 //Displays the account history (Not selling yet since non can be sold at the moment)
function accountHist(){
  text = "<ol>";
  var hLength = 0;
  if(character.accountHistory.length > 5){
    hLength = character.accountHistory.length - 5;
  }
  for(hLength; hLength < character.accountHistory.length; hLength++){
    text += "<li>" + character.accountHistory[hLength] + "</li>";
  }
  text += "</ol>"
  document.getElementById("accountList").innerHTML = text;
}

//loads the watchlist table
function watchlistPage(character){
  //var temp = document.getElementById("watchlist1");
  character.watchlist.forEach(watchTable);
 }
//creates the watchlist table through the foreach function
function watchTable(item, index){
  console.log("HEREEE" + character.orders);
  var temp = document.getElementById("watchlist1");
  var row = temp.insertRow(0);
  row.setAttribute("id", "watchRow"+ index);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  //var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(2);
  var cell5 = row.insertCell(3);
  var btn = document.createElement("Button");
  cell1.innerHTML = item.prefix;
  cell2.innerHTML = "$"+item.currentPrice.toFixed(2);
  //cell3.innerHTML = "$"+item.currentBid;
  cell4.innerHTML = item.numberStocksTrades;
  btn.innerHTML = "Remove";
  btn.setAttribute("id", item.prefix);
  btn.setAttribute("onclick", "removeWatch(this.id)");
  cell5.appendChild(btn);
  temp.appendChild(row);
 }

//removes the item from the watchlist
function removeWatch(number){
    if(confirm("are you sure?")){
      let request = new XMLHttpRequest();
      request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          alert(this.responseText);
        }else if(this.readyState == 4 && this.status == 409){
          alert(this.responseText);
        }
      };
      request.open("POST", "cancelWatch", true);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify({'spot': number}));
      updateUser();
    }
 }

 //For this area, will only be doing selling for now, future implementation will also include buying orders as well
function ordersPage(character){
  var temp = document.getElementById("orders1");
  if(character.selling.length > 0){
    for(i = 0; i < character.selling.length;i++){
      var row = temp.insertRow(0);
      row.setAttribute("id", "orderRow"+ i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var btn = document.createElement("Button");
      cell1.innerHTML = "Selling";
      cell2.innerHTML = character.selling[i].id;
      cell3.innerHTML = "$" + character.selling[i].pricing;
      cell4.innerHTML = character.selling[i].amount;
      btn.innerHTML = "Cancel";
      btn.setAttribute("id", i);
      btn.setAttribute("onclick", 'cancel(this.id)');
      cell5.appendChild(btn);
      temp.appendChild(row);
    }
  }
  if(character.buying.length > 0){
    for(i = 0; i < character.buying.length;i++){
      var row = temp.insertRow(0);
      row.setAttribute("id", "orderRow"+ i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var btn = document.createElement("Button");
      cell1.innerHTML = "buying";
      cell2.innerHTML = character.buying[i].prefix;
      cell3.innerHTML = "$" + character.buying[i].maxPrice;
      cell4.innerHTML = character.buying[i].sharesBuying;
      btn.innerHTML = "Cancel";
      btn.setAttribute("id", i);
      btn.setAttribute("onclick", 'cancelOrder(this.id)');
      cell5.appendChild(btn);
      temp.appendChild(row);
      //Sell Stock must be placed first before this
    }
  }
 }
//cancels the order that was placed
function cancel(number){
    if(confirm("Are you sure?")){
      let request = new XMLHttpRequest();
      request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          console.log(number);
        }else if(this.readyState == 4 && this.status == 409){
          alert(this.responseText);
        }
      };
      let temporary = character.selling[number].uid;
      console.log(temporary);
      request.open("POST", "cancelOrder", true);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify({'orderNum': temporary}));
      location.reload();
      //example = document.getElementById("orderRow" + number);
      //example.parentNode.removeChild(example);
      //updateUser();
   }
 }

function cancelOrder(number){ 
  if(confirm("Are you sure?")){
    let request = new XMLHttpRequest();
      request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          alert(this.responseText);
          location.reload();
        }else if(this.readyState == 4 && this.status == 409){
          alert(this.responseText);
          location.reload();
        }
      };
      request.open("POST", "cancelBuy", true);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify({'orderNum' : character.buying[number].id}));
  }
}

//loads the portfolio table
function portfolioPage(character){
  console.log(character);
  var temp = document.getElementById("portfolio1");
  console.log("YOU MADE IT" + temp)
  for(i = 0; i < character.portfolio.length;i++){
    var row = temp.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(3);
    var btn = document.createElement("Button");
    cell1.innerHTML = character.portfolio[i].stockPrefix;
    cell2.innerHTML = character.portfolio[i].owned;
    cell3.innerHTML = "$"+character.portfolio[i].avgPrice.toFixed(2);
    //cell4.innerHTML = "$"+character.portfolio[i].curValue.toFixed(2);
    btn.innerHTML = "Sell";
    btn.setAttribute("id", i);
    btn.setAttribute("onclick", 'sell(this.id)');
    cell5.appendChild(btn);
    temp.appendChild(row);
  }
 }

//function for selling some stocks
function sell(number){
  if(marketCheck == 1){
    var sharesSelling = prompt("How many shares would you like to sell?");
    if(isNaN(sharesSelling) || sharesSelling <= 0 || sharesSelling > character.portfolio[number].owned){
      alert("Sorry, it is invalid")
    }else{
      var sellPricePer = prompt("How much would you like to sell for?");
      if(isNaN(sellPricePer) || sellPricePer <= 0){
        alert("Sorry, it is invalid");
      }else{
        sellPricePer = parseFloat(sellPricePer);
        sellPricePer.toFixed(2);
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
            alert(this.responseText);
          }else if(this.readyState == 4 && this.status == 409){
            alert(this.responseText);
          }else if(this.readyState == 4 && this.status == 405){
            alert(this.responseText);
          }
        }
        request.open("POST", "/sellingOrder", true);
        request.setRequestHeader('Content-type', 'application/json');
        
        var sending = {pricing : sellPricePer, amount : sharesSelling, id : character.portfolio[number].stockPrefix};
        request.send(JSON.stringify(sending));
        updateUser();
      }
      
    }
  }else{
    alert("Sorry, Market is Now Closed");
  }
  

}

//loads the event subscription table
function subscribePage(character){
  var temp = document.getElementById("subscribe1");
  console.log("SUBSCRIPTION SECTION!")
  for(i = 0; i <character.eventSub.length; i++){
    var row = temp.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell3.setAttribute("id", "buttonSub"+i);
    var cell5 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var btn1 = document.createElement("Button");
    var btn2 = document.createElement("Button");
    row.setAttribute("id", "subRow"+i)
    cell1.innerHTML = character.eventSub[i].prefix;
    cell2.innerHTML = "$"+character.eventSub[i].priceConstraint.toFixed(2);
    cell5.innerHTML = character.eventSub[i].over;
    if(character.eventSub[i].activation == true){
      btn1.innerHTML = "Activated";
    }else{
      btn1.innerHTML = "Deactivated";
    }
    btn2.innerHTML = "Remove";
    row.setAttribute("id", "sub"+i);
    btn1.setAttribute("id", i);
    btn2.setAttribute("id", i);
    btn2.setAttribute("onclick", 'removeSub(this.id)');
    btn1.setAttribute("onclick", 'activation(this.id)');
    cell3.appendChild(btn1);
    cell4.appendChild(btn2);
    temp.appendChild(row);

  }
}

//removes event subscription from user table
function removeSub(number){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      alert(this.responseText);
    } 
  }
  request.open("POST", "/removeSubscript", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify({'remove': number}));
  location.reload();
}

//to activate subscription and deactivate subscription
function activation(number){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      alert(this.responseText);
    } 
  }
  if(character.eventSub[number].activation == true){
    temp0 = false;
    character.eventSub[number].activation = false;
    document.getElementById("buttonSub"+number).firstChild.innerHTML = "Deactivated";
  }else{
    temp0 = true;
    character.eventSub[number].activation = true;
    document.getElementById("buttonSub"+number).firstChild.innerHTML = "activated";
  }
  request.open("POST", "/activationType", true);
  request.setRequestHeader('Content-type', 'application/json');
  var temp1 = {activity : temp0, verify : number};
  request.send(JSON.stringify(temp1));
  location.reload();
}

//subscribe to a specific stock and the value to be alerted at
function subscribe(){
  var val = document.getElementById("subscription").value;
  var val2 = document.getElementById("over").value;
  var priceTake = prompt("At what price would you like to be alerted at?");
  // console.log(parseFloat(priceTake));
  if (isNaN(priceTake) || parseFloat(priceTake) <= 0 || priceTake == ""){
    alert("Sorry, invalid number");
  }else{
    takingPrice = parseFloat(priceTake).toFixed(2);
    let request = new XMLHttpRequest();
      request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          alert(this.responseText);
        } 
      }
      request.open("POST", "/addSubscription", true);
      request.setRequestHeader('Content-type', 'application/json');
      var sending = {prefix : val, priceConstraint : takingPrice, activation : true, over: val2};
      request.send(JSON.stringify(sending));
      location.reload();
      //must reload this area
  }
}

//edits the balance whether it is a deposit or a withdraw
function balanceEdit(){
   var check = prompt("Please enter either withdraw or deposit please");
   check.toLowerCase();
   if(check == "withdraw"){
    if(character.accountBalance == 0){
      alert("Sorry, no money in account")
    }else{
      var taken = prompt("How much would you like to withdraw?");
      var value;
      if(taken > character.accountBalance || isNaN(taken)){
        alert("Sorry, invalid response");
      }else{
        value = parseFloat(taken);
        value.toFixed(2);
        withdraw(value);
      }
    }
   }else if(check == "deposit"){
      var added = prompt("How much would you like to deposit?");
      var value;
      if(isNaN(added)){
        alert("Sorry, invalid entry");
      }else{
        value = parseFloat(added);
        value.toFixed(2);
        deposit(value);
        //alert(value);
      }
      
   }else{
     alert("Invalid response");
   }
 }
//withdraws money from the account
function withdraw(value){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      alert(this.responseText);
    }
  };
  character.accountBalance -= parseFloat(value);
  request.open("POST", "withdraw", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify({'withdraw' : value}));
  updateBalance();
 }
//deposits money into the account
function deposit(value){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      alert(this.responseText);
      
    }
  };
  request.open("POST", "deposit", true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify({'deposit' : value}));
  character.accountBalance += parseFloat(value);
  console.log(value);
  console.log(character);
  updateBalance();
}
//updates the user balance
function updateBalance(){
  document.getElementById("balance").innerHTML = "Current Balance: $" + character.accountBalance.toFixed(2);
 }

