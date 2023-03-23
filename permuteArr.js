var permuteArr =  function(nums){
    const res = [];
    if (nums.length === 1) {
        return [nums.slice()]; // [[3]] //
    }
    for (let i = 0; i < nums.length; i++) { //nums:1,2,3
        const n = nums.shift(); //n:1 // n:2
        const perms = permuteArr(nums);//perms:2,3  // 3 //
        for (let perm of perms) {// 3 // 
        perm.push(n); // 3 //2  // 3,2
        }
        res.push(...perms); //res:2,3,
        nums.push(n); // 2,3,1
    }
return res;
}
console.log(permuteArr([1,2,3]))