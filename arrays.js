//Decalre array with square parantheses
//declaring array as const to avoid overwriting array
const fruits = ['Mango', 'Guava','fig'];
//console.log("Frist fruitis",fruits[0]);
//print fruits using loop
fruits.push ("orange");


for(i=0;i<fruits.length;i++)
{
   // console.log("Fruit "+ (i+1) +" is: ", fruits[i])
}


//remove last element from array
fruits.pop;

for(i=0;i<fruits.length;i++)
{
   // console.log("Fruit "+ (i+1) +" is: ", fruits[i])
}

// Lenght of aaray is counted starting from one 
/* index starts with zero */

//console.log("Array length - 2: ",fruits[fruits.length-2]);
//console.log("Length of string :",fruits[1].length);
const fruit1 = ['Mango', 'Guava','fig'];
const fruit2 =['Kiwi','apple'];
// Concat 2 arrays 
//const fruitlist = fruits.concat(fruit2);

// Spread operater
//const fruitlist= [...fruit1,...fruit2]

//spread operator
const fruitlist= [...fruit1,'pineapple',...fruit2]

//fruits.push[fruit2[1]];
console.log(fruitlist);

//fruitlist.splice(1,1);
//console.log(fruitlist);


//fruitlist.splice(1,0,'Guava',);
//console.log(fruitlist);

//const fruitSlice=fruitlist.slice(4);
//console.log(fruitSlice);

const fruitSlice=fruitlist.slice(1,3);
console.log(fruitSlice);
