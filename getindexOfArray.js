// get an item index from an array

const arr = [3, 40, 20, 4, 9, 47, 8];

// search 200

function getIndexFromArr(array1, item) {
    if (Array.isArray(array1)) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] === item) {
                return i;
            }
        }
        return -1;
    } else {
        throw new Error("invalid data type")
    }
}

console.log(getIndexFromArr(arr, 4))