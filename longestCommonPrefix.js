var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = "";
    let curr = "";

    for (let i = 0; i < strs[0].length; i++) {
        curr = strs[0].charAt(i);

        for (let j = 0; j < strs.length; j++) {
            if (strs[j].charAt(i) !== curr) {
                return prefix;
            }
        }

        prefix += curr;
    }

    return prefix;
};
console.log(longestCommonPrefix(["fl", "flow", "flight"]))
const strs = ["fl", "flow", "flight"];
const expectedOutput = "fl";
const output = longestCommonPrefix(strs);
console.log(output === expectedOutput);