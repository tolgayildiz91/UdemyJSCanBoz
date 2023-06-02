let isimler =['tolga',"can","ahmet"]

console.log(isimler[1]);

isimler[1]="mehmet";
console.log(isimler[1]);

let yaslar=[3,18,25,50];
console.log(yaslar[3]);

let rastgele=['tolga','Yıldız',10,15]
console.log(rastgele);


console.log(rastgele.length);


let tireli=isimler.join("-");
console.log(tireli)


let virgullu=isimler.join(",");
console.log(virgullu)

let sira=isimler.indexOf('ahmet');
console.log(sira)

let ekle=isimler.concat(['merve','suna'])

console.log(ekle)

let elemanEkle=isimler.push('Leyla')
console.log(isimler)
isimler.pop();
console.log(isimler)