# basic-queue-array-typescript

# Basic Queue Implementation - TypeScript
```
const q = new Queue(10);
q.enqueue(1);
q.show(); // Queue: [ 1 ]
q.enqueue(2);
q.show(); // Queue: [ 1, 2 ]
q.enqueue(3);
q.show(); // Queue: [ 1, 2, 3 ]
console.log(q.dequeue()); // 1
q.show(); // Queue: [ 2, 3 ]
console.log(q.size()); // 2
q.clear();
q.show(); // Queue: [ ]
```

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/honorablemention/basic-queue-array-typescript)
