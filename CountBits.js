// 6Kyu
var countBits = function(n) {
    let count = 0
    let binary = (n >>> 0).toString(2)
    let binaryArray = binary.split('')
    for (i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] = '1') {
            count ++
        }
    }
    console.log(binaryArray)
    console.log(count)
    return count
  
};

function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2)
}

console.log(decimalToBinary(14))

var countBits = function(n) {
    let x = (n).toString(2)
    let nw = x.split('')
    let final = 0

    for (let i = 0; i < nw.length; i++){
        final += Number(nw[i])
    }
    return final
  };

  console.log(countBits(1234))
