// Import stylesheets
import './style.css';
import Queue from './queue';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Basic Queue Implementation - TypeScript </h1>
<code>
const q = new Queue(10);<br>
q.enqueue(1);<br>
q.show(); // Queue: [ 1 ]<br>
q.enqueue(2);<br>
q.show(); // Queue: [ 1, 2 ]<br>
q.enqueue(3);<br>
q.show(); // Queue: [ 1, 2, 3 ]<br>
console.log(q.dequeue()); // 1<br>
q.show(); // Queue: [ 2, 3 ]<br>
console.log(q.size()); // 2<br>
q.clear();<br>
q.show(); // Queue: [ ]<br>
</code>
`;

const q = new Queue(10);
q.enqueue(1);
q.show(); // Queue: [ 1 ]
q.enqueue(2);
q.show(); // Queue: [ 1, 2 ]
q.enqueue(3);
q.show(); // Queue: [ 1, 2, 3 ]
console.log(q.dequeue()); // 1
q.show(); // Queue: [ 2, 3 ]
console.log(q.size());
q.clear();
q.show(); // Queue: [ ]
