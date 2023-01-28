### Graph
---
- A Graph is a non-linear data structure that represents a set of connected elements, called nodes or vertices.
- These nodes can be connected by edges, which can be directed or undirected.
- A graph can be represented by an adjacency matrix or an adjacency list.
- There are several types of Graphs such as Simple Graph, Directed Graph, Undirected Graph, Weighted Graph, Cyclic Graph, Acyclic Graph.
- Graphs can be implemented in C using adjacency list, adjacency matrix, or edge list.
- Graphs can be used to represent any type of relationship between elements.
- Graphs can be used to find the shortest path, check connectivity, and detect cycles.
- Applications of Graphs include social networks, web pages, transportation systems, and many more.


#### There are several types of Graphs:
---
- Simple Graph: A Simple Graph is a graph with no self-loops or multiple edges between the same pair of nodes.

- Directed Graph: A Directed Graph is a graph in which edges have a direction, meaning they can be traversed in only one direction.

- Undirected Graph: An Undirected Graph is a graph in which edges have no direction, meaning they can be traversed in both directions.

- Weighted Graph: A Weighted Graph is a graph in which edges have a weight or a cost associated with them.

- Cyclic Graph: A Cyclic Graph is a graph that contains a cycle, meaning there exists at least one path from a node back to itself.

- Acyclic Graph: An Acyclic Graph is a graph that does not contain any cycles, meaning there is no path from a node back to itself.

#### Here's an example of a simple graph implementation in C using an adjacency list:

```
#include <stdio.h>
#include <stdlib.h>

struct AdjListNode {
    int dest;
    struct AdjListNode* next;
};

struct AdjList {
    struct AdjListNode* head;
};

struct Graph {
    int V;
    struct AdjList* array;
};

struct Graph* createGraph(int V) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->V = V;
    graph->array = (struct AdjList*)malloc(V * sizeof(struct AdjList));
    int i;
    for (i = 0; i < V; i++)
        graph->array[i].head = NULL;
    return graph;
}

struct AdjListNode* newAdjListNode(int dest) {
    struct AdjListNode* newNode = (struct AdjListNode*)malloc(sizeof(struct AdjListNode));
    newNode->dest = dest;
    newNode->next = NULL;
    return newNode;
}

void addEdge(struct Graph* graph, int src, int dest) {
    struct AdjListNode* newNode = newAdjListNode(dest);
    newNode->next = graph->array[src].head;
    graph->array[src].head = newNode;
}

int main() {
    int V = 5;
    struct Graph* graph = createGraph(V);
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 4);
    addEdge(graph, 1, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 3);
    addEdge(graph, 3, 4);
    return 0;
}

```

#### Advantages
---
- They can be used to represent any type of relationship between elements
- They can be used to find the shortest path between two nodes
- They can be used to check connectivity between nodes
- They can be used to detect cycles
- They can be used to model and solve real-world problems
  
#### Disadvantages
---
- The memory and time complexity of graph algorithms can be high
- Graphs can be difficult to implement and debug

#### Applications
---
- Social networks
- Web pages
- Transportation systems
- GPS navigation
- Maps
- Routing protocols
- Network topology
- Computer Science (Compiler Design, Parsing, etc)
- Artificial Intelligence (AI)
- Operations Research
- Computer Graphics
- Computer Vision
- Cryptography
- Game Development