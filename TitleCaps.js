var str="This is javascript class conducted by GUVI";
var titlecaps=function(str){
    var dumy=str.toLowerCase().split(' ');
   for(var i in dumy){
        dumy[i]=dumy[i][0].toUpperCase()+dumy[i].slice(1);
   }
   dumy.join(" ");
   var s="";
   for (var i in dumy){
        s=s+dumy[i]+" ";
}
console.log(s);
}

//using IIFE function
var TitleCase=(function(str){
     var dumy=str.toLowerCase().split(' ');
    for(var i in dumy){
         dumy[i]=dumy[i][0].toUpperCase()+dumy[i].slice(1);
    }
    dumy.join(" ");
    var s="";
    for (var i in dumy){
         s=s+dumy[i]+" ";
 }
 console.log(s);
 })(str);
 
