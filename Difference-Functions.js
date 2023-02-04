// run a loop into the arrays
// if the value is in both then we remove if not then keep

/* Searching Array functions to tackle solutions 
array.remove(value);
delete array-name[ index ];
array-name.splice(removing index, number of values [, value1,value2,... ]); */

function arrayDiff(a, b) {
    let holderArray = []
  for (i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) == -1) {
          holderArray.push(a[i])
      }
  }
  console.log(holderArray)
  return holderArray
}

[4,5,7,8]
