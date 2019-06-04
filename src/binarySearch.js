function binarySearch(array, target) {
    if (array[0] !== target && array.length > 1) {
        if (array[Math.floor(array.length / 2)] === target)
            return target;
        if (array[Math.floor(array.length / 2)] > target)
            return binarySearch(array.slice(0, Math.floor(array.length / 2)), target);
        if (array[Math.floor(array.length / 2)] < target)
            return binarySearch(array.slice(Math.floor(array.length / 2)), target);
    }
    if (array[0] === target)
        return target;
    return null;
}

var testArray = [];
for (let i = 0; i < 10000000; i++) {
    testArray.push(i);
}

binarySearch(testArray, 972000);