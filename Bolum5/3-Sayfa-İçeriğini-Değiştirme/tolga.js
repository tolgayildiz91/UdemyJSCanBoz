const pdegeri = document.querySelector('p');
console.log(pdegeri.innerText);

pdegeri.innerText='Tolga YILDIZ Fullstack Developer'

const pdegerleri=document.querySelectorAll('p');
pdegerleri.forEach(deger=>{
    console.log(deger.innerText);
    deger.innerText +=' yeni alan';
})

const icerik=document.querySelector('.icerik');
console.log(icerik.innerHTML);

icerik.innerHTML+='<h2> Vue Js, React Js, Angular Js</h2>'

const ogrenciler =['can','tuba','elif'];
ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML+=`<p>${ogrenci}</p>`;
})