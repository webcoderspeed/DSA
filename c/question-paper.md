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

#### 2) What is AVL tree?
#### Ans: 
  - AVL tree is a self-balancing binary search tree
  - The difference in the height of the left and right subtrees of any node is at most 1, which helps to keep the tree balanced
  - AVL tree is named after its inventors Adelson-Velsky and Landis
  - AVL tree are used in many applications such as databases, file systems, and programming languages to store and efficiently retrieve data.
  - Time complexity of basic operations such as insertion, deletion, and searching remains O(log n) in AVL tree
  - AVL tree maintain balance by making sure that the height difference of the left and right subtrees is not more than 1.
  - AVL tree are more balanced than a normal binary search tree and hence the time complexity of operations on AVL tree is more efficient
  - The tree is able to maintain balance by rotating nodes in the tree when insertions and deletions cause the tree to become unbalanced.




#### 3) What is Priority Queue?
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


#### 4) How the selection of a particular data structure is done to solve a problem??
#### Ans: 
The selection of a particular data structure for a problem is typically done based on the following considerations:

- The type of operations that will be performed: Different data structures are better suited for different types of operations. For example, if the main operation is searching, a data structure such as a hash table or a balanced binary search tree would be more efficient than a linked list.

- The amount of data: The amount of data that needs to be stored and manipulated will also affect the choice of data structure. For example, if the data set is very large, a data structure that uses disk storage, such as a B-tree, would be more appropriate than one that stores all the data in memory.

- Time and space complexity: The time and space complexity of the different data structures should be considered. In general, the goal is to use a data structure that has the lowest time and space complexity for the given problem.

- Scalability: The data structure should be able to handle the growth of data over time.

- Convenience: The ease of implementation, debugging and maintainability of the data structure should be considered.

- Trade-offs: The selection of data structure also depends on the trade-offs between the time and space complexity of the data structure and the time and space complexity of the operations that need to be performed on the data.

Ultimately, the decision on which data structure to use will depend on the specific requirements of the problem and the trade-offs that need to be made.

