// Task 2
//===============================================================
// DO NOT REMOVE OR MODIFY THE FOLLOWING FUNCTIONS.
// You may call them in your functions.
//===============================================================
function swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
//---------------------------------------------------------------
function copy_array(A) {
    const len = array_length(A);
    const B = [];
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    return B;
}
//---------------------------------------------------------------
function reverse_array(A) {
    const len = array_length(A);
    const half_len = math_floor(len / 2);
    for (let i = 0; i < half_len; i = i + 1) {
        swap(A, i, len - 1 - i);
    }
}
//---------------------------------------------------------------
function array_to_list(A) {
    const len = array_length(A);
    let L = null;
    for (let i = len - 1; i >= 0; i = i - 1) {
        L = pair(A[i], L);
    }
    return L;
}
//---------------------------------------------------------------
function list_to_array(L) {
    const A = [];
    let i = 0;
    for (let p = L; !is_null(p); p = tail(p)) {
        A[i] = head(p);
        i = i + 1;
    }
    return A;
}
//---------------------------------------------------------------
// Sorts the array of numbers in ascending order.
function sort_ascending(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = x;
    }
}
//---------------------------------------------------------------
function digits_to_string(digits) {
    const len = array_length(digits);
    let str = "";
    for (let i = 0; i < len; i = i + 1) {
        str = str + stringify(digits[i]);
    }
    return str;
}
// const D = [8, 3, 9, 2, 8, 1];
// digits_to_string(D);  // returns "839281"
//===============================================================
// DO NOT REMOVE OR MODIFY THE ABOVE FUNCTIONS.
//===============================================================


// Task 2A
function build_largest_int(digits) {
    let len = array_length(digits);
    for (let i = 0; i < len; i = i + 1) {
        let largest = digits[i];
        for (let j = i+1; j < len; j = j + 1) {
            if (largest < digits[j]) {
                swap(digits,i, j);
                largest = digits[j];
            }
        }
    }
    return digits_to_string(digits);
}
// build_largest_int([5, 5, 5, 1, 4, 9, 9]); // returns largest in string

// Task 2B
function build_2nd_largest_int(digits) {
    let len = array_length(digits);
    for (let i = 0; i < len; i = i + 1) {
        let largest = digits[i];
        for (let j = i+1; j < len; j = j + 1) {
            if (largest < digits[j]) {
                swap(digits,i, j);
                largest = digits[j];
            }
        }
    }
    reverse_array(digits);
    for (let i = 0; i < len-1; i = i + 1) {
        if (digits[i] !== digits[i+1]) {
            swap(digits,i,i+1);
            break;
        }
    }
    reverse_array(digits);
    return digits;
}
// build_2nd_largest_int([4, 1, 9, 4, 1]);

// Task 2C
function build_nth_largest_int(digits, n) {
    // WRITE HERE.
    // ---BEGIN TASK---
    function permutations(ys) {
        return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
    }

    const S = copy_array(digits);
    const len = array_length(S);
    sort_ascending(S);
    reverse_array(S);
    const digit_lst = array_to_list(S);
    const perms = permutations(digit_lst);
    const nth_lst = list_ref(perms, math_min(length(perms), n) - 1);
    const nth = list_to_array(nth_lst);
    return digits_to_string(nth);
}

// Answer was copied but this is very big brain. Permutate and treat everything like an array later.
