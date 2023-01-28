### Introduction to C
  ---
- Designed by Dennis Ritchie
- First appearance- 1972
- Uses extension .c or .h
- Developed to make assembly language work much easier
- Procedural Language
- Much faster
- Handles low-level activity much better
- UNIX OS and RDBMS MYSQL is written in C

#### Here is an example of a simple C program that prints "Hello, World!" to the console:


```
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
```

> In this example, the #include <stdio.h> line includes the standard input/output library, which contains the printf() function that is used to print text to the console. The main() function is the entry point of the program and is where the code that runs when the program starts. Inside the main() function, the printf() function is used to print the text "Hello, World!" to the console. The return 0; statement at the end of the main() function indicates that the program has successfully completed.