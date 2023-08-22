/*Two Sum (Easy)
--input is array and target (sum of two elements in array)
-x+ y = target
-use object to store all the indices
-loop throuhg array and determine the "x" by subtracting current element from the target
-if "x" exists, return the indice of that element and the index of the difference
-if not, just return the index

*/

let arr = [2,7,11,15]
let sum = 9

var twoSum = function(nums, target) {
    //index(X) + index(Y) = target
    let allIndices = {}


    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i]

        if(allIndices[difference] !== undefined){
            return [i, allIndices[difference]]
        } else {
            allIndices[nums[i]] = i
        }


}    
    };

    console.log(twoSum(arr,sum))