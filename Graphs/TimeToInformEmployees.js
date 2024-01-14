/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    //----------------------------N-ary TREE--------------
    //Verify the constraints:
    //cyclic?, unconnected?, weighted? directed?
    //no; can employeers have more than 1 manager - no;
    //Does every emp have a manager - yes

    //Test cases:
    /*
    n =8; headID = 4;
    managers = [2,2,4,6,-1,4,4,5];  -----------> 13
    informTIme = [0,0,4,0,6,7,3,6,0];
    --------------------------------------------------------------
    n = 1; headID = 0;
    managers = [-1];  -----------> 0
    informTIme = [0];
    --------------------------------------------------------------
    n = 7; headID = 6;
    managers = [1,2,3,4,5,6,-1];  -----------> 21
    informTIme = [0,6,5,4,3,2,1];
    ----------------------------------
    */
   //HINT: No G structure immidiatly to consider, because it is not explicilty clear
    //First read a question, then decide is it ADJ LIST or MATRIX
        //directed G 
        //base case
    //First we need to create an Adjacency List
    const adjList = manager.map(() => []);   //O(N)   O(N)
    for(let e = 0; e < n; e++){                 //O(N)    O(N)
        const currentManager = manager[e];
        if(currentManager === -1) continue;
        adjList[currentManager].push(e);
    }
    return dfs(headID, adjList, informTime);    //O(N)    O(N)
};

const dfs = function(currentID, adjList, informTime){
    //base cases:
    if(adjList[currentID].length === 0){
        return 0;
    }
    let max = 0;
    const subordinates = adjList[currentID];

    for(let i = 0; i < subordinates.length; i++){
        max = Math.max(max, dfs(subordinates[i], adjList, informTime))
    }
    return max + informTime[currentID];
    
};
//T: O(N), S: O(N)