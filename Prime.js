var a1=[1,2,3,4,5,6,7,8,9];
var m=0;

 var prime=function (arr){
     for(var j=0;j<arr.length;j++){
     var n=arr[j];
   for (var i=1;i<=n;i++){
       if(n%i==0)
       m=m+1; 
    }
           if(m==2){
              console.log(n);
           }
           m=0;
        }
}
    
prime(a1);

//using IIFE function
console.log(" ");
var Prime=(function (arr){
    for(var j=0;j<arr.length;j++){
    var n=arr[j];
  for (var i=1;i<=n;i++){
      if(n%i==0)
      m=m+1; 
   }
          if(m==2){
             console.log(n);
          }
          m=0;
       }
})(a1);