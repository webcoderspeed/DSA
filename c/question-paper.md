### Question Paper

---

#### 1) the postorder traversal of a binary tree is 8,9,6,7,4,5,2,3,1. The inorder traversal of the same tree is 8,6,9,4,7,2,5,1,3. The height of a tree is the length of the longest path from the root to any leaf. The height of the binary tree above is **\_**?

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

#### 10) Write short note on BST?

#### Ans:

- A binary search tree (BST) is a node-based data structure in which each node has at most two children, which are referred to as the left child and the right child. The left child of a node contains only nodes with keys lesser than the node's key, while the right child of a node contains only nodes with keys greater than the node's key. The topmost node in a binary search tree is called the root.

- BSTs are commonly used to implement efficient searching and sorting algorithms. The average time complexity for searching an element in a binary search tree is O(log n) which is much better than O(n) for linear search. The time complexity for inserting and deleting a node is also O(log n) on average.

- However, the time complexity of a binary search tree can degrade to O(n) in the worst case if the tree becomes skewed (unbalanced) due to a poor choice of keys for insertion or deletion. To avoid this, various techniques such as self-balancing trees are used to maintain the balance of the tree.

#### 10) What do you mean by Data Structure? Explain the types of data structures?

#### Ans:

A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Data structures are used to represent real-world entities and relationships in a way that the computer can understand and manipulate.

There are two main types of data structures:

1. Linear data structures: These are data structures that store data in a linear order, such as arrays, linked lists, stacks, and queues.

2. Non-linear data structures: These are data structures that store data in a hierarchical or non-linear order, such as trees, graphs, and hash tables.

There are also several sub-types of data structures:

1. Arrays: A collection of elements of the same type stored in contiguous memory locations.

1. Linked Lists: A sequence of elements, each containing a reference to the next element.

1. Stacks: A last-in, first-out (LIFO) data structure.

1. Queues: A first-in, first-out (FIFO) data structure.

1. Trees: A hierarchical data structure with a root node and child nodes.

1. Graphs: A non-linear data structure consisting of a set of vertices and edges connecting them.

1. Hash tables: A data structure that uses a hash function to map keys to values, allowing for efficient insertion, deletion, and lookup operations.

1. Heaps: A special kind of binary tree where each parent node is less than or equal to its child nodes.

Each data structure has its own advantages and disadvantages and are suited for different types of problems. Choosing the right data structure for a particular problem is an important aspect of computer science and software development.

#### 11) What are the advantages of circular queue over traditional queue(simple queue)?

#### Ans:

A circular queue is a variation of a traditional queue (also known as a simple queue) that has the following advantages:

1. Memory Utilization: In a traditional queue, once the last position is filled, it can't be used again until all other positions are freed. In a circular queue, the last position can be reused once the first position is freed, thus utilizing the memory more efficiently.

1. Dynamic memory allocation: In a traditional queue, the size of the queue must be fixed at the time of its creation, and it cannot be changed later. In a circular queue, the size of the queue can be changed dynamically, thus allowing for more flexibility.

1. Reduced Overhead: In a traditional queue, when the queue is full and a new element is added, the oldest element must be removed before the new element can be added. This operation is called overflow and it results in increased overhead. In a circular queue, this type of overflow does not occur because the oldest element is overwritten by the new element.

1. Easy implementation: Circular Queue is easy to implement as compared to traditional queue.

1. Better performance: In some cases, circular queue performs better than traditional queue in terms of time complexity.

It's worth noting that while circular queue has some advantages over traditional queue, it also has some disadvantages, such as the need to keep track of the head and tail of the queue, and the need for extra memory to distinguish between an empty and a full queue. Therefore, it is important to choose the correct data structure based on the specific requirements of the problem at hand.

#### 12) Write a program to remove duplicates from linked list?

#### Ans:

