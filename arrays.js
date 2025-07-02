//scenario-1: copying an array from one variable to another.

arr=[1,2,3,4];
arr2= arr; //this line only copy the reference of arr
arr2=[...arr]; //meanwhile this line makes the copy of the arr and assign it to the arr2
arr2.pop();
console.log(arr);
console.log(arr2);

//spread operator
var state={name:"jana", age:21}
var copy={...state}
copy.age=22;
console.log(copy.name, copy.age);

//Destructuring
var arr1=[function(){}, 55, {name: "janarthanan"}]
const[,,third]=arr1
console.log(third.name)


//Arrow function (Implicit return)
const abcd=()=> 12
console.log(abcd)

//escaping the curly braces when returning object
const value=()=>({name:"jana", age:22})

//map and filter


// Understanding for React:
// => In react we are not allowed to change the existing value(array, objects) in the state. But we can replace the value(array, objects) with the new value(array, objects)
// =>