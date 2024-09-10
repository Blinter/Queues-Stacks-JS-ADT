# Queues and Stacks

## **Queues**

Make a ***Queue*** class. It should include methods for enqueuing, dequeuing, peeking, and checking if the queue is empty.

Make it throw an error if you try to dequeue from an empty queue.

## **Stacks**

Make a ***Stack*** class. It should include methods for pushing, popping, peeking, and checking if the stack is empty.

Make it throw an error if you try to pop from an empty stack.

---
### TODO
## **Build: Deque**

For extra practice with linked lists, build a deque using a doubly-linked list. Make sure it includes all of the expected methods for a deque.

### **Browser Back/Forward**

Design how you could design a browser back/forward system using two stacks, so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, and so on).

Write pseudo-code for this.

### **String Reversal**

Write a function that reverses a string by handling one letter at a time. You cannot use an arrays, nor can you use any string-reversal built-in method.

### **Balanced Brackets?**

Write a function that is passed a string which can contain any text, including different kinds of brackets: `{} [] ()`.

It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

Examples of balanced strings:

- `hello` *(no brackets)*
- `(hi) [there]`
- `(hi [there])`
- `(((hi)))`

Imbalanced:

- `(hello` *(bracket left open at end)*
- `(nope]` *(wrong type closed)*
- `((ok) [nope)]` *(closed out of order)*

### **Josephus Survivor**
This is a classic algorithm problem, based on a Biblical-era tale.

### **Calculator**

In this exercise, you’ll build a “polish notation calculator”.

Polish notation is a different way to write an artithmetic expression. For example, instead of writing ***1 + 2 * 3***, as we would in normal (“infix”) style, we could write it with the operators to the left of their arguments. This expression would become ***+ 1 * 2 3***. You can read a polish notation expression backwards to see exactly what it does — in this case, multiply 2 times 3, and add that result to 1.

---

### Hacker Rack Challenges