function reverse(str){
    let len = str.length;
    let rev="";
    for(let i=0; i<len; i++)
    {
        rev = str.charAt(i)+rev;
    }
    console.log(rev);
}
reverse("ashif reza");
