//We don't need queue, just an array since this is a recursive.

//argument that represents the entire G
//const adjList = [0,1,3,4,6,7,5,2,8]; //just for reference, the representation of edge order connection
const adjList = [[1,3], [0], [3,8], [0,2,4,5], [3,6], [3], [4,7], [6], [2]];

const reversalDFS = functoin(vertex, graph, values, seen){
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for(let i = 0; i < connections.length; i++){
        const connection = connections[i];
        if(!seen[connection]){
            reversalDFS(connection, graph, values, seen);
        }
    }
}
const values = [];
traversalDFS(0, adjacencyList, values, {});