function insert(str, substr, pos) { //вставляем подстроку в строку
    let array = str.split(''); //переводим строку в массив
    array.splice(pos, 0, substr);  //вставляем в массив подстроку
    return array.join('');  //возвращем строку 
}
let s = "'8'23'5'df'4'ty'3'";
let code = "";
for (let i = 0; i < s.length; i++) { //перебор элемнтов строки
    if (s[i] == "'") {                //если найдена ковычка
        for (let j = i + 1; j < s.length; j++) { //перебираем символы после ковычки
            if (s[j] == "'") {  //если встречаем ковычку
                s = insert(s, code, i);
                s = s.slice(0, i + code.length) + s.slice(j + 1 + code.length); //вырезаем ковычки с символами
                i = j + code.length - 1; //сдвигаем счетчик цикла вперед
                code = "";
                break;
            }
            code += String(s.charCodeAt(j)); //записываем в строку десятичный код символов между ковычками
        }
    }
}
console.log(s);


