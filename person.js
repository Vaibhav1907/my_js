
// const person={
//     "name":"vaibhav",
//      "roll":6,
//      "xyz":function add(){console.log(`MY name is ${this.name }\n my name is pooja`)}
// }
// person.xyz();
// console.log(newval);
function add()
{console.log(this.firstname)
     console.log('hello')
 }

 const person = {
     'firstname':'naveen',
    'roll':7,
   'xyz': add

 }
  const person2 = {
    'firstname':'ravi',
  'roll':7,
   'xyz': add  

}
const person3 = {
        'firstname':'naveen',
    'roll':7,
    'xyz': add

 }

 person.xyz()


