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