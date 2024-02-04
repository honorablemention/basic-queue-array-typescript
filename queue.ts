/**
 * Standard Queue (Array Implementation)
 * @constructor(max: number)
 */
class Queue<T> {
  private _queue: T[] = [];
  private _max: number;

  /**
   * @argument max: number The max size of the queue
   */
  constructor(max: number) {
    if (max < 1) throw new Error('Cannot create queue with length less than 1');
    this._max = max;
  }

  /**
   * @name enqueue(data: T)
   * @argument data: T
   * @description Add data to end of Queue
   * @throws Error if queue is at max; data will not be enqueued
   * @returns Queue<T>
   */
  enqueue(data: T): Queue<T> {
    if (this.size() === this._max)
      throw new Error('Cannot enqueue element; max size reached');
    this._queue.push(data);
    return this;
  }

  /**
   * @name dequeue()
   * @description Remove data from front of Queue
   * @throws Error if queue is empty; data will not be dequeued
   * @returns T
   */
  dequeue(): T {
    if (this.size() === 0)
      throw new Error('Cannot dequeue element; Queue is empty');
    return this._queue.shift();
  }

  /**
   * @name clear()
   * @description Removes all elements from Queue
   * @returns Queue<T>
   */
  clear(): Queue<T> {
    this._queue = [];
    return this;
  }

  /**
   * @name size()
   * @description The size of the Queue<T>
   * @returns number
   */
  size(): number {
    return this._queue.length;
  }

  /**
   * @name show()
   * @description Neatly prints Queue contents to console
   * @returns void
   */
  show(): void {
    console.log(`
      Queue: [ ${this._queue.join(', ')} ]
    `);
  }
}

export default Queue;
