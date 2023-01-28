### Array
---
- Linear Data Structures using C
- Elements are stored in contiguous memory locations
- Can access elements randomly using index
- Stores homogeneous elements i.e, similar elements
- Syntax:
- Array declaration
  > Datatype varname [size]  ;
   
  > Can also do declaration and initialization at once
    Datatype varname [] = {ele1, ele2, ele3, ele4};


#### An array is a collection of elements of the same data type stored in contiguous memory locations. Elements are accessed by their index, which is an integer value. Here is an example of an array in C:

```
#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    int i;

    for (i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }

    return 0;
}

```

#### Advantages
---
- Random access
- Easy sorting and iteration
- Replacement of multiple variables
  
#### Disadvantages
---
- Size is fixed
- Difficult to insert and delete
- If capacity is more and occupancy less, most of the array gets - wasted 
- Needs contiguous memory to get allocated

#### Applications
---
- For storing information in a linear fashion
- Suitable for applications that require frequent searching