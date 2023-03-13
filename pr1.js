var s = "123'56'df";
var cisl = "";
var num = "";
for (let i = 0; i < s.length; i++) {
    if (s[i] == "'") {
        for (let j = i+1; j < s.length; j++){
            if (s[j] == "'") {
                i = j;
                break;
            }
            cisl = String(s.charCodeAt(j));
            s[i] = cisl;
            alert(s[i]);
            
        }
    
    }
    
}

