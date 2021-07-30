const numberArray = [4, -2, 5, 19, -130, 0, 10];
numberArray.sort(function (firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return 1;
  }
});   
const first = numberArray[0];
const last = numberArray[numberArray.length - 1];
console.log(first, last);



let numbarray = [12, 15, 20, 25, 59, 79];
let sum = numbarray.reduce(function(a, b) { 
  return a + b;
});
let result = sum / numbarray.length;
console.log(result)




const firstArr = [1, 2, 3, ];
const secondArr = [4, 5, 6, ];
const  arrey3 = firstArr.concat(secondArr);
console.log(arrey3);


const arr123 = [1, 2, 3, ];
const reverseArr = arr123.reverse();
console.log(reverseArr);


const arrA = [1, 2, 3, ];
 arrA.push( 4, 5, 6, );
console.log(arrA);

const arrB = [1, 2, 3, ];
arrB.unshift(4, 5, 6, );
console.log(arrB);




const showArrA =['js', 'css', 'jq'];
const shifted = showArrA.shift();
console.log(shifted);
const popArr = showArrA.pop();
console.log(popArr);

const sliceArr = [1, 2, 3, 4, 5];
const resultSlice = sliceArr.slice(0, 3);
console.log(resultSlice);
const resultSlice2 = sliceArr.slice(3, 5);
console.log(resultSlice2);


const arrNew = [1, 2, 3, 4, 5];
arrNew.splice(1,2);
console.log(arrNew);


const arrNew2 = [1, 2, 3, 4, 5];
const spliceNew  = arrNew2.splice( 1,3 );
console.log(spliceNew);


const arr2New =[1, 2, 3, 4, 5];
arr2New.splice(3, 0, 'a', 'b', 'c');
console.log(arr2New);


const arr3New =[1, 2, 3, 4,5];
 arr3New.splice(1,4, 'a', 'b', 2 , 3, 4,'c',5, 'e',)
console.log(arr3New);


const arrNewSort = [3, 4, 1, 2, 7, ];
arrNewSort.sort(function(a,b){
  if (a > b) 
  return 1;
})
console.log(arrNewSort);


const obj = {js:'test',jq:'hello', css:'world' }
const obKeys = Object.keys(obj) ;
console.log(obKeys);



