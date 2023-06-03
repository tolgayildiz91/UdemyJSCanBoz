let ogrenci = {
    ad:'Tolga',
    yas:32,
    email:"tolgayildiz91@hotmail.com.tr",
    sinif:1,
    dersler:['javascript','react','c#']
};

console.log(ogrenci);

console.log(ogrenci.yas);

ogrenci.yas=25;
console.log(ogrenci.yas);

console.log(ogrenci['ad']);
ogrenci['ad']='Hakan';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);