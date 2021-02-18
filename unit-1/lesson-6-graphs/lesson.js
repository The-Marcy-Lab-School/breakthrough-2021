class Graph {
  constructor(adjencyList = {}) {
    this.adjencyList = adjencyList;
  }

  addVertex(vertex) {
    if (!(vertex in this.adjencyList)) {
      this.adjencyList[vertex] = []
    } else {
      throw new Error(`Vertex already exists`)
    }
  }

  // how can we add an edge between 2 vertices
  // in other words, how can we code a "connection"
  addEdge(vertex1, vertex2) {
    if (vertex1 in this.adjencyList && vertex2 in this.adjencyList) {
      const vertex1Edges = this.adjencyList[vertex1];
      const vertex2Edges = this.adjencyList[vertex2];

      if (!vertex1Edges.includes(vertex2)) {
        vertex1Edges.push(vertex2)
      }

      if (!vertex2Edges.includes(vertex1)) {
        vertex2Edges.push(vertex1)
      }
    } else {
      throw new Error(`One or more vertices not present in graph`)
    }
  }

  // How would we remove an edge from a graph
  removeEdge(vertex1, vertex2) {
    let vertex1Edges = this.adjencyList[vertex1];
    let vertex2Edges = this.adjencyList[vertex2];

    this.adjencyList[vertex1] = vertex1Edges.filter(vertex => vertex !== vertex2)
    this.adjencyList[vertex2] = vertex2Edges.filter(vertex => vertex !== vertex1)
  }

  removeVertex(vertex) {
    // check to see if vertex exists
    if (!(vertex in this.adjencyList)) {
      throw new Error(`Vertex not present in graph`)
    }

    // grab vertex edges
    const vertexEdges = this.adjencyList[vertex]

    // remove edges
    for (const edge of vertexEdges) {
      // edge will be one of each of the edges contained for vertex

      // so know that we can get the list, we just need to filter out the vertex
      const currentVertexEdgesList = this.adjencyList[edge];
      this.adjencyList[edge] = this.adjencyList[edge].filter(vert => vert !== vertex);
    }


    // then delete
    delete this.adjencyList[vertex]
  }
}


let adjencyList = {
  'A': ['B', 'C', 'D'],
  'B': ['A'],
  'C': ['A', 'D'],
  'D': ['A', 'C']
}

const graph = new Graph(adjencyList)