```
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

// Function to remove duplicates from a linked list
void removeDuplicates(struct Node* head) {
    struct Node* current = head;
    struct Node* next_next;

    if (current == NULL)
        return;

    while (current->next != NULL) {
        if (current->data == current->next->data) {
            next_next = current->next->next;
            free(current->next);
            current->next = next_next;
        } else {
            current = current->next;
        }
    }
}

// Function to insert a new node at the beginning of the linked list
void push(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}

// Function to print the linked list
void printList(struct Node* head) {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
}

// Driver code
int main() {
    struct Node* head = NULL;
    push(&head, 1);
    push(&head, 2);
    push(&head, 2);
    push(&head, 3);
    push(&head, 3);
    push(&head, 4);
    printf("Linked list before removing duplicates: ");
    printList(head);
    removeDuplicates(head);
    printf("\nLinked list after removing duplicates: ");
    printList(head);
    return 0;
}

```

This program uses a linked list with a struct Node that contains an integer value data and a pointer to the next node in the list. The removeDuplicates() function iterates through the list and removes any duplicate nodes. The push() function is used to insert new nodes at the beginning of the list, and the printList() function is used to print the contents of the list.

#### 13) Explain linear search and binary search technique and compare complexity of both the techniques?

#### Ans:

- Linear search is a simple search technique that involves iterating through a collection of elements, one by one, until the desired element is found. It is also known as a sequential search. The complexity of linear search is O(n), where n is the number of elements in the collection. This means that the time it takes to perform a linear search increases linearly with the number of elements in the collection.

- Binary search, on the other hand, is a more efficient search technique that is used on a sorted collection of elements. It works by repeatedly dividing the collection in half, and discarding half of the elements at each step. The desired element is then either in the remaining half or it is not present in the collection. The complexity of binary search is O(log n), where n is the number of elements in the collection. This means that the time it takes to perform a binary search increases logarithmically with the number of elements in the collection, making it more efficient than linear search for large collections of data.

In summary, both linear search and binary search are methods for finding a specific element in a collection of data. Linear search is simple to implement and has a linear time complexity of O(n), while binary search is more efficient and has a logarithmic time complexity of O(log n) but requires the input collection to be sorted.

#### 13) What is the objective of hashing? Also name some collision handling techniques.

#### Ans:

The primary objective of hashing is to create a data structure, known as a hash table, that allows for fast and efficient insertion, deletion, and retrieval of data. A hash function is used to map the data (keys) to an index in the hash table, where the corresponding value can be stored and accessed quickly. The process of mapping keys to indices is known as hashing.

A collision occurs when two or more keys are mapped to the same index in the hash table, known as a collision. Collision handling techniques are used to resolve collisions and ensure that the data can still be inserted, deleted, and retrieved quickly. Some commonly used collision handling techniques include:

1. Open addressing: This technique involves finding the next available empty slot in the hash table to store the data in case of a collision. The most common open addressing technique is linear probing, which involves finding the next empty slot by incrementing the index of the original hash value.

1. Chaining: This technique involves creating a linked list at each index in the hash table to store all the data that maps to that index. This allows for multiple keys to be stored at the same index without any loss of data.

1. Rehashing: This technique involves using a second hash function to map the data to a new index in case of a collision.

1. Cuckoo Hashing: This is a technique that uses two hash functions and two hash tables in order to minimize the chance of collision.

The choice of collision handling technique depends on the specific requirements of the application, such as the size of the hash table, the number of collisions expected, and the memory constraints of the system.

#### 14) Write the algorithm for stack push operation?

#### Ans:

The algorithm for a stack push operation can be described as follows:

1. Check if the stack is full. If it is full, the push operation cannot be performed and the algorithm exits.

1. If the stack is not full, increase the stack pointer by 1.

1. Store the value to be pushed at the location pointed to by the stack pointer.

1. Exit the algorithm.

In summary, a push operation on a stack involves adding an element to the top of the stack, if the stack has space, by updating the stack pointer and storing the new value at the location pointed by the updated stack pointer.

#### 15)Explain the algorithim for infix to postfix expression and convert the following infix to postfix expression using stack: A + (B*C-(D/E^F)*G)\*H.?

#### Ans:

Infix to postfix conversion is a process of converting an infix expression (an expression written in the standard infix notation) to a postfix expression (an expression written in the postfix notation). The algorithm for converting infix to postfix expression using a stack is as follows:

