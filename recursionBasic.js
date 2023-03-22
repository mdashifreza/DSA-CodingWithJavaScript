//recusion sum of number given //
var recursionBasic = function(num){
    if(num === 1){
        return 1;
    }
    return num + recursionBasic(num-1);
}
console.log(recursionBasic(5));

var collectOddNum = function(oddArr){
    let result = [];
    var helper = function(oddArr){
        if(oddArr.length === 0){
            return ;
        }
        if(oddArr[0] % 2 !== 0){
            result.push(oddArr[0]);
        }
        helper(oddArr.slice(1));
    }
    helper(oddArr);
return result;
}
console.log(collectOddNum([1,2,3,4,5,6,7,8,9,10]));