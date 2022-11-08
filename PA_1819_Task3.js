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

// Task 3B
// function count_islands(emap) {
//     let rLen = array_length(emap) - 1;
//     let cLen = array_length(emap[0]) - 1;
//     let memorised = [];
//     let island = [];
    
//     const makeLst = (r,c) => return list(pair(r-1,c-1), pair(r-1,c), pair(r-1, c+1),
//                                          pair(r, c-1), pair(r, c+1),
//                                          pair(r+1, c-1), pair(r+1, c), pair(r+1, c+1));
                                         
//     function 
                                         
    
//     for (let r = 0; r < rLen; r = r + 1) {
        
//         for (let c = 0; c < cLen; c = c + 1) {
//             let currentlst = filter(p => ((head(p) < 0) || (tail(p) < 0)), makeLst(r, c));
//         }
//     }
// }


function count_islands(emap) {
    // WRITE HERE.
    // ---BEGIN TASK---
    const R = array_length(emap);    // emap size is R x C.
    const C = array_length(emap[0]); // emap size is R x C.
    const label = [];                // 2D array for labelling islands.
    let island_count = 0;

    // The function island "floods" an entire island with
    // the label island_id, starting from the position (row, col).
    function label_island(row, col, island_id) {
        if ( row >= 0 && row < R && col >= 0 && col < C ) {
            if ( emap[row][col] !== 0 && label[row][col] === 0 ) {
                label[row][col] = island_id;
                label_island(row, col - 1, island_id);
                label_island(row, col + 1, island_id);
                label_island(row - 1, col, island_id);
                label_island(row + 1, col, island_id);
            } else {}
        } else {}
    }

    // The labels are initialized to 0.
    // The islands are going to be labelled from 1 onwards.
    for (let row = 0; row < R; row = row + 1) {
        label[row] = [];
        for (let col = 0; col < C; col = col + 1) {
            label[row][col] = 0;
        }
    }

    for (let row = 0; row < R; row = row + 1) {
        for (let col = 0; col < C; col = col + 1) {
            if (emap[row][col] !== 0 && label[row][col] === 0) {
                island_count = island_count + 1;
                label_island(row, col, island_count);
            } else {}
        }
    }
    return island_count;
    // ---END TASK---
}










