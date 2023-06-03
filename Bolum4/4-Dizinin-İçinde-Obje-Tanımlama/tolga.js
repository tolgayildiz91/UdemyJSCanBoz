// const dersler=[
// {isim:'javascript',puan:90},
// {isim:'react',puan:80},
// {isim:'c#',puan:85}
// ];

let ogrenci={
    ad:'Tolga',
    yas:32,
    email:'tolgayildiz91@hotmail.com.tr',
    sinif:12,
    dersler:[
    {isim:'c#',puan:90},
    {isim:'react',puan:80},
    {isim:'javascript',puan:85},],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons()
    {
        console.log(this.dersler);
        // console.log(this);
        this.dersler.forEach(a =>{
            console.log(a.isim,a.puan);
        })
    }
};
// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();
