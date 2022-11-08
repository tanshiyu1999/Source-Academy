// Task 1A
function make_big_int_from_number(num) {
    if (num === 0) {
        return list(0);
    }
    
    let output = null;
    while (num !== 0) {
        let remainder = num % 10;
        if (is_null(output)) {
            output = list(remainder);
            num = (num - remainder)/10;
            continue;
        }
        
        output = append(output, list(remainder));
        num = (num - remainder)/10;
    }
    return output;
}
// make_big_int_from_number(24234);

// Task 1B
function big_int_to_string(lst) {
    let output = 0;
    let lstLen = length(lst);
    while(lstLen !== 0) {
        let temp = list_ref(lst, lstLen - 1);
        output = output * 10 + temp;
        lstLen = lstLen - 1;
    }
    return output;
}
// big_int_to_string(list(0));

// Task 1C
function big_int_add(lst1, lst2) {
    let a = big_int_to_string(lst1);
    let b = big_int_to_string(lst2);
    let c = a + b;
    return make_big_int_from_number(c);
}
// big_int_add(list(0), list(3, 2, 1));

// Task 1D
function big_int_mult_by_digit(lst, n) {
    let a = big_int_to_string(lst);
    let c = a * n;
    return make_big_int_from_number(c);
}
// big_int_mult_by_digit(list(0),5); 

// Task 1E
function big_int_mult_by_10_pow_n(lst, n) {
    let a = big_int_to_string(lst);
    let b = a * math_pow(10,n);
    return make_big_int_from_number(b);
}
// big_int_mult_by_10_pow_n(list(7,4,3), 3);

// Task 1F
function big_int_mult() {
    return 1;
}
// Same working
