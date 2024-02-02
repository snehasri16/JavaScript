function isPrime(num) {
    if (num <= 1) 
        return false;
  
    for (let i = 2; i <= num / 2; i++) 
      if (num % i === 0) 
        return false;
    
    return true;
  }
  
 function checkIsPrime(nums){
  const ans=[];
  for(let i=0;i<nums.length;i++){
    if(isPrime(nums[i])){
        ans.push(nums[i]);
    }
  }
  return ans;
 }
 
  nums=[1,2,3,4,5,6,7,8,9];
  console.log(checkIsPrime(nums));
  

  nums2=[10, 11, 12, 13, 14, 15];
  console.log(checkIsPrime(nums2));
// Output: [11, 13]
  