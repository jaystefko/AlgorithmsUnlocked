import Node from './node'

// This is pointed, acyclical graph
class Graph {
  constructor(nodeData = []) {
    this.nodes = []

    nodeData.forEach((node, index) => {
      this.nodes.push(new Node(index, node.data, node.pointsTo))
    })
  }
}

export default Graph
