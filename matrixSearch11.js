var matrixSearch11 =  function(matrix, target){
    let row = matrix.length, col = matrix[0].length;
    let r = row - 1, c = 0;
    while(r >= 0 && c < col){
        if( target == matrix[r][c]){
            return true;
        }
        else if(target < matrix[r][c]){
                r--;
        }
        else{
            c++;
        }
    }
return false;
}
let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
console.log(matrixSearch11(matrix,target));