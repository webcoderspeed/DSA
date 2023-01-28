### Tree
---
> A Tree is a non-linear data structure that is organized in a hierarchical way. It is made up of nodes, and each node has a value and a reference to its child nodes. The topmost node is called the root, and the nodes below the root are called child nodes. The child nodes can have further child nodes, and so on.

#### There are several types of Tree data structures:

- Binary Tree: A Binary Tree is a tree structure in which each node has at most two children, called the left and right child.

- Binary Search Tree: A Binary Search Tree is a tree structure in which each node has at most two children, and all the values in the left subtree of a node are less than the value of the node and all the values in the right subtree are greater than the value of the node.

- AVL Tree: An AVL Tree is a self-balancing binary search tree in which the difference between the height of the left and right subtrees of any node is at most 1.

- B-Tree: A B-Tree is a self-balancing tree structure that is used to store large amounts of data on disk. It allows for efficient insertion, deletion and search operations.

- Trie: A Trie, or prefix tree, is a tree-like data structure used to store a collection of strings. Each node in the trie represents a character in a string, and the path from the root to a node represents a prefix of a string.

#### Here's an example of a simple binary tree in C:
```
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

int main() {
    struct Node* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);
    return 0;
}

```

#### Advantages of Tree data structures:

- Efficient searching, insertion, and deletion of elements.
- Easy to understand and implement.
- Trees can be used to represent hierarchical relationships between elements.
- Trees can be used to implement efficient algorithms for sorting and searching.

#### Disadvantages of Tree data structures:

- Trees can use a lot of memory, especially for larger data sets.
- Trees can be complex to implement and understand.
- Trees can be slow for certain operations, such as searching for an element in a large tree.

#### Applications of Tree data structures:

- File systems: Tree data structures are used in file systems to organize and store files and directories.
- Parsing: Trees are used in parsing to represent the syntactic structure of programming languages.
- Compression: Trees are used in data compression algorithms to represent the frequency of characters in a text.
- Network routing: Trees are used in network routing protocols to determine the shortest path between nodes in a network.
- Database indexing: Trees are used in database indexing to improve


