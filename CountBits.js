// 6Kyu

// Teamates Solution
var countBits = function(n) {
    let count = 0
    let binary = (n >>> 0).toString(2)
    for (i = 0; i < n.toString().length; i++) {
        if (n[i] = "1") {
            count ++
        }
    }
    console.log(count)
    return count
  
};

function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2)
}

console.log(decimalToBinary(14))

// My solution
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
