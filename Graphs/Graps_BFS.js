//argument that represents the entire G
const adjList = [[1,3], [0], [3,8], [0,2,4,5], [3,6], [3], [4,7], [6], [2]];

//Core BFS function
const traversalBFS = function(graph){
    //initialize a queue:
    const queue = [0]; //initial value
    const values = [];
    const seen = {} //an Object to store all the vertex we have seen;

    while(queue.length){
        const vertex = queue.shift();   // to get the first values inside out queue array
        values.push(vertex);            //push the values into the values array
        seen[vertex] = true;            //to insure not to double count this value

        const connections = graph[vertex]; //will give an array value that stored inside an array for the respective vertex
        for (let i = 0; i < connections.length; i++) {
           const connection = connections[i]; //we operate through these arrays in order
            if(!seen[connection]){
                queue.push(connection)
            }
        } 
    }
    return values;
}
