// Task 3A(I)
function count_lower_neighbors(emap, r , c) {
    let rLen = array_length(emap) - 1;
    let cLen = array_length(emap[0]) - 1;
    if (r === 0 || c === 0 || r === rLen || c === cLen) {
        return 0;
    }
    const checkSurround = list(pair(r-1,c-1), pair(r-1,c), pair(r-1, c+1),
                               pair(r, c-1), pair(r, c+1),
                               pair(r+1, c-1), pair(r+1, c), pair(r+1, c+1));
    let output = 0;
    // display_list(checkSurround)
    function helper(surround) {
        if (is_null(surround)) {
            return 1;
        } else {
            let x = head(head(surround));
            let y = tail(head(surround));
            if (n > emap[x][y]) {
                output = output + 1;
            }
            helper(tail(surround));
        }
    }
    let n = emap[r][c];
    helper(checkSurround);
    return output;
}
// const emap = [[3, 1, 1, 1, 1, 1, 1],
//               [1, 1, 1, 1, 2, 3, 1],
//               [1, 0, 3, 2, 1, 1, 0],
//               [1, 1, 1, 1, 3, 1, 1],
//               [1, 2, 1, 1, 3, 1, 3],
//               [1, 1, 1, 1, 4, 1, 1]];
// count_lower_neighbors(emap, 0, 0); // returns 0
// count_lower_neighbors(emap, 5, 4); // returns 0
// count_lower_neighbors(emap, 1, 1); // returns 1
// count_lower_neighbors(emap, 2, 2); // returns 8
 //count_lower_neighbors(emap, 2, 3); // returns 5
 
 // Task 3A(II)
 function count_peaks(emap) {
    let rLen = array_length(emap);
    let cLen = array_length(emap[0]);
    let totalPeak = 0;
    
    
    for (let r = 0; r < rLen; r = r + 1) {
        if (r === 0 || r === rLen - 1) {
            continue;
        }
        for (let c = 0; c < cLen; c = c + 1) {
            if (c === 0 || c === cLen - 1) {
                continue;
            }
            let total = count_lower_neighbors(emap, r, c);
            if (total === 8) {
                totalPeak = totalPeak + 1;
            }
        }
    }
    return totalPeak;
 }
 
// const emap = [[3, 1, 1, 1, 1, 1, 1],
//               [1, 1, 1, 1, 2, 3, 1],
//               [1, 0, 3, 2, 1, 1, 0],
//               [1, 1, 1, 1, 3, 1, 1],
//               [1, 2, 1, 1, 3, 1, 3],
//               [1, 1, 1, 1, 4, 1, 1]];
// count_peaks(emap);