var validPallinString = function(str){
    let left = 0, right = str.length-1;
    while(left <= right)
    {   
        if(str[left] != str[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let palindromicSubstring = function(str){
    let ans = [];
    let max = 0;
    if(validPallinString(str))
    {
        for(let i = 0; i<str.length;i++){
            for(let j=i; j<str.length; j++)
            {   
                let substr = str.substring(i,j+1)
                max = Math.max(max,substr.length);
                if(validPallinString(substr))
                {
                    ans.push(substr);
                }
            }
        }
        console.log(max)
    }
    else
    {
        return false;
    }
    return ans;
}
console.log(palindromicSubstring('abba'))