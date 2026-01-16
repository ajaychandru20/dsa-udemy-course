function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        // Last i elements are already in place, so reduce inner loop range
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements using a temporary variable
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no two elements were swapped in inner loop, array is sorted
        if (!swapped) {
            break;
        }

        // Output after each pass using template literals
        console.log(`After pass ${i + 1}: [${arr.join(", ")}]`);
    }
    return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numbers);
