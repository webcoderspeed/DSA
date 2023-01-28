### Queue
---
- Linear Data Structures using C
- Follows FIFO: First In First Out
- Insertion can take place from the rear end.
- Deletion can take place from the front end.
- Eg: queue at ticket counters, bus station
- major operations:
  > enqueue(ele) – used to insert element at top
  
  > dequeue() – removes the top element from queue 

  > peekfirst() – to get the first element of the queue 
  
  > peeklast() – to get the last element of the queue 
- All operation works in constant time i.e, O(1)


####  A queue is a linear data structure that follows the First In First Out (FIFO) principle. It has two main operations: enqueue and dequeue. Here is an example of a queue in C:
```
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 10

int queue[MAX_SIZE], front = -1, rear = -1;

void enqueue(int x) {
    if (rear == MAX_SIZE - 1) {
        printf("Error: queue overflow\n");
        return;
    }
    if (front == -1 && rear == -1) {
        front = rear = 0;
    } else {
        rear++;
    }
    queue[rear] = x;
}

void dequeue() {
    if (front == -1 || front > rear) {
        printf("Error: no elements to dequeue\n");
        return;
    }
    front++;
}

int main() {
    enqueue(1);
    enqueue(2);
    enqueue(3);

    printf("%d\n", queue[front]); // Output: 1
    dequeue();
    printf("%d\n", queue[front]); // Output: 2

    return 0;
}

```

#### Advantages
---
- Maintains data in FIFO manner
- Insertion from beginning and deletion from end takes O(1) time

#### Disadvantages
---
- Fixed size: A queue implemented using an array has a fixed size, so once it is full, no more elements can be added to it.

- Poor cache locality: Queue implemented using arrays have poor cache locality, which can lead to poor performance when working with large data sets.

- Costly dequeue operation: If a dequeue operation is performed frequently, it can be costly as all elements after the dequeued element need to be shifted one.

- Limited flexibility: An array-based implementation of a queue offers limited flexibility in terms of the types of operations that can be performed on the data.

- Not thread-safe: Queue implemented using arrays are not thread-safe, so they may not be suitable for use in multi-threaded applications without additional synchronization mechanisms.

- Not suitable for real-time systems: Queue implemented using arrays are not suitable for real-time systems because it can't handle the high-speed data transfer.


#### Applications
---
- Scheduling
- Maintaining playlist
- Interrupt handling