// ide deklaráljátok a függvényeket.

function orderByCost(arr) {

  var i = arr.length - 1;
  var csere;
  while (i > 0) {
    csere = 0;
    for (var j = 0; j < i; j++) {
      if (arr[j].cost_in_credits > arr[j + 1].cost_in_credits) {
        [arr[j].cost_in_credits, arr[j + 1].cost_in_credits] = [arr[j + 1].cost_in_credits, arr[j].cost_in_credits];
        csere = j;
      }
    }
    i = csere;
  }
  return arr;
}

function deleteNull(arr) {
  var arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i].consumables !== 'null') {
      arr.push(arr[i]);
    }
  }
  return arr;
}

function NullToUnknown(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var k in arr[i]) {
      if (typeof arr[i][k] == 'null') {
        arr[i][k] = "unkown";
      }
    }
    return arr;
  }
}

function spaceShipList(arr) {
  var spaceship = document.querySelector(".spaceship-list")
  for (var k in arr) {
    arr.append(spaceship);
    spaceship.innerHTML = '<div class="spaceship-list">' + k + arr[k].value + '</div>';

  }
  return arr;
}


function displayOfArrayElements(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    for (var k in arr[i]) {
      result += k + " : " + arr[i][k] + " , " + "\n";//kiírja az összes key-t + hozzá a value-kat a tömbből
    }
    result += "\n";
  }
  return result;
}

function onePersonOnBoat(arr) {

  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i].crew === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

function carGoMax(arr) {

  var result = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].cargo_capacity > result.cargo_capacity) {
      result = arr[i];
    }
  }
  return result;
}

function allPassengers(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += parseInt(arr[i].passengers);
  }
  return result;
}

function maxLengthPicName(arr) {
  var result = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].lengthiness > result.lengthiness) {
      result = arr[i].image;
    }
  }
  return result;
}


function searchByName(arr) {
  var result = [];
  var arr = [];
  var search = document.querySelector('#search-text').textContent;
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var compNames = arr[i].model.localeCompare(arr[j].model);
      if (compNames > 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    if (search.toLowercase() == arr[i].toLowercase().indexOf().model) {
      result = arr[i];
    }
  }
  console.log(result);

}


function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
  var userDatas = JSON.parse(xhttp.responseText);
  // Innen lehet hívni.
  orderByCost(userDatas);
  deleteNull(userDatas);
  NullToUnknown(userDatas);
  console.log(userDatas);
  displayOfArrayElements(userDatas);
  onePersonOnBoat(userDatas);
  carGoMax(userDatas);
  allPassengers(userDatas);
  maxLengthPicName(userDatas);
  searchByName(userDatas);

}
getData('/json/spaceships.json', successAjax);

