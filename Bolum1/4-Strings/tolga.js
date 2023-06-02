console.log("Merhaba Dünya");

let email="deneme@hotmail.com";

console.log(email);

let ad="Tolga";
let soyad="Yıldız";
let adSoyad= ad+" " +soyad;
console.log(adSoyad);

//Karakterleri Çekme
console.log(adSoyad[2]);

//Kaç Karakter
console.log(adSoyad.length);

//Methodlar

console.log(adSoyad.toUpperCase());

let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);

console.log(adSoyad);

let index = adSoyad.indexOf("l");
console.log("l'nin bulunduğu index :"+index);