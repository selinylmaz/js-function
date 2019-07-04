function soyle(text,callback){
    console.log(text);
    callback();
}
function cayDemle(){
    console.log("cay demleniyor..");
}
soyle("merhaba",cayDemle);
//degişkene fonksiyon atamayla callback yaptım
function soyle1(text,callback){
    console.log(text);
    callback();
}
var cayDemle1=function (){
    console.log("cay demleniyor");
}
soyle1("merhaba",cayDemle1);