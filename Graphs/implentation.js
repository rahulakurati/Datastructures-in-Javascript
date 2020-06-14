function Node(val){
    this.val = val;
    this.next = null;
}

function Graph() {
    let adjList = [];

    // adjMatrix
    // adjList
    // addVertex(v)
    this.addVertex = function(val) {
        let node = new Node(val);
        adjList.push(node);
    }

    // addEdge(val1, val2)
    this.addEdge = function(n1, n2) {
        let node1 = this.searchList(n1);
        let node2 = this.searchList(n2);
        this.insertNode(node1, new Node(node2.val));
        this.insertNode(node2, new Node(node1.val));
    }

    // searchList(n)
    this.searchList = function(n) {
        for(let i=0;i<adjList.length;i++){
            if(adjList[i].val == n)
                return adjList[i];
        }
        return -1;
    }

    // insertNode(srcNode, newNode)
    this.insertNode = function(srcNode, newNode){
        let temp = srcNode.next;
        srcNode.next = newNode;
        newNode.next = temp;
    }


    // printGraph() 
    this.printGraph = function(){
        console.log("Printing Graph in Adjacent list");
        for(let i=0;i<adjList.length;i++){
            let out = adjList[i].val;
            let current = adjList[i].next;
            while (current){
                out += `-->${current.val}`;
                current = current.next;
            }
            console.log(out);
        }
    }
  
    // bfs(v) 
    this.bfs = function(val) {
        let isVisited = new Set();
        
        let node = this.searchList(val);
        isVisited.add(node.val);

        //queue
        let q = [node];

        console.log("PRINTING BFS");
        while(q.length != 0) {
            node = q.shift(); //remove entry from begining of array
            console.log(node.val);
            node = this.searchList(node.val); //search the node in adj list
            let current = node.next;
            while (current != null) {
                if(!isVisited.has(current.val)) {
                    q.push(current);
                    isVisited.add(current.val);
                }  
                current = current.next;
            }
        }

    }

    // dfs(v)
    this.dfs = function(val){
        let isVisited = new Set();
        
        let node = this.searchList(val);

        //stack
        let s = [node];

        console.log("PRINTING DFS");
        while(s.length != 0) {
            node = s.pop(); //remove entry from end of array
            if(!isVisited.has(node.val)) {
                console.log(node.val);
            }
            isVisited.add(node.val); // node should mark as visited only when it is about to print. this is the difference between bfs abd dfs
            node = this.searchList(node.val); //search the node in adj list
            let current = node.next;
            while (current != null) {
                if(!isVisited.has(current.val)) {
                    s.push(current);
                }  
                current = current.next;
            }
        }
    }
}

var g = new Graph(); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
  
// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
g.printGraph(); 

g.bfs('B');
g.dfs('A');