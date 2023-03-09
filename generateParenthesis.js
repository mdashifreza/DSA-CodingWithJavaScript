var generateParenthesis = function (n) {
    let stack = [];
    let ans = [];
    var backtracking = function (openN, closedN){
        if (openN == n && closedN == n)
        {
            ans.push(stack.join(''));
        }
        if (openN < n) 
        {
            stack.push('(');
            backtracking(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN)
        {
            stack.push(')');
            backtracking(openN, closedN + 1);
            stack.pop();
        }
    };
    backtracking(0, 0);
    return ans;
}

console.log(generateParenthesis(3));
