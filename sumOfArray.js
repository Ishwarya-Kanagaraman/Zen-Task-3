var arr=[1,2,3,4,5];

var sumOfArray=function(array){
    var sum=0;
for(var i=0;i<array.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
}
sumOfArray(arr);

//using IIFE function

var sumOfArray=(function(array){
    var sum=0;
for(var i=0;i<array.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
})(arr);