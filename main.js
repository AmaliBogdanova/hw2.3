var x = +prompt('Введите любое число')
var z = +prompt('Введите любое число')
var y = +prompt('Введите любое число')
if(x<z<y || y<z<x){
    console.log(z);
}else if(x<y<z || z<y<x){
    console.log(y);
}else if(y<x<z || z<x<y){
    console.log(x);
}