1. Initialize an empty stack.

1. Scan the infix expression from left to right.

1. If the scanned character is an operand, add it to the postfix expression.

1. If the scanned character is an operator, pop operators from the stack and add them to the postfix expression until you find an operator with a lower precedence or the stack becomes empty. Push the scanned operator onto the stack.

1. If the scanned character is an open parenthesis, push it onto the stack.

1. If the scanned character is a close parenthesis, pop operators from the stack and add them to the postfix expression until you find an open parenthesis. Pop the open parenthesis.

1. Repeat steps 2-6 until all characters are scanned.

1. Pop any remaining operators from the stack and add them to the postfix expression.

Here is the infix to postfix conversion of the expression "A + (B*C-(D/E^F)*G)\*H" using the algorithm described above:

<table border='1'>
  <thead>
    <tr>
      <th>Step</th>
      <th>Infix</th>
      <th>Stack</th>
      <th>Postfix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>A + (B*C-(D/E^F)*G)*H</td>
      <td>empty</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>+ (B*C-(D/E^F)*G)*H</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <td>3</td>
      <td>+ (B*C-(D/E^F)*G)*H</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <td>4</td>
      <td>+ (B*C-(D/E^F)*G)*H</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <td>5</td>
      <td>+ B*C-(D/E^F)*G)*H</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <td>6</td>
      <td>+ B*C-(D/E^F)*G)*H</td>
      <td>A B</td>
      <td>AB</td>
    </tr>
    <tr>
      <td>7</td>
      <td>+ B*C-(D/E^F)*G)*H</td>
      <td>A B</td>
      <td>AB</td>
    </tr>
    <tr>
      <td>8</td>
      <td>+ B*C-(D/E^F)*G)*H</td>
      <td>A B</td>
      <td>AB</td>
    </tr>
    <tr>
      <td>9</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C</td>
      <td>ABC*</td>
    </tr>
    <tr>
      <td>10</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C</td>
      <td>ABC*</td>
    </tr>
    <tr>
      <td>11</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C</td>
      <td>ABC*</td>
    </tr>
    <tr>
      <td>12</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D</td>
      <td>ABC*D</td>
    </tr>
    <tr>
      <td>13</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D</td>
      <td>ABC*D</td>
    </tr>
    <tr>
      <td>14</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D</td>
      <td>ABC*D</td>
    </tr>
    <tr>
      <td>15</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D E</td>
      <td>ABC*DE</td>
    </tr>
    <tr>
      <td>16</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D E</td>
      <td>ABC*DE</td>
    </tr>
    <tr>
      <td>17</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D E^F</td>
      <td>ABC*DEF^</td>
    </tr>
    <tr>
      <td>18</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D E^F</td>
      <td>ABC*DEF^/</td>
    </tr>
    <tr>
      <td>19</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D E^F-G</td>
      <td>ABC*DEF^/G-</td>
    </tr>
    <tr>
      <td>20</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B*C D E^F-G</td>
      <td>ABC*DEF^/G-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B<em>C D E^F-G</em>H</td>
      <td>ABC<em>DEF^/G-H</em></td>
    </tr>
    <tr>
      <td>22</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B<em>C D E^F-G</em>H</td>
      <td>ABC<em>DEF^/G-H</em></td>
    </tr>
    <tr>
      <td>23</td>
      <td>+ B*C-D/E^F)*G)*H</td>
      <td>A B<em>C D E^F-G</em>H</td>
      <td>ABC<em>DEF^/G-H</em>+</td>
    </tr>
  </tbody>
</table>

So the postfix expression is : ABC\*DEF^/G-H

#### 16) What do you mean by an algorithm? Explain the concept of time and space complexity?

An algorithm is a set of instructions or steps for solving a particular problem or completing a specific task. It is a well-defined procedure that takes an input, performs a sequence of operations, and produces an output. The concept of time and space complexity is used to analyze and compare the efficiency of different algorithms.

- Time complexity refers to the amount of time an algorithm takes to run as a function of the size of the input. It is usually expressed using big O notation, which describes the upper bound on the running time of an algorithm. For example, an algorithm with a time complexity of O(n) means that its running time increases linearly with the size of the input.

