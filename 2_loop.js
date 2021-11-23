
 /**
  * 
  * A program that uses a for loop to create an array containing 10 random numbers from 1 to 100
  * 
*/



//number between 1-100
function random100() {      
  return Math.floor(Math.random() * 100) + 1;
}


//Push 10 random numbers to 'arr' array
let arr = [];
function createRandomList() {
  for (let i = 0; i < 10; i++) {
    arr.push(random100());
  }
};


createRandomList(arr);


//for loop to log string of index and number from the ranom number array
let itemNum = 0;
for (let y = 0; y < 10; y++) {
  itemNum++
  console.log(`Item ${itemNum} in the array is ${arr[y]}`)
}
; 

