// let n = 5; 
// for(let i=1;i<=n;i++){
//   let string=""
//   for (let j=1;j<= n-1;j++){
//     string +=""
//   }
//   for (let k=1;k<=1;k++){
//     string +="*"
//   }
//   console.log(string);
// }


let n = 5; 
for(let i=1;i<=n;i++){
  let string=""
  for (let j=1;j<= n-i;j++){
    string +=" "
  }
  for (let k=1;k<=i;k++){
    string +="*"
  }
  console.log(string);
}
console.log('hello')