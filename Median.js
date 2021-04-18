var arr1=[11,12,13,14];
var arr2=[5,6,7,8];
const findMedian=function(arr1,arr2){
    var arr3=[...arr1,...arr2];
    var myArr=arr3.sort();
    var len=arr3.length;
       if(len%2==0){
        mid1=Math.ceil(len/2);
        mid2=mid1+1;
        median=(myArr[mid1]+myArr[mid1-1])/2;
    }
    return median;
}
const Median=findMedian(arr1,arr2);
console.log(Median);

//using IIFE function

const findMedians=(function(arr1,arr2){
    var arr3=[...arr1,...arr2];
    var myArr=arr3.sort();
    var len=arr3.length;
       if(len%2==0){
        mid1=Math.ceil(len/2);
        mid2=mid1+1;
        median=(myArr[mid1]+myArr[mid1-1])/2;
    }
    return median;
}

)(arr1,arr2);
console.log(findMedians);