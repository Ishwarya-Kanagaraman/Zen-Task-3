var arr1=[1,2,3,'e','s','f','g','e','s',2];

let uniqueChars =function(arr){
    const dup= arr.filter((c, index) => {
    return arr1.indexOf(c) === index;
});
console.log(dup)
}
uniqueChars(arr1);

//using IIFE function

let RmDuplicate=(function(arr){
    const dup= arr.filter((c, index) => {
    return arr1.indexOf(c) === index;
});
console.log(dup)
})(arr1);

