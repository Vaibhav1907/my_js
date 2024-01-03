// destructring concept

// let arr=[1,2,3,4,5]
// let[a,b,c,d,...rest]=arr
//  console.log(a,b,c,d,rest)
//  let{a,b}={a:1,b:2}
//   console.log(a,b)

// spread operator
// let arr=[1,2,3,4,5,6,7]
// let obj1={...arr}
// console.log(obj1)
// function sum(v1,v2,v3,v4,v5,v6,v7){
//     return v1+v2+v3+v4+v5+v6+v7

// }
// console.log(sum(...arr))

// // swap method

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

//     function swapArrays(arr1, arr2) {

//         let temp = [...arr1];
//         arr1 = [...arr2];
//         arr2 = [...temp];
//         return [arr1, arr2];
//     }
//     [arr1, arr2] = swapArrays(arr1, arr2);
//     console.log(arr1, arr2);



// // length method
//  function removeElementFromArray(array, element) {
//        const index = array.indexOf(element);
//         if (index !== -1) {
//            }
//         return array;
//      }
//      let a = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
//      a = removeElementFromArray(a, 'feb');
//      let arrLength = a.length;
//      console.log(arrLength);
//      console.log(a)
   
// the number which come more than one time to give a result


// let myArray = [1, 2, 3,7, 2, 4, 3,7, 5,5,5, 6, 4,7, 7,7,5, 1]
// let myobj = {}
// for (let i = 0; i < myArray.length; i++) {
//     let element = myArray[i]
//     if(myobj[element]){
//         myobj[element]++
//     }else{
//         myobj[element] = 1
//     }
    
// }
// console.log(myobj)



// let repeat = 0 
// let value;  
// for(let i in myobj){
//     if(myobj[i]>repeat){
//         repeat = myobj[i]
//         value = i
//     }

// }
// console.log(value)
// console.log(repeat)

// my new assisment
// function findDuplicates(arr) {
//     var duplicates = [];
//     var count = {};
  
//     for (var i = 0; i < arr.length; i++) {
//       var item = arr[i];
//       count[item] = count[item] >= 1 ? count[item] + 1 : 1;
//     }
  
//     for (var key in count) {
//       if (count.hasOwnProperty(key) && count[key] > 1) {
//         duplicates.push(parseInt(key));
//       }
//     }
  
//     return duplicates;
//   }
// var numbers = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7];
// var result = findDuplicates(numbers);
// console.log(result); 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add 2 elements: 
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'


// };

// // Destructuring the object into our variables
// var { firstname, lastname, dateofbirth } = employee;
// console.log( firstname, lastname, dateofbirth);

// var a= 5
// document.write(a)
// function factorial(n) { 
//     let ans = 1; 
     
//     if(n === 0)
//         return 1;
//     for (let i = 2; i <= n; i++) 
//         ans = ans * i; 
//     return ans; 
// }
 

// console.log(factorial(n));
// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // Destructuring the object into variables with
// // different names than the object variables
// var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
// console.log( fn, ln, dob);

// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // Destructuring the object into variables with
// // different names than the object variables
// var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
// console.log( fn, ln, dob);