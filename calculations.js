function getMean(nums){
    const sum = nums.reduce((acc, num) => acc + num, 0);
const average = sum / nums.length
return average
}


function getMedian(numbArynonSort){
    let numbAry = numbArynonSort.sort((a, b) => a - b); 
    let arryLen = numbAry.length/2;
   
    if (arryLen === Math.floor(arryLen)){
        const median = (numbAry[arryLen-1]+numbAry[arryLen])/2
      
       return median
    }
    
    const median =(numbAry[arryLen-.5])
    return median
   
  
}

function getMode(numbArynonSort){
    const count = {};
    const numbAry = numbArynonSort.map(Number).sort((a, b) => a - b);
  // Iterate through the array to count occurrences of each element
  numbAry.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
    
});
    //portions of mode logic were assisted with chat GTP
  // Find the mode(s)
  let mode = [];
  let maxCount = 0;

  for (const num in count) {
    if (count[num] > maxCount) {
    
      mode = [parseInt(num, 10)];
      console.log(`here is the mode while being parsed ${mode}`)
      maxCount = count[num];
    } else if (count[num] === maxCount) {
      mode.push(parseInt(num, 10));
    }
  }
  return mode
}

module.exports = {
    getMean,
    getMedian,
    getMode
}