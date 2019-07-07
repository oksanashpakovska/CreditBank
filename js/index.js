document.getElementById('mydiv').style.color = "black"; 
document.getElementById('mydiv').style.backgroundColor = "white";
document.getElementById('mydiv').style.fontFamily = "Arial";

var ClientDB = ["ClientInfo"];

function GetData() {
  var name = document.querySelector(".name").value;
  var surname = document.querySelector(".surname").value;
  var amount = parseInt(document.querySelector(".amount").value);
  var period = parseInt(document.querySelector(".period").value);
  var id = parseInt(document.querySelector(".id").value);
  var ShowPersonInfo = Validate();
  ShowPersonInfo(name, surname, amount, period, id);
}

function Validate() {

  var rate = 12;

  return function (name, surname, amount, period, id) {

    if (name.length < 3 || name.length > 16) {
      var error = document.querySelector(".error");
      error.innerHTML = "Incorrect input name.";
    } else if (surname.length < 3 || surname.length > 16) {
      var error = document.querySelector(".error");
      error.innerHTML = "Incorrect input surname.";
    } else if (amount > 50000) {
      var error = document.querySelector(".error");
      error.innerHTML = "To match.";
    } else if (period > 24 || period < 6) {
      var error = document.querySelector(".error");
      error.innerHTML = "To Few!.";
    } 
    else {
      console.log("Success!");
      SaveData(name, surname, amount, period);
    }
  };
 
}


function SaveData(name, surname, amount, period) {
  ClientDB.push(name);
  ClientDB.push(surname);
  ClientDB.push(amount);
  ClientDB.push(period);
  ClientDB.push("|");
  //ShowPersonInfo();
}


function ShowPersonInfo (){
  ClientDB.forEach(function(item, key){
    console.log(item, " ", key);
  })
  console.log("ClinetDB length", ClientDB.length);
  console.log("==============================>>>>>");
  console.log("New Client Added");
}



function Request() {
  var xhr = new XMLHttpRequest();

  var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  xhr.open("GET", url, true);
  //xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      ShowCurrency(data);
      //var data = xhr.responseText;
      //console.log(data);
    }
  };
}

function ShowCurrency(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(` ${data[i].ccy} => ${data[i].base_ccy} Buy ${data[i].buy} Sell ${data[i].sale} `);
  }
  USD.innerHTML = USD.innerHTML.replace('00,0000', data[0].buy);
  EUR.innerHTML = EUR.innerHTML.replace('00,0000', data[1].buy);
  RUR.innerHTML = RUR.innerHTML.replace('00,0000', data[2].buy);
  BTC.innerHTML = BTC.innerHTML.replace('00,0000', data[3].buy);
  U.innerHTML = U.innerHTML.replace('00,0000', data[0].sale);
  E.innerHTML = E.innerHTML.replace('00,0000', data[1].sale);
  R.innerHTML = R.innerHTML.replace('00,0000', data[2].sale);
  B.innerHTML = B.innerHTML.replace('00,0000', data[3].sale);
  }
  // var root = document.querySelector("#root");
  // console.log(root);
  
  // var divElement = document.createElement("div");
  // divElement.innerHTML = "New Element";
  // divElement.className = "new";
  // // divElement.setAttribute("href", "https://i.ua");
  // // divElement.removeAttribute('href');
  
  // divElement.setAttribute("style", "cursor: pointer; font-weight: bold");
  
  // console.log(divElement);
  
  // root.appendChild(divElement);
  
  // ///////
  
  // var ul = document.createElement("ul");
  // ul.className = "list";
  
  // var li = document.createElement("li");
  
  // var a = document.createElement("a");
  // a.setAttribute("href", "https://ukr.net");
  // a.setAttribute("title", "ukr.net");
  // a.setAttribute("target", "_blank");
  // a.innerHTML = "ukr.net";
  
  // ul.appendChild(li);
  // li.appendChild(a);
  
  // root.appendChild(ul);
  // console.log(ul.parentElement.childNodes);
  // //ul.parentElement.firstElementChild.remove(); 
  // console.log(ul.parentElement.childElementCount);
  // ul.parentElement.removeChild(divElement);
  
  // console.log(ul.parentElement.hasChildNodes);
  // var userlost = document.querySelector(userlost);
  var div = document.createElement("div");
  div.userlost
  
function toggleNightMode() {
  var color = document.getElementById('mydiv').style.color;

  var backgroundColor = document.getElementById('mydiv').style.backgroundColor;


  if (color == "black" && backgroundColor == "white") {
    document.getElementById('mydiv').style.color = "white";
    document.getElementById('mydiv').style.backgroundColor = "black";
    document.getElementById('mydiv').style.fontFamily = "Arial";

  } else {
    document.getElementById('mydiv').style.color = "black";
    document.getElementById('mydiv').style.backgroundColor = "white";
    document.getElementById('mydiv').style.fontFamily = "Arial";
  }
}
