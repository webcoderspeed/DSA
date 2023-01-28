### Question Paper
---

#### 1) the postorder traversal of a binary tree is 8,9,6,7,4,5,2,3,1. The inorder traversal of the same tree is 8,6,9,4,7,2,5,1,3. The height of a tree is the length of the longest path from the root to any leaf. The height of the binary tree above is _____?
#### Ans: 
```
The height of the binary tree in the given example is 4.

To understand why this is the case, we can visualize the tree and trace the longest path from the root to a leaf. The longest path in this case is:
1 (root) -> 3 (right child of 1) -> 5 (right child of 3) -> 7 (right child of 5)

We can see that this path consists of 4 nodes (1, 3, 5, 7) and so the height of the tree is 4.
```


#### 2) The following function reverse() is supposed to reverse a single linked list. There is one line missing at the end of the function?
#### Ans: 
```
void reverse(struct node** head_ref) {
    struct node* prev = NULL;
    struct node* current = *head_ref;
    struct node* next;
    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    // Missing line:
    *head_ref = prev;
}


The missing line at the end of the function is *head_ref = prev;
This line is important because it updates the head of the list to point to the last element of the original list, effectively reversing the list.

For example, if the original list is: 1 -> 2 -> 3 -> 4
After calling reverse() function, the list should be : 4->3->2->1

*head_ref is the reference to the head of the list, so it needs to be updated with the new head after reversing the list.

```

#### 3) What is AVL tree?
#### Ans: 
  - AVL tree is a self-balancing binary search tree
  - The difference in the height of the left and right subtrees of any node is at most 1, which helps to keep the tree balanced
  - AVL tree is named after its inventors Adelson-Velsky and Landis
  - AVL tree are used in many applications such as databases, file systems, and programming languages to store and efficiently retrieve data.
  - Time complexity of basic operations such as insertion, deletion, and searching remains O(log n) in AVL tree
  - AVL tree maintain balance by making sure that the height difference of the left and right subtrees is not more than 1.
  - AVL tree are more balanced than a normal binary search tree and hence the time complexity of operations on AVL tree is more efficient
  - The tree is able to maintain balance by rotating nodes in the tree when insertions and deletions cause the tree to become unbalanced.




#### 4) What is Priority Queue?
#### Ans: 
- A priority queue is a type of queue in which each element is assigned a priority
- Elements with higher priority are dequeued before elements with lower priority
- If two elements have the same priority, they are served according to their order in the queue
- Priority queues can be implemented using various data structures such as an array, a linked list, a heap data structure, etc.
- Common operations on a priority queue include inserting an element, deleting the highest priority element, and checking the highest priority element
- Priority queues are used in many algorithms such as Dijkstra's shortest path algorithm, Prim's minimum spanning tree algorithm, Huffman coding, etc.
- In computer science, a priority queue can be seen as a specialized version of a queue in which each element is associated with a priority and is served according to its priority
- It can be implemented in various forms such as min-priority queue and max-priority queue
- the priority queue can be used in real-time systems, schedulers, and many other applications where elements need to be processed in order of priority.


#### 5) How the selection of a particular data structure is done to solve a problem?
#### Ans: 
The selection of a particular data structure for a problem is typically done based on the following considerations:

- The type of operations that will be performed: Different data structures are better suited for different types of operations. For example, if the main operation is searching, a data structure such as a hash table or a balanced binary search tree would be more efficient than a linked list.

- The amount of data: The amount of data that needs to be stored and manipulated will also affect the choice of data structure. For example, if the data set is very large, a data structure that uses disk storage, such as a B-tree, would be more appropriate than one that stores all the data in memory.

- Time and space complexity: The time and space complexity of the different data structures should be considered. In general, the goal is to use a data structure that has the lowest time and space complexity for the given problem.

- Scalability: The data structure should be able to handle the growth of data over time.

- Convenience: The ease of implementation, debugging and maintainability of the data structure should be considered.

- Trade-offs: The selection of data structure also depends on the trade-offs between the time and space complexity of the data structure and the time and space complexity of the operations that need to be performed on the data.

Ultimately, the decision on which data structure to use will depend on the specific requirements of the problem and the trade-offs that need to be made.


#### 6) What do you mean by best, average and worst case of an algorithm?
#### Ans: 
When analyzing the performance of an algorithm, it's common to consider three different scenarios: best-case, average-case, and worst-case.

- Best-case scenario: This is the scenario where the algorithm performs the best, that is the inputs are already sorted or the algorithm finds the solution in the least number of steps. The best-case scenario is usually represented by the best-case time complexity of an algorithm, which is the lowest amount of time the algorithm will take to complete when given the best possible input.

- Average-case scenario: This is the scenario where the algorithm is given a random set of inputs. The average-case time complexity of an algorithm is the expected amount of time the algorithm will take to complete when given a random set of inputs.

- Worst-case scenario: This is the scenario where the algorithm performs the worst, that is the inputs are in the worst possible order or the algorithm takes the longest number of steps to find the solution. The worst-case scenario is usually represented by the worst-case time complexity of an algorithm, which is the highest amount of time the algorithm will take to complete when given the worst possible input.

It's important to note that the best-case and worst-case scenarios are usually used to provide an upper and lower bound on the performance of an algorithm, respectively. The average-case scenario is usually the most relevant when analyzing the performance of an algorithm in practice.

#### 7) Write selection sort algorithm?
#### Ans: 
Selection sort is a simple sorting algorithm that repeatedly selects the minimum element from an unsorted portion of the list and moves it to the sorted portion of the list. The algorithm proceeds as follows:

- Starting at the first element of the list, find the smallest element in the unsorted portion of the list.

- Swap the found element with the first element of the unsorted portion of the list.

- Move the boundary of the sorted portion of the list one element to the right.

- Repeat steps 1-3 until the entire list is sorted.

It has a time complexity of O(n^2) and it not efficient for large set of data.

#### 8) What do you mean by stack overflow?
#### Ans: 
- A stack overflow is a type of error that occurs when a program attempts to use more memory space than the call stack has available. The call stack is a memory structure that stores the memory addresses of active function calls and their associated data. Each time a function is called, its memory address is added to the call stack, and each time a function returns, its memory address is removed from the stack.

- When a program is running, the call stack is used to keep track of the current state of the program and the order in which functions are called. When a program requests more memory than the stack can provide, the program will crash with a stack overflow error.

- In general, Stack overflow occur when a program or a recursion call is using too much memory by creating too many function calls or using too much local variable. Programmers can prevent stack overflow by using better algorithms that use less memory, or by increasing the size of the call stack.
- 
#### 9) Write DFS technique steps?
#### Ans: 
DFS (Depth-First Search) is a technique used to traverse a graph or a tree data structure. The basic steps of the DFS algorithm are as follows:

- Start at the root node (or any arbitrary node) of the graph.

- Mark the current node as visited.

- For each unvisited neighboring node of the current node, recursively repeat steps 2 and 3.

- When all the neighboring nodes of the current node have been visited, backtrack to the previous node and repeat steps 2 and 3.

- Continue this process until all the nodes in the graph have been visited.

- Optionally, you can also store the nodes in a stack or a queue as you visit them.

DFS can be implemented using recursion or using a stack data structure. It has time complexity of O(V+E) in worst case where V is number of vertices and E is number of edges.