//INPUT DATA

const arr = [2,1,1,1,1,1,1,5,1,1,1,1,5,1,1,3,5,1,1,3,1,1,3,1,4,4,4,5,1,1,1,3,1,3,1,1,2,2,1,1,1,5,1,1,1,5,2,5,1,1,2,1,3,3,5,1,1,4,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,4,1,5,1,2,1,1,1,1,5,1,1,1,1,1,5,1,1,1,4,5,1,1,3,4,1,1,1,3,5,1,1,1,2,1,1,4,1,4,1,2,1,1,2,1,5,1,1,1,5,1,2,2,1,1,1,5,1,2,3,1,1,1,5,3,2,1,1,3,1,1,3,1,3,1,1,1,5,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,4,1,1,3,2,1,2,1,1,2,2,1,2,1,1,1,4,1,2,4,1,1,4,4,1,1,1,1,1,4,1,1,1,2,1,1,2,1,5,1,1,1,1,1,5,1,3,1,1,2,3,4,4,1,1,1,3,2,4,4,1,1,3,5,1,1,1,1,4,1,1,1,1,1,5,3,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,4,4,1,1,1,1,1,1,1,1,3,1,3,1,4,1,1,2,2,2,1,1,2,1,1]

const tmpArr = [3,4,3,1,2]

//I USED THIS FOR PART ONE
for(let i = 0; i < 256; i++){
  tmpArr.forEach((num, i) => {
    if(num === 0){
      tmpArr.push(8);
      tmpArr[i] = 6;
    }
    else{
     tmpArr[i] = num - 1
    }
  })
}
console.log(tmpArr.length)

//AFTER REALIZING PART ONE WASN'T GOING TO WORK FOR PART TWO REWROTE TO JUST TRACK THE TOTALS
let totalArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

arr.forEach((item) => {
    if(item == 0){
        totalArr[0]++
    }
    if(item == 1){
        totalArr[1]++
    }
    if(item == 2){
        totalArr[2]++
    }
    if(item == 3){
        totalArr[3]++
    }
    if(item == 4){
        totalArr[4]++
    }
    if(item == 5){
        totalArr[5]++
    }
    if(item == 6){
        totalArr[6]++
    }
    if(item == 7){
        totalArr[7]++
    }
    if(item == 8){
        totalArr[8]++
    }
})

let tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for(let i = 0; i < 256; i++){
    tmp[0] = totalArr[1]
    tmp[1] = totalArr[2]
    tmp[2] = totalArr[3]
    tmp[3] = totalArr[4]
    tmp[4] = totalArr[5]
    tmp[5] = totalArr[6]
    tmp[6] = (totalArr[0] + totalArr[7])
    tmp[7] = totalArr[8]
    tmp[8] = totalArr[0]
    
    totalArr = [...tmp]
}
let total = 0;
totalArr.forEach((num) => total += num)

console.log(total)
