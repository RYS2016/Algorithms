/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //if there is a cycle we can't finish courses
    //Verify the constraints
    //Test cases: 
    //BFS initial solutions (traversal)
   
     const adjList = new Array(numCourses).fill(0).map(() => []);  //setting up adjacensy list

    for(let i = 0; i < prerequisites.length; i++){   //setting up adjacensy list
        const pair = prerequisites[i];
        adjList[pair[1]].push(pair[0]);
    }

    for(let v = 0; v < numCourses; v++){
        const queue = [];
        const seen = {};

        for(let i = 0; i < adjList[v].length; i++){
            queue.push(adjList[v][i]);
        }
        while(queue.length){
            const current = queue.shift();
            seen[current] = true;
        
            if(current === v)return false;
            const adjacent = adjList[current];
            
            for(let k = 0; k < adjacent.length; k++){
                const next = adjacent[k];
                if(!seen[next]){
                    queue.push(next);
                }
            }
        }
    }
    return true;
};
//T: O(n)  S: 0(n)