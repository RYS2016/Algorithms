/**
 * @param {number[][]} grid
 * @return {number}
 */

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
var orangesRotting = function(grid) {
    //sequential order?
    //how many possible rotting oranges to start on?
    //determen wether or not there are fresh oranges after rotten all other ranges
    //ways to keep track of fresh oranges left


    //find all of the 2 and all 1

    //Sequential order: first count fresh oranges and put rotten oranges into queue
    //BFS is right traversal order(implementation): first use queue size to track minutes, second process rotting oranges,
    //third: rot adjacent fresh oranges, fourth: push into queue, fifth: decrement fresh oranges count;


    //let count 2 and 1:
    const ROTTEN = 2;
    const FRESH = 1;
    const EMPTY = 0;

    //null check
    if(grid.length === 0) return 0;
    //Sequential ORDER
    const queue = [];
    let freshOranges = 0;

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){      //!!
            if(grid[row][col] === ROTTEN){
                queue.push([row, col]);
            }
            if(grid[row][col] === FRESH){
                freshOranges++;
            }
        }
    }
    //BFS IMPLEMENTATION
    let currentQueueSize = queue.length;
    let minutes = 0;

    while(queue.length > 0){
        if(currentQueueSize === 0){
            minutes++;
            currentQueueSize = queue.length;
        }
        const currentOrange = queue.shift();
        currentQueueSize--;
        const row = currentOrange[0];
        const col = currentOrange[1];

        for(let i = 0; i < directions.length; i++){
            const currentDir = directions[i];
            const nextRow = currentDir[0] + row;
            const nextCol = currentDir[1] + col;

            if(nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length){
                continue;
            }
            if(grid[nextRow][nextCol] === FRESH){
                grid[nextRow][nextCol] = 2;
                freshOranges--;
                queue.push([nextRow, nextCol]);
            }
        }
    }
    if(freshOranges > 0){
        return -1;
    }
    return minutes;
};
//T: O(n) S:O(n)