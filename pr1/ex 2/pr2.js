class Person {
  constructor(letter, method) {
    this.letter = letter;
    this.metod = method;
  }
    check() {
        console.log(this.letter, this.metod);
    }
}
function check(object1, object2)
function Random() {
    let s = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ'
    return s[Math.floor(Math.random()*28)];
}
const btn = document.getElementById('button');
const div = document.getElementById('letter');
btn.onclick = function () {
    div.innerHTML = Random();
}

const {form} = document.forms;
function retrieveFormValue(event) {
    event.preventDefault();
    const {name, city, plant, animal, river} = form; //деструкторизация
    const values = {
        name: name.value,
        city: city.value,
        plant: plant.value,
        animal: animal.value,
        river: river.value
    };
    let letter = document.getElementById('letter').innerHTML;
    let player = document.getElementById('player').innerHTML;
    if (player == 1) {
        const One = new Person(letter,values);
         One.saySo();
        player = 2;
        document.getElementById('player').innerHTML = player;
    }
    else {
        const Two = new Person(letter,values);
        player = 1;
        document.getElementById('player').innerHTML = player;
        div.innerHTML = Random();
    }
    var inputs = document.querySelectorAll('input[type=text]');
    for (var i = 0;  i < inputs.length; i++) {
    inputs[i].value = '';
    };
}
form.addEventListener('submit', retrieveFormValue);

