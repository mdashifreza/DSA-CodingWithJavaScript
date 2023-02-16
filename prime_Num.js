function prime_Num(num){
    if(num == 2)
    {
        return true;
    }
    if(num < 2 || num%2 == 0)
    {
        return false;
    }
    if(num > 2)
    {
        for(let i=3; i<num; i++)
        {
            if(num%i == 0)
            {
                return false;
            }
        }
    }
return true;
}
let num=15;
for(i=0; i<=num ;i++)
{
    if(prime_Num(i))
    {
        console.log(i);
    }
}

