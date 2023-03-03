var removeDuplicateArr = function(nums){
    if(nums.length === 0) 
    {
        return 0;
    }
    let countUnique = 1;
    for (let j = 1; j < nums.length; j++)
    {
        if (nums[countUnique] !== nums[j])
        {
            countUnique++;
        }
    }
    return countUnique + 1;
};
console.log(removeDuplicateArr([]))