- Space complexity refers to the amount of memory an algorithm uses as a function of the size of the input. Like time complexity, it is also expressed using big O notation. An algorithm with a space complexity of O(1) uses a constant amount of memory, regardless of the size of the input.

It is important to note that time and space complexity are not the only factors to consider when evaluating an algorithm. The readability, maintainability, and other characteristics of an algorithm are also important.

In summary, Time complexity and Space complexity are the measure of how much time and how much space an algorithm takes to run respectively. It is important to understand the time and space complexity of an algorithm, as it gives an idea of how well it will perform for large inputs and how much resources it will consume.

#### 17) What do you mean by sparse matrix. Show its representation using array.

#### Ans:

A sparse matrix is a matrix in which most of the elements are zero. Sparse matrices are often used in scientific and engineering applications where the matrices are large and mostly empty. These matrices are useful for memory and computational efficiency because they take up less memory than a dense matrix, which is a matrix in which most of the elements are non-zero.

There are several ways to represent a sparse matrix using an array, two common methods are :

- Compressed sparse row (CSR) representation:
  In this representation, the matrix is stored in three arrays: a values array, a row pointer array, and a column index array. The values array contains all the non-zero elements of the matrix, and the row pointer array stores the indices of the first element of each row in the values array. The column index array stores the column indices of the elements in the values array. The representation is called "compressed" because the row pointer array and column index array compress the information about the matrix's non-zero elements into a smaller amount of space.

- Compressed sparse column (CSC) representation:
  This method is similar to CSR representation, but the column pointer array and row index array are used instead of the row pointer array and column index array.

For example, consider a sparse matrix A with the following values:

<center>
<table border="1">
  <thead>
    <tr>
      <th>0</th>
      <th>3</th>
      <th>0</th>
      <th>0</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>4</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>2</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</center>

In CSR representation, the values array would be [3, 4, 2], the row pointer array would be [0, 1, 2, 3], and the column index array would be [1, 2, 1].

In CSC representation, the values array would be [3, 4, 2], the column pointer array would be [0, 1, 2, 3], and the row index array would be [0, 1, 3].

Note that the sparse matrix representation is useful when the matrix is mostly empty or filled with zero values, but when the matrix is mostly filled with non-zero values, a dense matrix representation is more efficient.

#### 16) What would be the complexity of insertion sort if elements are stored randomly and if the elements are stored in ascending order?

### Ans:

```
Insertion sort is an in-place sorting algorithm that works by repeatedly taking an unsorted element from the input and inserting it into the correct position in the sorted portion of the array. The time complexity of insertion sort depends on how the elements are stored in the array before the sorting process begins.

If the elements are stored randomly, the time complexity of insertion sort is O(n^2). This is because in the worst case scenario, the algorithm will have to shift all of the elements to the right in order to insert the current element in its correct position. This can happen when the array is sorted in descending order.

If the elements are already stored in ascending order, the time complexity of insertion sort is O(n). This is because in this case, the algorithm will not have to shift any elements to the right in order to insert the current element in its correct position. This can happen when the array is already sorted in ascending order.

It's worth mentioning that the best-case scenario for insertion sort is O(n) when the array is already sorted, but the average and worst-case scenario is O(n^2) since the algorithm compares each element with the one before it.

In summary, the time complexity of insertion sort depends on how the elements are stored in the array before the sorting process begins. If the elements are stored randomly, the time complexity is O(n^2) in worst case and if the elements are already stored in ascending order, the time complexity is O(n) in best case.
```

#### 17) Write down the advantages of linked lists over arrays?

### Ans:

There are several advantages of linked lists over arrays:

1. Dynamic size: Linked lists can grow or shrink in size during the execution of a program, whereas the size of an array is fixed when it is declared.

1. Efficient memory allocation: Linked lists only allocate memory for the elements that are currently in the list, whereas arrays pre-allocate a block of memory for a fixed number of elements, even if not all of them are being used.

