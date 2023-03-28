//O(logn)
var decToBin = function(nums){
    if(nums === 0){
        return 0;
    }
    let rem = '';
    while(nums !=0 ){
        rem = nums % 2 + rem; // 7%2 : 1 // 3%2 : 1 
        let ques = Math.floor(nums/2); // 7/2 :3  // 3/2 :1
        nums = ques; //nums:3//nums:1
    }
    let res = parseInt(rem);
return res;
}
let num = 7;
console.log(decToBin(num));
//recursively
