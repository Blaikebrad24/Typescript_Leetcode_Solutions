
export class Node<T> {
    public nextPtr: Node<T> | null = null;
    public previousPtr: Node<T> | null = null;
    constructor(public data: T){}
}

export interface ExLinkedList<T> {

    insertAtFront(data: T): Node<T>;
    insertAtEnd(data: T): Node<T>;
    deleteNode(node: Node<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): Node<T> | null;
}

export class LinkedList<T> implements ExLinkedList<T> {
private head: Node<T> | null = null;

  public insertAtEnd(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      const getLast = (node: Node<T>): Node<T> => {
        return node.nextPtr ? getLast(node.nextPtr) : node;
      };

      const lastNode = getLast(this.head);
      node.previousPtr = lastNode;
      lastNode.nextPtr = node;
    }
    return node;
  }

  public insertAtFront(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.head.previousPtr = node;
      node.nextPtr = this.head;
      this.head = node;
    }
    return node;
  }

  public deleteNode(node: Node<T>): void {
    if (!node.previousPtr) {
      this.head = node.nextPtr;
    } else {
      const prevNode = node.previousPtr;
      prevNode.nextPtr = node.nextPtr;
    }
  }

  public search(comparator: (data: T) => boolean): Node<T> | null {
    const checkNext = (node: Node<T>): Node<T> | null => {
      if (comparator(node.data)) {
        return node;
      }
      return node.nextPtr ? checkNext(node.nextPtr) : null;
    };

    return this.head ? checkNext(this.head) : null;
  }

  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: Node<T>): T[] => {
      array.push(node.data);
      return node.nextPtr ? addToArray(node.nextPtr) : array;
    };
    return addToArray(this.head);
  }

  public size(): number {
    return this.traverse().length;
  }
}