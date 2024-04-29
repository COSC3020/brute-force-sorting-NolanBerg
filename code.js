function permutationSort(a) {
    let permutations = 0;
    let found = false;

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function generatePermutations(arr, start) {
        if (start === arr.length - 1) {
            permutations++;
            if (isSorted(arr)) {
                found = true;
                return;
            }
        }
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            generatePermutations(arr, start + 1);
            if (found) return; 
            swap(arr, start, i);
        }
    }

    generatePermutations(a, 0);
    return permutations;
}

module.exports = {
    permutationSort
};

