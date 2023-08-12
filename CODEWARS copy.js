
self.onmessage = function(e){  //this is my "worker" (till)
  const {customers, startIndex, endIndex} = e.data;

  let totalTime = 0
  for(let i = startIndex; i <= endIndex; i++){
    totalTime += customers[i]
  }
  self.postMessage(totalTime)
}