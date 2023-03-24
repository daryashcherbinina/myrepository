function insert(str, substr, pos) {
    var array = str.split('');
    array.splice(pos, 0, substr);
    return array.join('');
}
var s = "'8'23'5'df'4'ty'3'";
var code = "";
for (let i = 0; i < s.length; i++) {
    if (s[i] == "'") {
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] == "'") {
                s = insert(s, code, i);
                s = s.slice(0, i + code.length) + s.slice(j + 1 + code.length);
                i = j + code.length - 1;
                code = "";
                break;
            }
            code += String(s.charCodeAt(j));
        }
    }
}
console.log(s);


