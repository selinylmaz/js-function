function soyle(text,callback){
    console.log(text);
    callback();
}
function cayDemle(){
    console.log("cay demleniyor..");
}
soyle("merhaba",cayDemle);