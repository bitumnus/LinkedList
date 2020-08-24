import { ListNode } from './ListNode';

export class LinkedList {

    private head: ListNode = null;

    /**
     * Add the given data value to the beginning of the list.
     * @param value the data value to be contained in the new ListNode.
     * @returns the ListNode that was created, containing the given data value.
     */
    public addToHead(value: string): ListNode {

        // TODO
        this.head.value = value;
        return this.head;
    }

    /**
     * Returns the 'head' node of the linked list.
     */
    public getHead(): ListNode {

        // TODO
        return;
    }

    /**
     * Returns the ListNode from the list at the given index.
     * @param index the index of the node, starting with the head at index 0.
     * @throws an error if the given index is invalid.
     */
    public get(index: number): ListNode {

        try {
            if ( typeof index !== 'number' )
            throw 'index is invalid';
         }
         catch (e) {
            throw new Error('oops');
         }
        return LinkedList.get(0);
    }

    /**
     * Returns an array containing the values contained in the list starting
     * with the head node. If there are no items in the list, then an empty
     * list is returned.
     */
    public values(): Array<string> {

        // TODO
        let listArr = [];
        if (this.head.value) {
            listArr.push(this.head.next.value)
            
        }
        return listArr;
    }
}
