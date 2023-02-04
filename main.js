// Find Nearest Square Number Challenge
function nearestSquareNumber(num) {
    if (Math.sqrt(num)%1 == 0) {
        console.log(num)
        return num
    } else {
        let countUp = 0
    let numIteratorUp = num
    do {
        countUp ++
        numIteratorUp ++
    } while (Math.sqrt(numIteratorUp)%1 != 0)

    let countDown = 0
    let numIteratorDown = num
    do {
        countDown ++
        numIteratorDown --
    } while (Math.sqrt(numIteratorDown)%1 != 0)

    if (countUp < countDown) {
        console.log(numIteratorUp)
        return numIteratorUp
    } else if (countUp > countDown) {
        console.log(numIteratorDown)
        return numIteratorDown
    }
    }
    
    
}

// Test
nearestSquareNumber(6)
