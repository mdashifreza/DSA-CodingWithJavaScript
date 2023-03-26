function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
var summTree = function(root,left,r){
    let sum = 0;
    if(!root){
        return sum;
    }
    const traverse = function(root){
        if(root.val >= left && root.val <= right){
            sum += root.val;
        }
        if(root.left){
            traverse(root.left);
        }
        if(root.right){
            traverse(root.right);
        }
    }
    traverse(root);
return sum;
}
let root = [10,5,15,3,7,null,18], low = 7, high = 15;
TreeNode(root,low,high);
console.log(summTree(root,low,high));