// Reverse string Challenge

function solution(str){
    holderString = ""
    for (i = str.length - 1; i>=0; i--) {
        holderString += str[i]
    }
    console.log(holderString)
    return holderString
}

solution("hawiej")


function ReverseString(str) {

const revArray = [];
const length = str.length - 1;

for(let i = length; i >= 0; i--) {
    revArray.push(str[i]);
}

return revArray.join('');
}

console.log(ReverseString("Hello"))
