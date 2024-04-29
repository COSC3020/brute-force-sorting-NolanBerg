function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function permute(arr, start, end, callback) {
    if (start === end) {
        callback(arr);
        return;
    }

    for (let i = start; i <= end; i++) {
        swap(arr, start, i);
        permute(arr, start + 1, end, callback);
        swap(arr, start, i);
    }
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function permutationSort(arr) {
    let permutationsTried = 0;

    permute(arr, 0, arr.length - 1, (permutedArr) => {
        permutationsTried++;
        if (isSorted(permutedArr)) {
            arr.splice(0, arr.length, ...permutedArr); 
        }
    });

    return permutationsTried;
}

module.exports = {
    permutationSort
};

