//map 
//insert items: map.set('info','ashif')
//acces map element :  map.get('info')
// to check element avalability :  map.has('info')
// to delete and element with keys : map.delete('info')
let map1 = new Map();
console.log(map1);
map1.set('info',{name:'ashif',age:23});
map1.set('data',{name:'azhaan',age:2});
console.log(map1);
//iteration using foreach
let data = map1.forEach((items,index)=>{
    console.log(index,">",items);
    console.log(index+" "+items);
})
// question concate output are result otherwise value line 13&14
//practice map question
console.log('--------------')
let map2 =  new Map();
map2.set('ashif','23')
map2.set('azhaan','3');
// let arr = [2,4,6,8];
for(let [key, value] of map2)
{   
    if(key == 'azhaan')
    {
        console.log(key+" ")
    }
}