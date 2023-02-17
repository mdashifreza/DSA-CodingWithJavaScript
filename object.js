var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
let result = library.sort((a,b)=>a.libraryID-b.libraryID);
console.log(result);
//
let maxSpeed ={
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};
let storeDataMaxSpeed = [];
for(let i in maxSpeed)
{
    storeDataMaxSpeed.push(i,maxSpeed[i]);
}
storeDataMaxSpeed.sort((a,b)=>{a-b});