1. Efficient insertion and deletion: Inserting or deleting an element in a linked list takes constant time, regardless of the size of the list. However, in an array, these operations take linear time, as elements may need to be shifted to make room for a new element or fill a gap left by a deleted element.

1. No memory wastage: In a linked list, memory is allocated only when a new element is added and freed when an element is removed, whereas in an array, memory is allocated in a block, regardless of how many elements are actually used.

1. Flexibility: Linked lists can be used to implement several data structures such as stacks, queues, and symbol tables. Arrays, on the other hand, have a fixed structure and can be used to implement only a few data structures.

1. No cache miss: In case of arrays, if the elements are not stored in contiguous memory locations, then it will cause cache miss which will increase the access time, but in linked list as the elements are stored in heap and the next pointer is stored in the same location as the element so it will cause no cache miss.

It's worth noting that linked lists have certain disadvantages too, such as the need for additional memory to store the pointers that connect the elements, and slower random access time. Therefore, the choice between using a linked list or an array depends on the specific requirements of the problem being solved.

#### 18) Write down the advantages of linked lists over arrays?

#### Ans:

Stacks and queues are two fundamental data structures that have a wide range of applications in computer science and software engineering.

##### Stacks:

1. Undo/Redo operations in text editors and word processors: The text editor keeps track of the previous states of the document using a stack.
1. Browser history: When a user clicks the back button, the browser pops the current web page from the top of the stack, revealing the previous web page.
1. Expression evaluation: When evaluating arithmetic expressions using postfix notation, a stack is used to hold the operands and perform the calculations.
1. Parentheses matching: A stack is used to check whether the parentheses in a mathematical expression are balanced or not.
1. Memory management: The stack is used by the computer's memory manager to keep track of function calls and return addresses.

##### Queues:

1. CPU scheduling: A queue is used to keep track of the processes that are waiting to be executed by the CPU.
1. Printing jobs: A queue is used to hold the jobs that are waiting to be printed.
1. Traffic control: A queue is used to control the flow of vehicles at a traffic signal.
1. Breadth-first search: A queue is used to keep track of the next vertex to be visited while traversing a graph.
1. Asynchronous task execution: A queue is used to hold the tasks that need to be executed asynchronously, such as sending an email or generating a report.

These are just some examples, but stacks and queues are also used in many other applications such as network protocol design, database management, and operating system design, to name a few.

#### 19) Write an algorithm to sort elements using Quicksort? Explain it with the help of an example?

#### Ans:

The Quicksort algorithm can be described in the following steps:

1. Select a pivot element from the array. This element will be used to partition the array into two subarrays.
1. Create two empty arrays, one for elements less than the pivot and one for elements greater than the pivot.
1. Iterate through the array and compare each element to the pivot. Elements that are less than the pivot are added to the left array, and elements that are greater than the pivot are added to the right array.
1. Recursively sort the left array using the Quicksort algorithm.
1. Recursively sort the right array using the Quicksort algorithm.
1. Concatenate the left array, the pivot element, and the right array to form the final sorted array.

Here's an example of the quicksort algorithm applied to the array [8, 5, 2, 9, 7, 6, 3, 1]:

1. Choose a pivot element, in this case, we'll choose the element at the middle of the array, which is the element '5'.
1. Create two empty arrays, one for elements less than the pivot and one for elements greater than the pivot.
1. Iterate over the array and compare each element to the pivot element. Elements less than the pivot are added to the left array and elements greater than the pivot are added to the right array.

```
  [8, 5, 2, 9, 7, 6, 3, 1]
  pivot: 5
  left array: [2, 1, 3]
  right array: [8, 9, 7, 6]
```

1. Recursively sort the left array using the quicksort algorithm.
1. Recursively sort the right array using the quicksort algorithm.
1. Concatenate the left array, the pivot element, and the right array to get the final sorted array: [1, 2, 3, 5, 6, 7, 8, 9].

The time complexity of Quicksort is O(n log n) on average, but it could be O(n^2) in worst-case scenarios, if the pivot element is chosen as the largest or smallest element in the array. This is why it's important to choose a pivot element that's close to the middle of the array to ensure a balanced partition.

