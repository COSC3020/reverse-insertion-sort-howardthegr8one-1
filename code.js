function insertionSortReverse(arr) {
    for (var i = arr.length-2; i >= 0; i--) {
        // Invariant: the elements in arr[i..arr.length-1] are in sorted order
        var val = arr[i];
        var j;
        console.log(arr)
        for (j = i; j < arr.length && arr[j+1] < val; j++) {
            arr[j] = arr[j+1];
        }
        arr[j] = val;
    }
    return arr;
}
