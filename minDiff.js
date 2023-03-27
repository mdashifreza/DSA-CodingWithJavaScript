var luckyNumbers  = function(matrix) {
    let minRow = [];
    let maxCol = [];
    for(let i=0; i<matrix.length; i++){
        let min = Infinity;
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] < min){
                min = matrix[i][j];
            }
        }
    minRow.push(min);
    }
    for(let i=0; i<matrix.length; i++){
        let max = -Infinity;
        for(let j=0; j<matrix[0].length; j++){
            if(max < matrix[j][i]){
                max = matrix[j][i];
            }
        }
    maxCol.push(max);
    }
    let result = [];
    console.log(minRow);
    console.log(maxCol);
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){  
            if(minRow[i] === matrix[i][j] && maxCol[j] === matrix[i][j]){
                result.push(matrix[i][j]);
            }
        }
    }
return result;
};
let matrix1 = [
                [3,7,8],
                [9,11,13],
                [15,16,17]
            ];
console.log(luckyNumbers(matrix1));