Quicksort is a popular and efficient sorting algorithm, and is widely used in many programming languages, such as C++ and Java. The algorithm is implemented in-place, which means it uses a small constant amount of memory, making it suitable for sorting large data sets.

#### 20) Write short notes on ?

#### Ans:

1. DFS (Depth First Search):

   - DFS is a traversal algorithm for traversing or searching tree or graph data structures.
   - It starts at the root node and explores as far as possible along each branch before backtracking.
   - The algorithm uses a stack data structure to keep track of the next vertex to visit.
   - The order in which the vertices are visited is determined by the order in which they are popped from the stack.
   - DFS can be used to find connected components in a graph, find a path between two nodes, or test if a graph is bipartite.

2. AVL Tree:

   - AVL Tree is a self-balancing binary search tree.
   - In an AVL tree, the heights of the two child subtrees of any node differ by at most one.
   - When a new node is inserted or a node is deleted from the tree, it is checked for the balance and it is rotated if needed to maintain the balance.
   - AVL trees are more balanced compared to a regular binary search tree, leading to faster search, insertion, and deletion operations.
   - AVL trees are widely used in many applications including database indexing, disk scheduling, and memory allocation.

3. Threaded Binary Tree:
   - Threaded binary tree is a variation of a binary tree where each node has a special pointer, called a thread, that connects it to its in-order successor or predecessor.
   - This representation allows for efficient in-order traversals of the tree without using recursion or a stack.
   - It is useful for memory efficient representation of a tree, for example in the implementation of an iterator for a tree data structure.
   - Threaded binary tree can be used in the implementation of expression tree, where in-order traversal is necessary to evaluate an expression.
   - In a threaded binary tree, the space required for storing pointers is saved, as it uses the null pointers for storing the in-order successor or predecessor.

#### 20) Write algorithm to search element using binary search and explain it with the help of an example?

#### Ans:

The binary search algorithm is a method used to search for an element in a sorted array. The basic idea behind the algorithm is to repeatedly divide the search interval in half, until the value is found or the search interval is empty. The steps are as follows:

1. Start with the middle element of the array. Compare this element to the target element.

1. If the target element is less than the middle element, repeat the process with the left half of the array.

1. If the target element is greater than the middle element, repeat the process with the right half of the array.

1. If the target element is equal to the middle element, return the index of the middle element.

1. Repeat the above steps until the target element is found or the search interval is empty.

1. If the target element is not found, return -1.

It is important to note that the array must be sorted before performing the binary search algorithm.

---
#### Let's take an example where we want to find the element "22" in the array [5, 12, 15, 20, 22, 30, 40, 55, 60, 100]


1) Start with the middle element of the array, which is 30. Compare 30 to 22. Since 30 is greater than 22, we repeat the process with the left half of the array [5, 12, 15, 20, 22]

1) Now the middle element is 20, since 22 is greater than 20, we repeat the process with the right half of the array [22]

1) The middle element is 22, which is the target element we were searching for. We return the index of the middle element which is 4

So the element "22" is present at index 4 in the array.

It's important to note that if the element is not present in the array the algorithm will return -1 as result.

---

#### 21) Write algorithm to insert, delete and display elements in circular queue and one way list?
#### Ans:

### Circular Queue:
1) Insertion:
   1) Check if the queue is full. If it is, display an error message and return.
   2) If the queue is empty, initialize the front and rear pointers to the first position in the array.
   3) If the queue is not empty, increment the rear pointer by one.
   4) If the rear pointer is at the end of the array, set it back to the first position.
   5) Insert the new element at the position of the rear pointer.
   6) Increment the count of elements in the queue.

1) Deletion:
   1) Check if the queue is empty. If it is, display an error message and return.
   2) Remove the element at the position of the front pointer.
   3) Increment the front pointer by one.
   4) If the front pointer is at the end of the array, set it back to the first position.
   5) Decrement the count of elements in the queue.


1) Display:
   1) Check if the queue is empty. If it is, display an error message and return.
   2) Traverse the queue starting from the front pointer and displaying each element until the rear pointer is reached.

