/* [[INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]]
*/
const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
//DFS Solution

//Scan use sequential order

const wallsAndGates = function(matrix){
    const WALL = -1;
    const GATE = 0;
    const EMPTY = 2147483647;
    //sequential order:
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === GATE){
                //DFS:
                dfs(matrix, row, col, 0);
            }
        }
    }
    return matrix;
}
//resursive function
const dfs = function(matrix, row, col, currentStep){

    if(row < 0 || row >= matrix.length || col < 0 || col <= matrix[0].length || currentStep < matrix[row][col]){
        return;
    }
    matrix[row][col] = currentStep;

    for(let i = 0; i < directions.length; i++){
        const currentDir = directions[i];
        dfs(matrix, row + currentDir[0], col + currentDir[i], currentStep)
    }
}
//T: O(n) S:O(n)