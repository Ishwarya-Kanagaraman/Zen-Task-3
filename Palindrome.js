
var array=['eye','madam','ishu','racecar','aplha',121,5667]

const findPalindrome=array=>{
  return  array.filter(el=>{
    const str=String(el);
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]===str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
});
};
console.log(findPalindrome(array));
// using IIFE function
const findPalindromes=(function (array){
    return  array.filter(el=>{
      const str=String(el);
      let i=0;
      let j=str.length-1;
      while(i<j){
          if(str[i]===str[j]){
              i++;
              j--;
          }
          else{
              return false;
          }
      }
      return true;
  });
  })(array);
  console.log(findPalindromes);
 
