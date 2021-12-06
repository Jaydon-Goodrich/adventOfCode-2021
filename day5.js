//PART ONE SOLUTION

const arr = [];

for(let i = 0; i <= 999; i++){
  let tmp = Array(999).fill(0)
  arr.push(tmp)
}

// const valueArr = Project Input

let bucket = 0;

valueArr.forEach((num) => {
  let x1 = num[0]
  let y1 = num[1]
  let x2 = num[2]
  let y2 = num[3]
  if(x1 == x2){
    let index = x1;
    let count = Math.min(y2, y1)
    while(count <= Math.max(y2, y1)){
      arr[count][index]++;
      if(arr[count][index] === 2){
        bucket++
      }
      count++;
    }
  }
  if(y1 === y2){
    let index = y1;
    let count = Math.min(x2, x1)
    while(count <= Math.max(x2, x1)){
      arr[index][count]++;
      if(arr[index][count] === 2){
        bucket++
      }
      count++;
    }
  }
  //PART TWO GOES HERE
})

console.log(bucket)


// PART TWO SOLUTION
// I JUST ADDED A CONDITION FOR WHEN x1 != x2 and y1 != y2
if(x1 != x2 && y1 != y2) {
    arr[y1][x1]++;
    if(arr[y1][x1] === 2){
        bucket++
      }
    while(x1 != x2){
      if(x1 < x2){
        x1++;
      }else{
        x1--;
      }
      if(y1 < y2){
        y1++;
      }else{
        y1--;
      }
      arr[y1][x1]++;
      if(arr[y1][x1] === 2){
        bucket++
      }
    }
  }