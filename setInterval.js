//setInterval durdurmadıgımız surece devam eder ekrana 3 sn de bir selam yazmaya setTimeout ise bir defa yazar biter aradaki fark
setInterval(function(){
    console.log("selam")
},3000);
//sayi degerini arttırdı 1 sn de bir
var sayi=1;
setInterval(function(){
    console.log("selam"+sayi);
    sayi++;
},1000);
