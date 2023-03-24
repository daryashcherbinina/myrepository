let scoreFsum = 0; //создаем переменные с подсчетом суммы очков
let scoreSsum = 0;
function score(letter,first,second) { //функция подсчета очков
    const firstValues = Object.values(first); //переводим объекты в массивы
    const secondValues = Object.values(second);
    let scoreF = 0;
    let scoreS = 0;
    for (let i = 0; i < firstValues.length; i++) { // подсчет очков
            if (firstValues[i] != "" && firstValues[i].charAt(0) == letter && firstValues[i] != secondValues[i]) {
                scoreF += 1;
            }
            if (secondValues[i] != "" && secondValues[i].charAt(0) == letter && firstValues[i] != props2[i]) {
                scoreS += 1;
            }
    }
    scoreFsum += scoreF; //счетчик суммы очков каждого из игроков
    scoreSsum += scoreS;

    showTable(first,second,{scoreF}, {scoreS}, ".wrapper"); 
    
}
 function showWinner() { //вывод сообщения с победителем
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
function Random() { //генерация буквы
    let s = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    return s[Math.floor(Math.random()*28)];
}
const buttonStart = document.getElementById('start');
const letterPlace = document.getElementById('letter');
buttonStart.onclick = function () {
    letterPlace.innerHTML = Random();
    document.getElementById("start").disabled = true; 

}
let formValuesF;
let formValuesS;
function retrieveFormValue(event) { //обработка полученной формы
    event.preventDefault();
    let {form} = document.forms;
    let {name, city, plant, animal, river} = form;
    let letter = document.getElementById('letter').innerHTML;
    let obj= document.getElementById('player');
    let regexp = /(\d+)/i;
   let player = regexp.exec(obj.innerHTML)[0];
    if (player == 1) {
        formValuesF = {
        name: name.value.toUpperCase(),
        city: city.value.toUpperCase(),
        plant: plant.value.toUpperCase(),
        animal: animal.value.toUpperCase(),
        river: river.value.toUpperCase()
    }
        player = 2;
        obj.innerHTML = 'Игрок: ' +player+ ' ';
    }
    else {
        formValuesS = {
        name: name.value.toUpperCase(),
        city: city.value.toUpperCase(),
        plant: plant.value.toUpperCase(),
        animal: animal.value.toUpperCase(),
        river: river.value.toUpperCase()
        }
        player = 1;
        obj.innerHTML = 'Игрок: ' +player+ ' ';
        letterPlace.innerHTML = Random();
        score(letter,formValuesF,formValuesS);
        
    } 
    form.reset();
   
}
let buttonFinish = document.getElementById('finish');
buttonFinish.onclick = function () {
    showWinner();
    location.reload();
};
function showTable(first, second, scoreF, scoreS, selector) { //показ таблицы с результатами
    var wrapper = document.querySelector(selector);
    var playerF = { player: '1' } //записываем игроков в качестве объекта
    var playerS = { player:'2' }
    const strF = Object.assign(playerF ,first, scoreF); //совмещаем несколько объектов для создания строки таблицы
    const strS = Object.assign(playerS,second, scoreS);
    const valuesStrF = Object.values(strF); // создаем массивы из объектов
    const valuesStrS = Object.values(strS);
    var table = wrapper.getElementsByTagName("table")[0];
    var tr = document.createElement("tr"), td;
    for(let i = 0; i < valuesStrF.length; i++) { //создаем строку для первого игрока и заполняем значениями
      td = document.createElement("td");
      td.innerHTML = valuesStrF[i];
      tr.appendChild(td);
    }    
     table.appendChild(tr); 
    var table = wrapper.getElementsByTagName("table")[0];
    var tr = document.createElement("tr"), td;
    for(let j = 0; j < valuesStrS.length; j++) { //создаем строку для второго игрока и заполняем значениями
      td = document.createElement("td");
      td.innerHTML = valuesStrS[j];
      tr.appendChild(td);
    }    
    table.appendChild(tr); 
}

form.addEventListener('submit', retrieveFormValue);



