// Task 1A
function is_nucleobase(str) {
    if (str === "A" || str === "C" || str === "G" || str === "T") {
        return true;
    }
    return false;
}
// is_nucleobase("A");

// Task 1B
function is_dna_strand(lst) {
    return accumulate((s, acc) => (is_nucleobase(s) ? acc : false), true, lst);
}
// is_dna_strand(list("A", "G", "A")); // true

// Task 1C
function combine(lst) {
    return is_null(lst)
           ? null 
           : append(head(lst), combine(tail(lst)));
}
// combine(list(list("A", "G", "A"), list("G", "C", "T", "A"), list("C")));

// Task 1D
function oxoguanine_repair(lst) {
    return is_null(lst)
           ? null
           : (head(lst) === "8")
           ? pair("G", oxoguanine_repair(tail(lst)))
           : pair(head(lst), oxoguanine_repair(tail(lst)));
}
// oxoguanine_repair(list("A", "8", "A", "8", "C", "T", "A", "C"));

// Task 1E
function find_gene_start(lst) {
    let lstLen = length(lst);
    for (let i = 0; i < lstLen; i = i + 1) {
        if( (list_ref(lst,i) === "A") || (list_ref(lst,i+1) === "T") || (list_ref(lst,i+2) === "G") ) {
            
        }
    }
    
}

// Task 1F