### One-way List:
1) Insertion:
    1) Create a new node with the given data.
    1) If the list is empty, set the new node as the head of the list.
    1) If the list is not empty, set the new node's next pointer to the current head, then set the head to the new node.

1) Deletion:
   1) Check if the list is empty. If it is, display an error message and return.
   2) If the node to be deleted is the head of the list, set the head to the current head's next pointer.
   3) Otherwise, traverse the list to find the node to be deleted.
   4) Set the previous node's next pointer to the current node's next pointer, effectively deleting the current node from the list.


1) Display:
   1) Check if the list is empty. If it is, display an error message and return.
   2) Traverse the list starting from the head, displaying each node's data until the end of the list is reached.

#### 22) Write an algorithm to sort elements using selection sort. Explain it with the help of an example?
#### Ans:
#### Selection Sort Algorith:
  1) Starting from the first element of the array, find the smallest element in the array.
  1) Swap the smallest element with the first element of the array.
  1) Repeat this process for the remaining elements of the array, each time starting from the next element and swapping the smallest element found with that element.

Example:
Let's take an example of sorting the following array: [5, 9, 1, 4, 6]

   1) First, we find the smallest element in the array which is 1, and we swap it with the first element 5. The array becomes [1, 9, 5, 4, 6]
   2) Next, we repeat the process starting from the second element, which is 9. We find the smallest element in the remaining array [9, 5, 4, 6], which is 4. We swap it with 9, resulting in [1, 4, 5, 9, 6]
   3) Repeat the process for the next element, which is 5. We find the smallest element in the remaining array [5, 9, 6], which is 5. We swap it with 5, resulting in [1, 4, 5, 9, 6].
   4) Repeat the process for the next element, which is 9. We find the smallest element in the remaining array [9, 6], which is 6. We swap it with 9, resulting in [1, 4, 5, 6, 9].
   5) Repeat the process for the last element, which is 9. Since there is no remaining array, the algorithm ends and the array is now sorted in ascending order [1, 4, 5, 6, 9].

Note that the selection sort algorithm is inefficient for large data sets and it's time complexity is O(n^2)


#### 22) Write an algorithm to sort elements using selection sort. Explain it with the help of an example?
#### Ans:
### Creating and displaying a binary tree:

  1) Create a new Node class with a left and right child, and a value stored in the node.
  1) Create a new BinaryTree class, with a root node initialized to None.
  1) Create a method in the BinaryTree class called insert() which takes a value as an argument. This method will create a new Node with the given value and insert it into the correct position in the tree.
  1) To insert the new node, first check if the root node is None. If it is, set the root node to the new Node.
  1) If the root node is not None, compare the value of the new node to the value of the root node. If the new value is smaller than the root value, recursively call the insert method on  the 1) left child. If the new value is greater than the root value, recursively call the insert method on the right child.
  1) Create a method in the BinaryTree class called display() which will display the tree in a pre-order traversal (root, left, right)
  1) Start at the root node and display its value, then recursively call the display method on the left child, followed by the right child.

```
Let's insert the following values into the binary tree: [5, 3, 7, 2, 4, 6, 8]

Create a new BinaryTree object
Insert the value 5 into the tree. The root node is now 5.
Insert the value 3 into the tree. The tree now looks like:
5
/
3
Insert the value 7 into the tree. The tree now looks like:
5
/
3 7
Insert the value 2 into the tree. The tree now looks like:
5
/
3 7
/
2
Insert the value 4 into the tree. The tree now looks like:
5
/
3 7
/
2 4
Insert the value 6 into the tree. The tree now looks like:
5
/
3 7
/ \ /
2 4 6
Insert the value 8 into the tree. The tree now looks like:
5
/
3 7
/ \ /
2 4 6 8

Display the tree using the display method, it will output: 5,3,2,4,7,6,8

Note that this is just one possible way that the binary tree could be constructed, and it's based on the order in which the values are inserted. Other orders would result in a different tree structure.
```

#### 23) Write an algorithm to sort elements using selection sort. Explain it with the help of an example?
#### Ans:
A stack is a linear data structure that follows the Last In First Out (LIFO) principle, meaning that the last element added to the stack will be the first one to be removed. It has two main operations: push and pop. Push adds an element to the top of the stack, and pop removes the top element from the stack.

