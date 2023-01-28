### Linked List
---
- Linear Data Structure
- Elements can be stored as per memory availability
- Can access elements on linear fashion only
- Stores homogeneous elements i.e, similar elements
- Dynamic in size
- Easy insertion and deletion 
- Starting element or node is the key which is generally termed as the head.


#### A linked list is a dynamic data structure that consists of a collection of nodes, each containing a reference to the next node in the list. Here is an example of a singly linked list in C:

```
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    // allocate 3 nodes in the heap
    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 1; // assign data in first node
    head->next = second; // Link first node with second

    second->data = 2; // assign data to second node
    second->next = third;

    third->data = 3; // assign data to third node
    third->next = NULL;
    return 0;
}

```

#### Advantages
---
- Dynamic in size
- No wastage as capacity and size is always equal
- Easy insertion and deletion as 1 link manipulation is required
- Efficient memory allocation
  
#### Disadvantages
---
- If the head node is lost, the linked list is lost 
- No random access possible

#### Applications
- Suitable where memory is limited 
- Suitable for applications that require frequent insertion and deletion