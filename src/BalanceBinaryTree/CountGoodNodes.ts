/*
Given a binary tree root, a node X in the tree is named good if in the path from root to 
X there are no nodes with a value greater than X.Return the number of good nodes in the binary tree.

Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
function goodNodes(root: TreeNode | null): number {

    const dfs = (node: TreeNode, maxValue: number) => {
        if(!node){return 0;}
        // non empty node 
        let response = node.val >= maxValue ? 1 : 0;
        // update max 
        maxValue = Math.max(maxValue, node.val);
        response += dfs(node.left!, maxValue);
        response += dfs(node.right!, maxValue);
        return response;

    }

    return dfs(root!, root!.val);

}

