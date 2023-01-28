### Queue
---
- Linear Data Structures using C
- Also known as Simple Queue
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


---
### Types of Queue
1) Simple Queue: A linear data structure that follows the First In First Out (FIFO) principle. It has two main operations: enqueue and dequeue. 

##### Note: simple queue is already explained above

2) Circular Queue: A variation of a simple queue that uses a circular buffer to store elements. This allows for more efficient use of memory and prevents overflow errors.

   - Circular Queue is a linear data structure that follows the FIFO (First In First Out) principle.
   - The last position in a circular queue is connected back to the first position, creating a circular buffer.
   - It allows for more efficient use of memory and prevents overflow errors.
   Circular Queue can be implemented using an array or a linked list.
   - It has two main pointers, front and rear, that are used to keep track of the position of the first and last elements in the queue.
   - The front pointer points to the first element in the queue and the rear pointer points to the last element in the queue.
   - Insertion of elements (enqueue operation) is done at the rear of the queue and deletion of elements (dequeue operation) is done at the front of the queue.
   When the front and rear pointers are at the same position, the queue is considered empty.
   - When the rear pointer is one position ahead of the front pointer, the queue is considered full.
   - Circular Queue can be used in situations where the size of the queue needs to be dynamic and efficient use of memory is required.

```
#include <stdio.h>
#define MAX 5

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int value) {
    if((front == 0 && rear == MAX-1) || (front == rear+1)) {
        printf("Queue is full\n");
        return;
    }
    if(front == -1) {
        front = rear = 0;
    }
    else if(rear == MAX-1 && front != 0) {
        rear = 0;
    }
    else {
        rear++;
    }
    queue[rear] = value;
    printf("Inserted value: %d\n", value);
}

void dequeue() {
    if(front == -1) {
        printf("Queue is empty\n");
        return;
    }
    printf("Deleted value: %d\n", queue[front]);
    if(front == rear) {
        front = rear = -1;
    }
    else if(front == MAX-1) {
        front = 0;
    }
    else {
        front++;
    }
}

void display() {
    int i;
    if(front == -1) {
        printf("Queue is empty\n");
        return;
    }
    printf("Queue elements: ");
    if(rear >= front) {
        for(i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
    }
    else {
        for(i = front; i < MAX; i++) {
            printf("%d ", queue[i]);
        }
        for(i = 0; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
    }
    printf("\n");
}

int main() {
    enqueue(5);
    enqueue(8);
    enqueue(10);
    display();
    dequeue();
    dequeue();
    display();
    enqueue(15);
    enqueue(18);
    display();
    return 0;
}

```

### Advantages 
---
- Memory Efficiency: Circular Queue makes efficient use of memory by reusing the empty spaces that are left behind by dequeue operations. This is particularly useful when the size of the queue needs to be dynamic.

- No Overflow Errors: Circular Queue eliminates overflow errors by connecting the last position in the queue back to the first position, creating a circular buffer. This allows for the insertion of new elements even when the queue is full, but it also allows the oldest element to be overwritten.

- Easy implementation: Circular Queue can be implemented using an array or a linked list, which makes it easy to implement and understand.

- Faster insert and delete operations: The insert and delete operations in Circular Queue are performed at the front and rear of the queue respectively. Since these operations are performed at the opposite ends of the queue, they are faster than inserting or deleting elements in the middle of the queue.

- Priority Queue: Circular Queue can be used to implement a priority queue where elements are dequeued in the order of their priority.

- Real-time systems: Circular Queue is widely used in real-time systems like audio buffering, where there is a continuous flow of data and the buffer has to be continuously updated.

### Disadvantages
---
- Overwriting old data: One of the main disadvantages of Circular Queue is that it overwrites old data when the queue is full. This means that important data may be lost if not handled properly.

- Complexity in determining the front and rear: Determining the front and rear elements in a Circular Queue can be complex, especially when the queue is full and the front and rear pointers are pointing to the same location.

- Not suitable for large data sets: Circular Queue is not suitable for large data sets because it has a fixed size. If the data size exceeds the capacity of the queue, it will overwrite old data.

- Extra memory: The implementation of Circular Queue requires extra memory to keep track of the front and rear pointers.

- More complex implementation: The implementation of Circular Queue is more complex than other types of queues, such as a linked list or array.

- Not suitable for certain use cases: Circular Queue is not suitable for certain use cases, such as a first-in first-out (FIFO) queue, where the order of the elements is important.

### Application
---
- Operating Systems: Circular Queue is used in operating systems for managing processes, scheduling and handling interrupts.

- Real-time systems: Circular Queue is widely used in real-time systems, such as audio buffering, where there is a continuous flow of data and the buffer has to be continuously updated.

- Communication systems: Circular Queue is used in communication systems, such as in the implementation of sliding window protocols, where the sender and receiver have a fixed number of packets that they can send or receive at a given time.

- Robotics: Circular Queue is used in robotics to store sensor data and control the movement of robots.

- Computer Networks: Circular Queue is used in computer networks, such as in the implementation of routing algorithms.


#### More queues
---
3) Priority Queue: A variation of a queue that assigns a priority to each element, and elements are dequeued in order of their priority.

4) Double Ended Queue (Deque): A queue that allows insertion and deletion of elements from both the front and the rear.

5) Linked List Queue: A queue that uses a linked list data structure to store elements, which can overcome the problem of a fixed size for simple queue and circular queue

6) Blocking Queue: A queue that blocks when it is empty and when it is full.

7) Multi-level Queue: A queue that prioritizes elements based on multiple levels of priority.

8) Bounded Queue: A queue that has a fixed maximum size.

9) Unbounded Queue: A queue that can grow indefinitely.

10)  Concurrent Queue: A queue that is designed to be thread-safe, allowing multiple threads to access the queue concurrently without data corruption.
