let adSoyad="Tolga Yıldız"
let son=adSoyad.lastIndexOf("ı");
let ilk=adSoyad.indexOf("ı");

console.log(son);
console.log(ilk);

let bastanSona=adSoyad.slice(0,5);
console.log(bastanSona);


let bastanSonaSubstr=adSoyad.substr(5,5);
console.log(bastanSonaSubstr);

let yerDegistir = adSoyad.replace('ı','a');
console.log(yerDegistir);