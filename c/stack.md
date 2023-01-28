### Linked List
---
- It is a type of Linear Data Structures using C
- Follows LIFO: Last In First Out
- Only the top elements are available to be accessed
- Insertion and deletion takes place from the top
- Eg: a stack of plates, chairs, etc
- 4 major operations:
  > push(ele) – used to insert element at top
  
  > pop() – removes the top element from stack

  > isEmpty() – returns true is stack is empty

  > peek() – to get the top element of the stack
- All operation works in constant time i.e, O(1)


####  A stack is a linear data structure that follows the Last In First Out (LIFO) principle. It has two main operations: push and pop. Here is an example of a stack in C:
```
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 10

int stack[MAX_SIZE], top = -1;

void push(int x) {
    if (top == MAX_SIZE - 1) {
        printf("Error: stack overflow\n");
        return;
    }
    top++;
    stack[top] = x;
}

void pop() {
    if (top == -1) {
        printf("Error: no elements to pop\n");
        return;
    }
    top--;
}

int main() {
    push(1);
    push(2);
    push(3);

    printf("%d\n", stack[top]); // Output: 3
    pop();
    printf("%d\n", stack[top]); // Output: 2

    return 0;
}

```

#### Advantages
---
- Maintains data in a LIFO manner
- The last element is readily available for use
- All operations are of O(1) complexity
  
#### Disadvantages
---
- Manipulation is restricted to the top of the stack
- Not much flexible

#### Applications
---
- Recursion
- Parsing
- Browser
- Editors