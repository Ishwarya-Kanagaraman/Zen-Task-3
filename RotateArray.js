var arr=[1,2,3,4,5,6,7];
var key=3;
var RotatesArray=function(arr,key){
    var temp=[];
    for(var i=0;i<key;i++){
        temp[i]=arr[i];
    }
    var mdArr=arr.splice(key);
    var rotatedArr=[...mdArr,...temp];
    console.log(rotatedArr);
}
RotatesArray(arr,key);

// using IIFE function

let RotateArray=(function(arr,key){
    var temp=[];
    for(var i=0;i<key;i++){
        temp[i]=arr[i];
    }
    var mdArr=arr.splice(key);
    var rotatedArr=[...mdArr,...temp];
    console.log(rotatedArr);
})(arr,key);

