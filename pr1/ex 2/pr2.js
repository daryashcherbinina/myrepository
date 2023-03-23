let scoreFsum = 0;
let scoreSsum = 0;
function score(letter,first,second) {
    const props1 = Object.values(first);
    const props2 = Object.values(second);
    let scoreF = 0;
    let scoreS = 0;
    for (let i = 0; i < props1.length; i++) {
            if (props1[i] != "" && props1[i].charAt(0) == letter && props1[i] != props2[i]) {
                scoreF += 1;
            }
            if (props2[i] != "" && props2[i].charAt(0) == letter && props1[i] != props2[i]) {
                scoreS += 1;
            }
    }
    scoreFsum += scoreF;
    scoreSsum += scoreS;

    formTable(first,second,{scoreF}, {scoreS}, ".wrapper");
    
}
 function showWinner() {
     if (scoreFsum > scoreSsum) {
         alert("Игрок 1 победил!")
     }
     else if (scoreSsum > scoreFsum) {
         alert("Игрок 2 победил!")
     }
     else {
         alert("Ничья!")
     }
 }
function Random() {
    let s = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    return s[Math.floor(Math.random()*28)];
}
const btn = document.getElementById('button');
const div = document.getElementById('letter');
btn.onclick = function () {
    setTimeout(timer,1000);
    div.innerHTML = Random();
}

let values1;
let values2;
const btn2 = document.getElementById('tim');

function retrieveFormValue(event) {
    event.preventDefault();
    let {form} = document.forms;
    let {name, city, plant, animal, river} = form;
    
    let letter = document.getElementById('letter').innerHTML;
    let player = document.getElementById('player').innerHTML;
    if (player == 1) {
        values1 = {
        name: name.value.toUpperCase(),
        city: city.value.toUpperCase(),
        plant: plant.value.toUpperCase(),
        animal: animal.value.toUpperCase(),
        river: river.value.toUpperCase()
    }
        player = 2;
        document.getElementById('player').innerHTML = player;
    }
    else {
        values2 = {
        name: name.value.toUpperCase(),
        city: city.value.toUpperCase(),
        plant: plant.value.toUpperCase(),
        animal: animal.value.toUpperCase(),
        river: river.value.toUpperCase()
        }
        player = 1;
        document.getElementById('player').innerHTML = player;
        div.innerHTML = Random();
        score(letter,values1,values2);
        
    } 
    setTimeout(timer,1000);
    form.reset();
    
}


var buttonEnd = document.getElementById('end');
buttonEnd.onclick = function () {
   showWinner();
    location.reload();
};
function formTable(first, second, scoreF, scoreS, selector) {
    var wrapper = document.querySelector(selector);
    var player1 = { player: '1' }
    var player2 = { player:'2' }
    const str1 = Object.assign(player1,first, scoreF);
    const str2 = Object.assign(player2,second, scoreS);
    const props1 = Object.values(str1);
    const props2 = Object.values(str2);
    var table = wrapper.getElementsByTagName("table")[0];
    var tr = document.createElement("tr"), td;
    for(let i = 0; i < props1.length; i++) {
      td = document.createElement("td");
      td.innerHTML = props1[i];
      tr.appendChild(td);
    }    
     table.appendChild(tr); 
    var table = wrapper.getElementsByTagName("table")[0];
    var tr = document.createElement("tr"), td;
    for(let j = 0; j < props2.length; j++) {
      td = document.createElement("td");
      td.innerHTML = props2[j];
      tr.appendChild(td);
    }    
    table.appendChild(tr); 
    
}

 function timer(){	

    var obj=document.getElementById('timer');
    var regexp = /(\d+)/i;
    var RealTimer = regexp.exec(obj.innerHTML)[0];
    
    if (--RealTimer < 0) RealTimer = 0;

    obj.innerHTML = 'Осталось ' +RealTimer+' секунд';
    
    if (RealTimer==0) { 
        
        document.getElementById("form").submit();
        return; 
    }
    else { setTimeout(timer,1000); }
  }	
form.addEventListener('submit', retrieveFormValue);




