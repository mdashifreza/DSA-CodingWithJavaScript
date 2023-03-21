var reverseLinkList = function(head){
    let prev = null ;
    let curr = head;
    while(curr){
        let copy = curr.next;
        curr.next = prev;
        prev = curr;
        curr = copy;
    }
return prev;
}
console.log(reverseLinkList([1,2,3]))