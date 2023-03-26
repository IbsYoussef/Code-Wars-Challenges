function solution(nums){
   nums.sort(function(a,b) {
    return a - b
   })
   return nums
}

var array = [5,1,6]
var array2 = [6,1,4]
var array3 = [10,8,5]
console.log(solution(array))
console.log(solution(array2))
console.log(solution(array3))