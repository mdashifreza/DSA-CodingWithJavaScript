var mergeListLinked = function(l1,l2){
    let mergeList = {
        value : -1,
        next:null
    }
    let itr = mergeList;
    while(l1 && l2){
        if(l1.val < l2.val){
            itr.next = l1;
            l1 = l1.next;
        }
        else{
            itr.next = l2;
            l2 = l2.next;
        }
    itr=itr.next;
    }
itr.next = l1 || l2;
console.log(mergeList);
return mergeList.next;
}
let l1=[1,2,3,4], l2=[1,5,6,7];
console.log(mergeListLinked(l1,l2))
