//Array of all the stocks including their information
let stocksArray = [{"url" : "http://localhost:3000/stocks/AXP" ,"id": 0,"prefix": "AXP", "price": 100.40, "Selling": [{"pricing": 30.50, "amount": 75, "uid" : "1wd12341", 'user' : 'temp'}, {"pricing": 4.50, "amount": 5, "uid" : "1w232d12341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}], "transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/AMGN" ,"id": 1, "prefix": "AMGN", "price": 11.20, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1wd1asdfg2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/AAPL" ,"id": 2,"prefix": "AAPL", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1wd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/BA" ,"id": 3,"prefix": "BA", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1wd123asdf1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/CAT" ,"id": 4,"prefix": "CAT", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1hjkljkwd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/CSCO" ,"id": 5,"prefix": "CSCO", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "zxczxc1wdcv1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/CVX" ,"id": 6,"prefix": "CVX", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1zxcasdwq123wd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/GS" ,"id": 7,"prefix": "GS", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "asdaad1231wd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/HD" ,"id": 8,"prefix": "HD", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1asd12345wd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/HON" ,"id": 9,"prefix": "HON", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1wd222223331asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/IBM" ,"id": 10,"prefix": "IBM", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1aaasssdddwd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/INTC" ,"id": 11,"prefix": "INTC", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1wd1asdafgegaa2341cornn", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/JNJ" ,"id": 12,"prefix": "JNJ", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 105, "uid" : "cornn1231wd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/KO" ,"id": 13,"prefix": "KO", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "cornnn1231231wd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/JPM" ,"id": 14,"prefix": "JPM", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1wd1asdaasd23lololoololfgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/MCD" ,"id": 15,"prefix": "MCD", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "1wdxzxccv1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}, {"url" : "http://localhost:3000/stocks/MMM" ,"id": 16,"prefix": "MMM", "price": 12.40, "Selling": [{"pricing": 10.50, "amount": 75, "uid" : "zzzzz111221wd1asdafgegaa2341", 'user' : 'temp'}], "stockHist" : [{"date" : "11-6-2020", "highPrice" : 13, "lowPrice" : 10, "transactions" : 20}],"transHist": [{"date" : "11-6-2020", "transactions" : [{"buyer" : "guy", "seller" : "someGuy", "price" : 17.0, "amount" : 5}]}]}];
//Example user that was used for testing
let character = {logged: false,password:"LOLOLOL2123", username: "John", accountBalance: 110.0, portfolio : [], selling : [], buying : [], watchlist: [], eventSub: [], accountHistory: [], admin : false};
//Array of all users
let users = [character];
//The hour in which the market is open, closed, and a boolean if it is forced to be open
let marketTime = {opened: 9, closed: 20, forceOpen: false};
//Admin password to access the admin page
let adminPass = "STOCKmarketPassword23!";
//used for the date
let date = new Date();

//On start up, the server updates all the prices 
updatePrices();
//Interval of when to update all the prices
setInterval(updatePrices, 60000);
//Interval to do any of the orders
setInterval(doOrders, 59999);

//iterate through every user, and their buying, if buying.length is 0, skip that user
//goes to plan, have to iterate through their buying list
//get the prefix of what they want to buy, find in stock, then loop over all selling
//save the index that is both close to the buying price and less than their buying price
//if nothing, then don't do anything and skip, 
//else, do the if statements about money and how much the person can purchase
//do the process of purchasing, editing, transaction and stock history of that day
function doOrders(){
    let hour = date.getHours();
    if(marketTime.opened > hour && marketTime.closed < hour && marketTime.forceOpen == false){
        console.log("Market is closed");
        return;
    }
    if(marketTime.opened > hour || marketTime.closed < hour && marketTime.forceOpen == false){
        console.log("Market is closed");
        return;
    }

    for(i = 0; i < users.length; i++){
        console.log("First for loop");
        if(users[i].buying.length <= 0){
            console.log("buying length is 0");
            continue;
        }
        for(j = 0; j < users[i].buying.length;j++){
            let stockFind = users[i].buying[j].id;
            if(stocksArray[stockFind].Selling.length <= 0){
                console.log("stocks selling is 0");
                continue;
            }
            let bestPriceIndex = -1;
            let bestPriceDif = 1000;
            for(k = 0; k < stocksArray[stockFind].Selling.length; k++){
                console.log("now in selling loop");
                if(stocksArray[stockFind].Selling[k].user == users[i].username){
                    console.log("same person");
                    continue;
                }
                if(stocksArray[stockFind].Selling[k].pricing <= users[i].buying[j].maxPrice){
                    console.log("doing max price");
                    if(bestPriceDif >= users[i].buying[j].maxPrice - stocksArray[stockFind].Selling[k].pricing){
                        bestPriceIndex = k;
                        bestPriceDif = users[i].buying[j].maxPrice - stocksArray[stockFind].Selling[k].pricing;
                    }
                }
            }
            console.log(bestPriceIndex);
            if(bestPriceIndex == -1){
                console.log("nothing here");
                continue;
            }
            let amountToBuy = 0;
            for(k = stocksArray[stockFind].Selling[bestPriceIndex].amount; k > 0; k--){
                if(stocksArray[stockFind].Selling[bestPriceIndex].pricing * k < users[i].accountBalance){
                    console.log("changing amount to buy");
                    amountToBuy = k;
                    break;
                }
            }
            if(amountToBuy >= users[i].buying[j].sharesBuying){
                console.log("editing the orders");
                amountToBuy = users[i].buying[j].sharesBuying;
                users[i].buying.splice(j, 1);
                j--;
            }else if(amountToBuy > 0 && amountToBuy < users[i].buying[j].sharesBuying){
                console.log("editing the orders");
                users[i].buying[j].sharesBuying -= amountToBuy;
            }
            if(amountToBuy == 0){
                continue;
            }else{
                let check = purchaseStock(i, bestPriceIndex, amountToBuy, stockFind, stocksArray[stockFind].Selling[bestPriceIndex].uid);
                
                if(check){
                    console.log("good");
                }else{
                    console.log("error occurred");
                }
            }
        }
    }
}

//second function for doing orders to then purchase the stock
function purchaseStock(userSpot, sellingIndex, amount, stockIndex, uid){
    let sellerId = users.findIndex(x=> x.username == stocksArray[stockIndex].Selling[sellingIndex].user);
    let tempPrice = stocksArray[stockIndex].Selling[sellingIndex].pricing;
    if(sellerId == -1){
        if(stocksArray[stockIndex].Selling[sellingIndex].user != "temp"){
            console.log("error with purchase");
            return false;
        }
    }else{
        var sellerPort = users[sellerId].portfolio.findIndex(x => x.stockPrefix == stocksArray[stockIndex].prefix);
        var sellOrders = users[sellerId].selling.findIndex(x => x.uid == uid);
    }
    if(sellerId == -1 || sellerPort == -1 || sellOrders == -1){
        if(stocksArray[stockIndex].Selling[sellingIndex].user != "temp"){
            console.log("error with seller side");
            return false;
        }
    }
    if(users[userSpot].portfolio.length > 0){
        let checkPort = users[userSpot].portfolio.findIndex(x => x.stockPrefix == stocksArray[stockIndex].prefix);
        if(checkPort != -1){
            values = {'stockPrefix' : stocksArray[stockIndex].prefix, 'owned' : amount, 'avgPrice' : stocksArray[stockIndex].Selling[sellingIndex].pricing * amount / amount, 'total' : amount, 'inOrders' : 0, 'totalPrices' : stocksArray[stockIndex].Selling[sellingIndex].pricing * amount}; 
            users[userSpot].accountBalance -= stocksArray[stockIndex].Selling[sellingIndex].pricing * amount;
            users[userSpot].portfolio.push(values)
        }else{
            users[userSpot].portfolio[checkPort].owned += amount;
            users[userSpot].portfolio[checkPort].total += amount;
            users[userSpot].portfolio[checkPort].totalPrices = stocksArray[stockIndex].Selling[sellingIndex].pricing * amount;
            users[userSpot].portfolio[checkPort].avgPrice = users[userSpot].portfolio[checkPort].totalPrices / users[userSpot].portfolio[checkPort].total;
        }
    }else{
        values = {'stockPrefix' : stocksArray[stockIndex].prefix, 'owned' : amount, 'avgPrice' : stocksArray[stockIndex].Selling[sellingIndex].pricing * amount / amount, 'total' : amount, 'inOrders' : 0, 'totalPrices' : stocksArray[stockIndex].Selling[sellingIndex].pricing * amount}; 
        users[userSpot].accountBalance -= stocksArray[stockIndex].Selling[sellingIndex].pricing * amount;
        users[userSpot].portfolio.push(values)
    }
    if(sellerId != -1){
        users[sellerId].accountBalance += stocksArray[stockIndex].Selling[sellingIndex].pricing * amount;
    }
    if(stocksArray[stockIndex].Selling[sellingIndex].amount == amount){
        if(stocksArray[stockIndex].Selling[sellingIndex].user != "temp"){
            stocksArray[stockIndex].Selling.splice(sellingIndex, 1);
            users[sellerId].selling.splice(sellOrders, 1);
            users[sellerId].portfolio[sellerPort].owned -= amount;
            users[sellerId].portfolio[sellerPort].inOrders -= amount;
            if(users[sellerId].portfolio[sellerPort].owned == 0){
                users[sellerId].portfolio.splice(sellerPort, 1);
            }
        }else{
            stocksArray[stockIndex].Selling.splice(sellingIndex, 1);
        }
    }else{
        if(stocksArray[stockIndex].Selling[sellingIndex].user != "temp"){
            users[sellerId].portfolio[sellerPort].owned -= amount;
            users[sellerId].portfolio[sellerPort].inOrders -= amount;
        }
        stocksArray[stockIndex].Selling[sellingIndex].amount -= amount;
    }
    let today = date.getMonth()+"-"+date.getDate()+"-"+date.getFullYear();
    let stockHist = stocksArray[stockIndex].stockHist.findIndex(x => x.date == today);
    stocksArray[stockIndex].stockHist[stockHist].transactions++;
    let transHist1 = stocksArray[stockIndex].transHist.findIndex(x => x.date == today);
    if(transHist1 == -1){
        stocksArray[stockIndex].transHist.push({"date" : today, "transactions" : []});
        transHist1 = stocksArray[stockIndex].transHist.findIndex(x => x.date == today);
       //stocksArray[element].transHist[0].transactions.push({"buyer" : req.session.username, "seller" : users[sellerId].username, "price" : temporaryPrice, "amount" : temp.buying});
    }
    if(sellerId == -1){
        stocksArray[stockIndex].transHist[transHist1].transactions.push({"buyer" : users[userSpot].username, "seller" : "tempUser", "price" : tempPrice, "amount" : amount});
    }else{
        stocksArray[stockIndex].transHist[transHist1].transactions.push({"buyer" : users[userSpot].username, "seller" : users[sellerId].username, "price" : tempPrice, "amount" : amount});
    }
    return true;
}

//this updates all the stocks' prices
function updatePrices(){
    //update prices, edit stock history
    //will be MM-DD-YYYY
    console.log("UPDATING PRICES!!!");
    let temp = date.getMonth()+"-"+date.getDate()+"-"+date.getFullYear();
    let randomInt = 0;
    //let randomNum = 0.0;
    let element = 0;
    for(i = 0; i < stocksArray.length; i++){
        randomInt = Math.floor(Math.random() * 2) + 1;
        let randomNum = Math.random().toFixed(2);
        randomNum = parseFloat(randomNum);
        //randomNum = randomNum.toFixed(2);
        if(randomInt == 1){
            if(stocksArray[i].price > randomNum){
                stocksArray[i].price -= randomNum;
            }else{
                stocksArray[i].price +=randomNum;
            }
        }else{
            stocksArray[i].price +=randomNum;
        }
        element = stocksArray[i].stockHist.findIndex(x => x.date == temp);
        if(element == -1){
            stocksArray[i].stockHist.push({"date" : temp, "highPrice" : stocksArray[i].price, "lowPrice" : stocksArray[i].price, "transactions" : 0})
        }else{
            if(stocksArray[i].stockHist[element].highPrice < stocksArray[i].price){
                stocksArray[i].stockHist[element].highPrice = stocksArray[i].price;
            }
            if(stocksArray[i].stockHist[element].lowPrice > stocksArray[i].price){
                stocksArray[i].stockHist[element].lowPrice = stocksArray[i].price;
            }
        }        
    }
    updateWatchlists();
}

//second function from update prices to update the watchlists
function updateWatchlists(){
    console.log("Now updating all watchlists");
    for(i = 0; i < users.length; i++){
        if(users[i].watchlist.length <= 0){
            continue;
        }
        for(j = 0; j < users[i].watchlist.length; j++){
            let pref = stocksArray.findIndex(x => x.prefix == users[i].watchlist[j].prefix);
            users[i].watchlist[j].currentPrice = stocksArray[pref].price;
            users[i].watchlist[j].numberStocksTrades = stocksArray[pref].Selling.length;
        }
    }
}

//will use uuid for the selling orders
const { uuid } = require('uuidv4');
const session = require('express-session')
const express = require('express');
const path = require('path');
const dateParser = require('express-query-date'); //Is left unused but could have been used
const app = express();

app.set("view engine", "pug");
app.use(express.static('public'));
app.use(session({secret: "asd133wffASf", cookie:{maxAge : 6000000}}));

app.use(function(req,res,next){
    console.log("-------------------------");
    console.log("Request Method: "+ req.method);
    console.log("Request URL: "+ req.url);
    console.log("Request PATH: "+ req.path);
    console.log("Request Session: ");
    console.log(req.session);
    console.log();
    next();
});

app.get("/stocks/stockCode.js", function(req,res){
    console.log("I AM HERE NOW!!!");
    let jsFile = path.resolve('./content/stockCode.js');
    //console.log(jsFile);
    res.sendFile(jsFile);
});

app.get("/adminCode.js", function(req, res){
    let jsFile = path.resolve('./content/adminCode.js');
    res.sendFile(jsFile);
});

app.get("/login.js", function(req, res){
    let jsFile = path.resolve('./content/login.js');
    res.sendFile(jsFile);
});

app.get("/", userPage);
app.get("/UserPage.html", userPage);
app.get('/getUser', sendUser);
app.get("/stocks/:id", stockLoad, stockLoad2);
app.get("/stocks", indexload);
app.get("/logout", logout);
app.get("/checkLog", auth);
app.get("/checkEvents", checkEvent);


app.get("/adminPage", function(req, res){
    //will check the character if it is admin
    let element = users.findIndex(x => x.username == req.session.username);
    if(users[element].admin == true && req.session.loggedIn == true){
        res.render('adminPage');
    }else{
        res.status(401).send("Unauthorized");
    }
});

app.get("/stockCode.js", function(req,res){
    res.sendFile(path.join(__dirname+'/content/stockCode.js'));
});


app.post("/login", express.json(), login);
app.post("/register", express.json(), register);
app.post("/buyingShares", express.json(), buyingShares);
app.post("/addWatch", express.json(), addWatch);
app.post("/cancelWatch", express.json(), cancelWatch);
app.post("/addSubscription", express.json(), addSubscription);
app.post("/removeSubscript", express.json(), removeSub);
app.post("/withdraw", express.json(), withdraw);
app.post("/deposit", express.json(), deposit);
app.post("/activationType", express.json(), activationType);
app.post("/sellingOrder", express.json(), sellStock);
app.post("/setOpen", express.json(), setOpen);
app.post("/setClose", express.json(), setClose);
app.post("/toggleDay", toggleDay);
app.post("/placeOrder", express.json(), placeOrder);
app.post("/cancelBuy", express.json(), cancelBuyOrder);
app.post("/toAdmin", express.json(), checkAdmin);
app.post("/cancelOrder", express.json(), cancelSellOrder);
app.post("/adminPriv", setPriv);
app.post("/getPrice",express.json(), getStockPrice);

function getStockPrice(req, res, next){
    let temp = req.body;
    console.log(temp);
    let element = stocksArray.find(x => x.prefix == temp.prefix);
    console.log(element);
    res.status(200).send(JSON.stringify({'Price' : element.price}));
}

function checkEvent(req, res, next){
    let character = users.findIndex(x => x.username == req.session.username);
    var items = [];
    if(character == -1){
        console.log("could not find character");
        return res.status(409).send(JSON.stringify({'type': false}));
    }
    else if(users[character].eventSub.length == 0){
        console.log("eventSub is 0");
        return res.status(404).send(JSON.stringify({'type': false}));
    }else{
        //items.push({'type' : true});
        for(i = 0; i < users[character].eventSub.length; i++){
            let pref = users[character].eventSub[i].prefix;
            let theStock = stocksArray.findIndex(x => x.prefix == pref);
            console.log(users[character].eventSub[i].priceConstraint - stocksArray[theStock].price);
            if(users[character].eventSub[i].over == "higherThan"){
                if(users[character].eventSub[i].priceConstraint  < stocksArray[theStock].price){
                    if(users[character].eventSub[i].activation == false){
                        continue;
                    }
                    //console.log(stocksArray[theStock].price - users[character].eventSub[i].priceConstraint.toFixed(2));
                    let number = stocksArray[theStock].price - users[character].eventSub[i].priceConstraint.toFixed(2);
                    number = number.toFixed(2);
                    let words = "The " + pref + " stock is $" + number + " above your constraint";
                    let thisThing = {'prefix': pref,'said' : words};
                    items.push(thisThing);
                    console.log("it is cheap");
                }else{
                    console.log("it is not cheap");
                }
            }else{
                if(users[character].eventSub[i].priceConstraint  > stocksArray[theStock].price){
                    if(users[character].eventSub[i].activation == false){
                        continue;
                    }
                    //console.log(stocksArray[theStock].price - users[character].eventSub[i].priceConstraint.toFixed(2));
                    let number =users[character].eventSub[i].priceConstraint.toFixed(2) - stocksArray[theStock].price;
                    number = number.toFixed(2);
                    let words = "The " + pref + " stock is $" + number + " below your constraint";
                    let thisThing = {'prefix': pref,'said' : words};
                    items.push(thisThing);
                    //console.log("it is cheap");
                }else{
                    //console.log("it is not cheap");
                }
            }
            
        }
        if(items.length > 0){
            return res.status(200).send(JSON.stringify({'type' : true, 'items' : items}));
        }
        return res.status(409).send(JSON.stringify({'type': false}));
    }
}

function auth(req, res, next){
    console.log(typeof req.session.loggedIn);
    if(req.session.loggedIn == false || typeof req.session.loggedIn == "undefined"){
        res.send(JSON.stringify({"type" : false}));
    }else{
        res.send(JSON.stringify({"type" : true}));
    }
}

function logout(req, res, next){
    let username = req.session.username;
    let element = users.findIndex(x => x.username == username);
    if(element == -1){
        res.status(404).send("Error logging out");
    }else{
        users[element].logged = false;
        req.session.loggedIn = false;
        res.sendFile(path.join(__dirname+'/public/login.html'));
    }
}

function sendUser(req, res, next){
    let element = users.findIndex(x => x.username == req.session.username);
    res.json(users[element]);
}

function userPage(req, res, next){
    console.log(users);
    if(req.session.loggedIn){
        res.sendFile(path.join(__dirname+'/public/UserPage.html'));
    }else{
        res.sendFile(path.join(__dirname+'/public/login.html'));
    }
    

}

function stockLoad2(req, res, next){
    let id = req.params.id;
    let element = stocksArray.find(x => x.prefix == id);
    if(element == undefined){
        res.send("Cannot find stock");
    }
    let today = date.getMonth()+"-"+date.getDate()+"-"+date.getFullYear();
    let history = element.stockHist.find(x => x.date == today);
    let histList = []
    let transList = [];
    let checker = false;
    if(history != undefined){
        histList.push(history);
        console.log("HERE IS THE history of the stock");
        //console.log(trans.transactions);
    }
    try{
        if(!req.query.startday){
            if(req.query.endday){
                req.query.startday = "11-6-2020";
            }
            req.query.startday = today;
        }
        if(element.transHist.findIndex(x => x.date == req.query.startday) == -1){
            req.query.startday = "11-6-2020";
        }
    }catch{
        if(req.query.endday){
            //console.log("I AM HERE");
            req.query.startday = "11-6-2020";
        }
        req.query.startday = today;
    }
    try{
        if(!req.query.endday){
            req.query.endday = today;
        }
        if(element.transHist.findIndex(x => x.date == req.query.endday) == -1){
            req.query.endday = today;
        }
        console.log(req.query.endday);
    }catch{
        req.query.endday = today;
    }
    for(i = 0; i < element.transHist.length; i++){
        if(checker == true){
            transList.push(element.transHist[i]);
            continue;
        }
        if(req.query.startday == element.transHist[i].date){
            transList.push(element.transHist[i]);
            checker = true;
            continue;
        }if(req.query.endday == element.transHist[i].date){
            transList.push(element.transHist[i]);
            checker = false;
            break;
        }
    }
    if(req.session.loggedIn){
        res.render('StockPage', {'stock': element, 'hist' : histList, 'transact' : transList});
        
    }else{
        return res.status(401).send("Not Logged In Sorry");
    }
    next();
}


function stockLoad(req, res, next){
    if(req.query.history){
        if(req.query.history == 'true'){
            console.log("Now here!");
            return next();
        }
    }
    let id = req.params.id;
    let element = stocksArray.find(x => x.prefix == id);
    let histList = [];
    var checker = false;
    if(element == undefined){
        res.send("Cannot find stock");
    }
    let today = date.getMonth()+"-"+date.getDate()+"-"+date.getFullYear();
    try{
        if(!req.query.startday){
            if(req.query.endday){
                req.query.startday = "11-6-2020";
            }
            req.query.startday = today;
        }
        if(element.stockHist.findIndex(x => x.date == req.query.startday) == -1){
            req.query.startday = "11-6-2020";
        }
    }catch{
        if(req.query.endday){
            //console.log("I AM HERE");
            req.query.startday = "11-6-2020";
        }
        req.query.startday = today;
    }
    try{
        if(!req.query.endday){
            req.query.endday = today;
        }
        if(element.stockHist.findIndex(x => x.date == req.query.endday) == -1){
            req.query.endday = today;
        }
        console.log( req.query.endday);
    }catch{
        req.query.endday = today;
    }
    
    for(i = 0; i < element.stockHist.length; i++){
        if(checker == true){
            histList.push(element.stockHist[i]);
            continue;
        }
        if(req.query.startday == element.stockHist[i].date){
            histList.push(element.stockHist[i]);
            checker = true;
            continue;
        }if(req.query.endday == element.stockHist[i].date){
            histList.push(element.stockHist[i]);
            checker = false;
            break;
        }
    }
    let trans = element.transHist.find(x => x.date == today);
    let transList = [];
    if(trans != undefined){
        transList.push(trans);
        console.log("HERE IS THE TRANSACTIONS");
        console.log(trans.transactions);
    }
    if(req.session.loggedIn){
        res.render('StockPage', {'stock': element, 'hist' : histList, 'transact' : transList});
    }else{
        res.status(401).send("Not Logged In Sorry");
    }

}

function indexload(req, res, next){
    var toSend = [];
    var checker = 0;
    console.log(req.query);
    try{
        if(req.query.symbol){
            let pref = stocksArray.find(x => x.prefix == req.query.symbol);
            if(pref == undefined){
                console.log("could not find it");
            }else{
                checker = 1;
                toSend.push(pref);
            }
        }
    }catch{
        checker = 0;
    }
    try{
        if(!req.query.minprice){
            req.query.minprice = 0;
        }
        req.query.minprice = Number(req.query.minprice);

        if(req.query.minprice < 0){
            req.query.minprice = 0;
        }

        
    }catch{
        req.query.minprice = 0;
    }
    try{
        if(!req.query.maxprice){
            req.query.maxprice = 10000;
        }
        req.query.maxprice = Number(req.query.maxprice);
        if(req.query.maxprice < req.query.minprice || req.query.maxprice < 0){
            req.query.maxprice = 10000;
        }
    }catch{
        req.query.maxprice = 10000;
    }
    console.log(checker);
    if(checker == 0){
        for(i = 0; i < stocksArray.length; i++){
            //console.log("YOU ARE IN THE LOOP");
            if(stocksArray[i].price <= req.query.maxprice && stocksArray[i].price >= req.query.minprice){
                toSend.push(stocksArray[i]);
                //console.log(toSend)
            }
        }
    }
    //console.log(toSend);
    if(req.session.loggedIn){
        res.render('index', {'stocks' : toSend});
    }else{
        res.send("Not Logged In Sorry");
    }
}

function login(req, res, next){
    let temp = req.body;
    if(req.session.loggedIn){
        res.status(200).send("Already logged in.");
    }
    let element = users.findIndex(x => x.username == temp.user);
    console.log(temp);
    console.log(element);
    if(element != -1){
        if(users[element].password == temp.pass){
            users[element].logged = true;
            req.session.username = users[element].username;
            req.session.loggedIn = true;
            res.status(200).send(true);
            //START SESSIONS HERE
        }else{
            res.status(409).send("password");
        }
    }else{
        res.status(200).send("username");
    }
}

function register(req, res, next){
    let temp = req.body;
    console.log(temp);
    if(req.session.loggedIn){
        return res.status(200).send("Already logged in.");
    }
    let element = users.findIndex(x => x.username == temp.username);
    console.log(element);
    if(element == -1){
        let creation = {'logged': true, 'password' : temp.password, 'username' : temp.username, 'accountBalance': 0.0, 'portfolio' : [], 'selling' : [], 'buying':[], 'watchlist': [], 'eventSub' : [], 'accountHistory' : [], 'admin': false};
        req.session.username = temp.username;
        req.session.loggedIn = true;
        users.push(creation);
        return res.status(200).send(true);
    }else{
        return res.status(409).send(false);
    }
}

function buyingShares(req, res, next){
    //If the user of selling is not temp, have to edit that users portfolio and the users orders
    //edit those amounts as well as their accountBalance
    //element is the stocksArray prefix
    //id is the uid of the certain selling spot
    //UserSpot is the user that is buying
    //CheckPort checks where in the portfolio the stock is, if its not there, will just add it onwards
    //sellerId is the sellers profile and have to edit the seller stuff
    //sellerPortfolio
    //sellerOrders
    let temp = req.body;
    console.log(temp);
    let element = stocksArray.findIndex(x => x.prefix == temp.prefix);
    console.log(element);
    let id = stocksArray[element].Selling.findIndex(x => x.uid == temp.uid);
    console.log(stocksArray[element].Selling[id]);
    let userSpot = users.findIndex(x => x.username == req.session.username);
    let sellerId = users.findIndex(x => x.username == stocksArray[element].Selling[id].user);
    if(users[userSpot].accountBalance == 0){
        return res.status(409).send("Not Enough Money");
        //return;
    }
    if(sellerId == -1){
        if(stocksArray[element].Selling[id].user != "temp"){
            return res.status(409).send("Error on seller side.");
        }
    }else{
        var sellerPortfolio = users[sellerId].portfolio.findIndex(x => x.stockPrefix == temp.prefix);
        var sellerOrders = users[sellerId].selling.findIndex(x => x.uid == temp.uid);
    }
    if(sellerId == -1 || sellerPortfolio == -1 || sellerOrders == -1){
        if(stocksArray[element].Selling[id].user != "temp"){
           return res.status(409).send("Error on seller side.");
            
        }
    }
    if(stocksArray[element].Selling[id].user == req.session.username){
        return res.status(409).send("cannot purchase from self");
    }
    let someTime = date.getHours();
    console.log(marketTime.closed < someTime);
    if(marketTime.opened < someTime && marketTime.closed < someTime && marketTime.forceOpen == false){
        return res.status(409).send("The market is Closed, cannot place purchase");
    }
    if(someTime < marketTime.opened && marketTime.forceOpen == false){
        return res.status(409).send("The market is Closed, cannot place purchase");
    }
    //Also gotta do a check for market time as well as edit the user
    if(temp.buying <= stocksArray[element].Selling[id].amount){
        if(users[userSpot].accountBalance >= stocksArray[element].Selling[id].pricing * temp.buying){
            var temporaryPrice = stocksArray[element].Selling[id].pricing;
            if(users[userSpot].portfolio.length > 0){
                let checkPort = users[userSpot].portfolio.findIndex(x => x.stockPrefix == temp.prefix);
                if(checkPort == -1){
                    values = {'stockPrefix': temp.prefix, 'owned': temp.buying, 'avgPrice' : stocksArray[element].Selling[id].pricing * temp.buying / temp.buying, 'total' : temp.buying, 'inOrders' : 0, 'totalPrices' : stocksArray[element].Selling[id].pricing * temp.buying};
                    users[userSpot].accountBalance -= temp.buying * stocksArray[element].Selling[id].pricing;
                    users[userSpot].portfolio.push(values);
                }else{
                    users[userSpot].portfolio[checkPort].owned += temp.buying;
                    users[userSpot].portfolio[checkPort].total += temp.buying;
                    users[userSpot].portfolio[checkPort].totalPrices += stocksArray[element].Selling[id].pricing * temp.buying;
                    users[userSpot].portfolio[checkPort].avgPrice = users[userSpot].portfolio[checkPort].totalPrices / users[userSpot].portfolio[checkPort].total;
                }
                //console.log("here");
            }else{
                values = {'stockPrefix': temp.prefix, 'owned': temp.buying, 'avgPrice' : stocksArray[element].Selling[id].pricing * temp.buying / temp.buying, 'total' : temp.buying, 'inOrders' : 0, 'totalPrices' : stocksArray[element].Selling[id].pricing * temp.buying};
                users[userSpot].accountBalance -= temp.buying * stocksArray[element].Selling[id].pricing;
                users[userSpot].portfolio.push(values);  
            }
            if(sellerId != -1){
                users[sellerId].accountBalance += (temp.buying * users[sellerId].selling[sellerOrders].pricing);
            }
            if(stocksArray[element].Selling[id].amount == temp.buying){
                if(stocksArray[element].Selling[id].user != "temp"){
                    stocksArray[element].Selling.splice(id, 1);
                    users[sellerId].selling.splice(sellerOrders, 1);
                    //console.log(users[sellerId].selling);
                    users[sellerId].portfolio[sellerPortfolio].owned -= temp.buying;
                    users[sellerId].portfolio[sellerPortfolio].inOrders -= temp.buying;
                    if(users[sellerId].portfolio[sellerPortfolio].owned == 0){
                        users[sellerId].portfolio.splice(sellerPortfolio, 1);
                    }
                }else{
                    stocksArray[element].Selling.splice(id, 1);
                }
            }else{
                if(stocksArray[element].Selling[id].user != "temp"){
                    console.log("WE LIKE MATH HEREEEEEEE");
                    console.log(users[sellerId].selling[sellerOrders].amount - temp.buying);
                    //users[sellerId].selling[sellerOrders].amount = users[sellerId].selling[sellerOrders].amount - temp.buying;
                    users[sellerId].portfolio[sellerPortfolio].owned -= temp.buying;
                    users[sellerId].portfolio[sellerPortfolio].inOrders -= temp.buying;
                }
                stocksArray[element].Selling[id].amount =  stocksArray[element].Selling[id].amount - temp.buying;
            }
            
        }else{
            return res.status(409).send("Not Enough Funds");
        }
        let today = date.getMonth()+"-"+date.getDate()+"-"+date.getFullYear();
        let stockHist = stocksArray[element].stockHist.findIndex(x => x.date == today);
        stocksArray[element].stockHist[stockHist].transactions++;
        let transHist1 = stocksArray[element].transHist.findIndex(x => x.date == today);
        if(transHist1 == -1){
            stocksArray[element].transHist.push({"date" : today, "transactions" : []});
            transHist1 = stocksArray[element].transHist.findIndex(x => x.date == today);
           //stocksArray[element].transHist[0].transactions.push({"buyer" : req.session.username, "seller" : users[sellerId].username, "price" : temporaryPrice, "amount" : temp.buying});
        }
        if(sellerId == -1){
            stocksArray[element].transHist[transHist1].transactions.push({"buyer" : req.session.username, "seller" : "tempUser", "price" : temporaryPrice, "amount" : temp.buying});
        }else{
            stocksArray[element].transHist[transHist1].transactions.push({"buyer" : req.session.username, "seller" : users[sellerId].username, "price" : temporaryPrice, "amount" : temp.buying});
        }
        console.log(stocksArray[element].transHist[transHist1]);
        return res.status(200).send("purchase successful");
    }else{
        return res.status(409).send("Error purchasing");
    }
}


function addWatch(req, res, next){
    let temp = req.body;
    let element = users.findIndex(x => x.username == req.session.username);
    let find = users[element].watchlist.findIndex(x => x.prefix == temp.prefix);
    console.log(element);
    if(find == -1){
        let stockIndex = stocksArray.findIndex(x => x.prefix == temp.prefix);
        users[element].watchlist.push({'prefix' : temp.prefix, 'currentPrice' : stocksArray[stockIndex].price, 'numberStocksTrades' : stocksArray[stockIndex].Selling.length});
        return res.status(200).send("Added to watchlist");
    }
    return res.status(405).send("Already in watchlist");
}

function cancelWatch(req, res, next){
    let temp = req.body;
    let element = users.findIndex(x => x.username == req.session.username);
    if(element == -1){
        res.status(409).send("Error with user");
    }
    let find = users[element].watchlist.findIndex(x => x.prefix == temp.spot);
    if(find == -1){
        res.status(409).send("Error with editing the watchlist");
    }
    users[element].watchlist.splice(find, 1);
    res.status(200).send("Cancellation complete");
}

function addSubscription(req, res, next){
    temp = req.body;
    temp.priceConstraint = parseFloat(temp.priceConstraint);
    let element = users.findIndex(x => x.username == req.session.username);
    //temp["eventSubID"] = eventSubID.toString();
    //eventSubID++;
    users[element].eventSub.push(temp);
    res.status(200).send("Subscription has been made");
}

function removeSub(req, res, next){
    let element = users.findIndex(x => x.username == req.session.username);
    users[element].eventSub.splice(req.body.remove, 1);
    res.status(200).send("Now has been removed");

}

function withdraw(req, res, next){
    let element = users.findIndex(x => x.username == req.session.username);
    users[element].accountBalance -= req.body.withdraw;
    res.status(200).send("Balance has been edited");
}

function deposit(req, res, next){
    let element = users.findIndex(x => x.username == req.session.username);
    users[element].accountBalance += req.body.deposit;
    res.status(200).send("Balance has been edited");
}

function activationType(req, res, next){
    let temp = req.body;
    //console.log(character);
    let element = users.findIndex(x => x.username == req.session.username);
    users[element].eventSub[temp.verify].activation = temp.activity;
    res.status(200).send("Alert has been changed");
}

function sellStock(req, res, next){
    temp = req.body;
    let element = users.findIndex(x => x.username == req.session.username);
    if(element == -1){
        res.status(409).send("Error with user");
    }
    let portfolioSpot = users[element].portfolio.findIndex(x => x.stockPrefix == temp.id);
    if(portfolioSpot == -1){
        res.status(409).send("Error with users portfolio");
    }
    if(users[element].portfolio[portfolioSpot].owned - users[element].portfolio[portfolioSpot].inOrders < temp.amount){
        res.status(405).send("Attempting to sell more than already in orders.");
        return;
    }
    let value = uuid();
    temp["user"] =  users[element].username;
    temp["uid"] = value;
    let find = stocksArray.findIndex(x => x.prefix == temp.id);
    stocksArray[find].Selling.push(temp);
    temp["type"] = "Selling";
    users[element].selling.push(temp);
    users[element].portfolio[portfolioSpot].inOrders += parseInt(temp.amount);
    console.log(users[element].portfolio[portfolioSpot]);
    res.status(200).send("Selling order complete");
}

function cancelSellOrder(req, res, next){
    temp = req.body;
    let element = users.findIndex(x => x.username == req.session.username);
    if(element == -1){
        res.status(409).send("Error Cancelling");
        return;
    }
    let orderUID = users[element].selling.findIndex(x => x.uid == temp.orderNum);
    if(orderUID == -1){
        console.log("ERROR ORDER");
        res.status(409).send("Error Cancelling");
        return;
    }
    let portSpot = users[element].portfolio.findIndex(x => x.stockPrefix == users[element].selling[orderUID].id);
    if(portSpot == -1){
        console.log("ERROR portspot");
        res.status(409).send("Error Cancelling");
        return;
    }
    let stockSpot = stocksArray.findIndex(x => x.prefix == users[element].selling[orderUID].id);
    if(stockSpot == -1){
        console.log("ERROR stockspot");
        res.status(409).send("Error Cancelling");
        return;
    }
    let sellSpot = stocksArray[stockSpot].Selling.findIndex(x => x.uid == temp.orderNum);
    if(sellSpot == -1){
        console.log("ERROR sell spot");
        res.status(409).send("Error Cancelling");
        return;
    }
    users[element].portfolio[portSpot].inOrders -= users[element].selling[orderUID].amount;
    users[element].selling.splice(orderUID, 1);
    stocksArray[stockSpot].selling.splice(sellSpot, 1);
    res.status(200).send("Order Cancelled");
}

function setOpen(req, res, next){
    marketTime.opened = req.body.time;
    console.log(marketTime);
    res.status(200).send("Open Time Changed");
}

function setClose(req, res, next){
    marketTime.closed = req.body.time;
    console.log(marketTime);
    res.status(200).send("Close Time Changed");
}

function toggleDay(req, res, next){
    if(marketTime.forceOpen == false){
        marketTime.forceOpen = true;
        res.status(200).send("Now Market is Forced Open");
    }else{
        marketTime.forceOpen = false;
        res.status(200).send("Forced Open has been toggled off");
    }
}

function setPriv(req, res, next){
    let element = users.findIndex(x => x.username == req.session.username);
    users[element].admin = false;
}

function placeOrder(req, res, next){
    let temp = req.body;
    let element = users.findIndex(x => x.username == req.session.username);
    let find = users[element].buying.findIndex(x => x.prefix == temp.prefix);
    if(find == -1){
        temp["type"] = "Buying";
        users[element].buying.push(temp);
        res.status(200).send("Order Has Been Placed");
    }else{
        res.status(405).send("Already have order placed for this stock");
    }
}

function cancelBuyOrder(req, res, next){
    temp = req.body;
    let element = users.findIndex(x => x.username == req.session.username);
    let find = users[element].buying.findIndex(x => x.id == temp.orderNum);
    if(find == -1){
        res.status(409).send("Error removing order");
    }else{
        users[element].buying.splice(find, 1);
        res.status(200).send("Order Cancelled");
        //console.log(character);
    }
}



function checkAdmin(req, res, next){
    temp = req.body;
    console.log(adminPass.localeCompare(temp.password));
    console.log(temp.password);
    let element = users.findIndex(x => x.username == req.session.username);
    if(adminPass.localeCompare(temp.password) == 0){
        users[element].admin = true;
        console.log(users[element].admin);
        res.status(200).send("canLog");
    }else{
        res.status(401).send("Unauthorized");
    }
}


app.listen(3000);
console.log("Server listening at http://localhost:3000");