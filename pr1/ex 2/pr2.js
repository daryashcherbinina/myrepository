
function score(letter,first,second) {
    const props1 = Object.values(first);
    const props2 = Object.values(second);
    alert(letter == props1[0].charAt(0));
    let scoreF = 0;
    let scoreS = 0;
    for (let i = 0; i < props1.length; i += 1) {
            if (props1[i] == "" && props2[i] != "" && props1[i].charAt(0) == letter) {
                scoreS += 1;
            }
            if (props2[i] == "" && props1[i] != "" && props2[i].charAt(0) == letter) {
                scoreF += 1;
            }
            if (props1[i] != props2[i] && (props1[i] != "" || props2[i] != "")) {
                scoreF += 1;
                scoreS += 1;
            }
        }
        formTable(first,second,{scoreF}, {scoreS}, ".wrapper");
    }
    


function Random() {
    let s = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ'
    return s[Math.floor(Math.random()*28)];
}
const btn = document.getElementById('button');
const div = document.getElementById('letter');
btn.onclick = function () {
    div.innerHTML = Random();
}

function object() {
    
     //деструкторизация
    
    /*let values = {
        name: name.value,
        city: city.value,
        plant: plant.value,
        animal: animal.value,
        river: river.value
    };
    return values;*/
}
let values1;
let values2;
function retrieveFormValue(event) {
    event.preventDefault();
    let {form} = document.forms;
    let {name, city, plant, animal, river} = form;
    
    let letter = document.getElementById('letter').innerHTML;
    let player = document.getElementById('player').innerHTML;
    
    if (player == 1) {
        values1 = {
        name: name.value,
        city: city.value,
        plant: plant.value,
        animal: animal.value,
        river: river.value
    }
        player = 2;
        document.getElementById('player').innerHTML = player;
    }
    else {
        values2 = {
        name: name.value,
        city: city.value,
        plant: plant.value,
        animal: animal.value,
        river: river.value
        }
        player = 1;
        document.getElementById('player').innerHTML = player;
        div.innerHTML = Random();
        score(letter,values1,values2);
        
    }
    
    var inputs = document.querySelectorAll('input[type=text]');
    for (var i = 0;  i < inputs.length; i++) {
    inputs[i].value = '';
    }; 
    
}
form.addEventListener('submit', retrieveFormValue);

function formTable(first, second, scoreF, scoreS, selector) {
    var wrapper = document.querySelector(selector);
    var player1 = { player: '1' }
    var player2 = { player:'2' }
    const str1 = Object.assign(player1,first, scoreF);
    const str2 = Object.assign(player2,second, scoreS);
    const props1 = Object.values(str1);
    const props2 = Object.values(str2);
    console.log(first);
    var table = wrapper.getElementsByTagName("table")[0];
    var tr = document.createElement("tr"), td;
    for(let i = 0; i < props1.length; i += 1) {
      td = document.createElement("td");
      td.innerHTML = props1[i];
      tr.appendChild(td);
    }    
     table.appendChild(tr); 
    var table = wrapper.getElementsByTagName("table")[0];
    var tr = document.createElement("tr"), td;
    for(let j = 0; j < props2.length; j += 1) {
      td = document.createElement("td");
      td.innerHTML = props2[j];
      tr.appendChild(td);
    }    
    table.appendChild(tr); 
    
}


