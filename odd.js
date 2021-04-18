var Arr=[1,2,3,4,5,6,7];
//using Anonymous function
var odd=function(arr){
    for (var i=0;i<arr.length;i++){
         if(arr[i]%2!=0){
             console.log(arr[i]);
         }
    }
}
odd(Arr);

//using IIFE function
var res=(function(arr){
    for (var i=0;i<arr.length;i++){
             if(arr[i]%2!=0){
                console.log(arr[i]);
             }
        }
     
})(Arr);
console.log(res);