A linked list can be used to implement a stack, as it allows for constant-time insertions and deletions at the head of the list. Here's an example of how a stack class might be implemented using a singly-linked list:

```
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Stack {
    struct Node* top;
};

void push(struct Stack* stack, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = stack->top;
    stack->top = newNode;
}

int pop(struct Stack* stack) {
    if(stack->top == NULL) {
        printf("Stack is empty\n");
        return -1;
    }
    struct Node* temp = stack->top;
    int popped = temp->data;
    stack->top = temp->next;
    free(temp);
    return popped;
}

int main() {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    stack->top = NULL;
    push(stack, 1);
    push(stack, 2);
    push(stack, 3);
    printf("Popped: %d\n", pop(stack)); // should print 3
    printf("Popped: %d\n", pop(stack)); // should print 2
    return 0;
}

```

This is a basic implementation of a stack data structure using a linked list. In this example, the push() function adds a new node to the top of the stack, and the pop() function removes the top node from the stack and returns its value.

#### 24) What is hashing? What is complexity of hashing? Explain folding method with the help of an example?
#### Ans:
> Hashing is a technique used to perform efficient data retrieval by mapping a key to an index in an array-like data structure called a hash table. Hashing is typically used to implement data structures such as dictionaries and associative arrays.

> The time complexity of hashing depends on the design of the hash function and the collision resolution strategy. The best case scenario is when the hash function distributes keys uniformly and there are no collisions, in this case the time complexity is O(1) for both insertion and retrieval.

> The worst-case scenario is when there are a lot of collisions and the collision resolution strategy is not efficient, in this case the time complexity can degrade to O(n), where n is the number of keys.

> Folding method is a simple hash function that breaks the key into equal-size parts and then adds them together. For example, if the key is a 4-digit number, the folding method would break it into two 2-digit numbers and add them together.

 ```
 Example:

  Key = 1234
  We can divide key into two parts (12, 34)
  Add the two parts (12 + 34 = 46)
  Hash value = 46
  Note that this method can lead to collisions if the keys are not distributed evenly. To avoid this problem, we can use a mod function to reduce the final sum to a smaller range of values.

Example:

  Key = 1234
  We can divide key into two parts (12, 34)
  Add the two parts (12 + 34 = 46)
  Hash value = 46 mod 10 (to get a value between 0 and 9) = 6
  This way the keys are distributed more uniformly across the available array indexes and the chance of collision is minimized.
 ```

 #### 25) Write short note on double ended queues, heap and memory representation of binary trees?
#### Ans:

### Double ended queues (or deque):
   1) A deque is a dynamic data structure that allows insertions and deletions at both ends of the queue.
   2) It is similar to a regular queue, but it allows elements to be added to or removed from both front and back.
   3) Common operations include inserting, deleting and returning elements at the front or back of the queue.
   4) It can be implemented using an array or a linked list.
   5) They are useful in situations where elements need to be accessed from both ends of the queue, such as in window sliding problems.


### Heap:

   1) A heap is a binary tree based data structure where the parent node is either greater than or equal to (max heap) or less than or equal to (min heap) its children.
   2) It has a complete binary tree property, where all levels are filled and the last level is filled from left to right.
   3) It supports operations such as inserting, deleting and extracting the maximum/minimum element.
   4) It can be implemented using an array or a linked list.
   5) They are used in algorithms such as heap sort and for implementing priority queues.

### Memory representation of binary trees:

   1) A binary tree can be represented in memory using different methods like array, linked list, and pointer representation.
   2) In array representation, all the nodes of the binary tree are stored in an array and the left and right children of a node are stored at 2i+1 and 2i+2 respectively (i is the index of the parent node in array)
   3) In linked list representation, each node in the binary tree is represented using a struct with pointers to left and right children.
   4) Pointer representation store each node in the binary tree with a struct that contains the value and pointers to its left and right children.
   5) The choice of representation often depends on the specific requirements of the problem and the operations that are frequently performed on the tree.



