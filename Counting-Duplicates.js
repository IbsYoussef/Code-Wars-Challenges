// 6kyu level

function duplicateCount(text){
    let x = text.toLowerCase()
    let Array = text.split('').sort()
    let counter = 0
    
    for (i = 0; i < text.length; i++){
        if (text[i] == text[i+1]) {
            counter += 1
        }
    }
    return counter
}

// change all character to lowercase with .toLowerCase ()

console.log('hello'.split('').sort().join(''))

var arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
var map = arr.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

// Final solution
function duplicateCount(text) {
    let characterCount = {}
    let duplicates = 0

    text.tolowerCase().split('').sort().forEach(i => {
        if (characterCount[i]) {
            characterCount[i]++
        } else {
            characterCount[i] = 1
        }
    })

    for (let j in characterCount) {
        if (characterCount[j] > 1) {
            duplicates ++
        }
    }

    return duplicates
}
