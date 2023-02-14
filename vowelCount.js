function vowelCount(str){
    let count = 0;
    for(let i=0; i<str.length; i++)
    {   
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
        {
            count++;
        }
    }
    if(count > 0)
    {
        console.log("Vowel are : ",count);
    }
    else
    {
        console.log("Note Found: ",count);
    }
}
vowelCount('md khnmn plhj');