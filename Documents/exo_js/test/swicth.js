const outputEl = document.getElementById("outputEl");

let firstLevel = {
    name : "rakoto" ,
    age :  15 ,
    accountLevel : "normal" 
}

let secondLevel = {
    name :  "rasoa",
    age :  24 ,
    accountLevel :  "premium"
}
let thirdLevel = {
    name :  "ranavolona",
    age : 84,
    accountLevel :  "mega-premium"
}

for (const key in secondLevel) {
    console.log(key);
}

switch(thirdLevel.accountLevel){
    case 'normal':
        outputEl.innerText = "A normal account";
        break;
    case 'premium' :
        outputEl.innerText = "A premium account";
        break
    case 'mega-premium':
        outputEl.innerText = "A mega-premium account";
        break
    default : "IDK";
}