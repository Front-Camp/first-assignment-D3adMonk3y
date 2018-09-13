/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {

  let result = null;
  for(let i = 0; i < arr.length; i++ )
    if (!isNaN(arr[i]) && arr[i] !== -Infinity && arr[i] !== Infinity)
      if(result < arr[i])
      result = arr[i];

  return result;/* your logic here...*/
};

export default max;
