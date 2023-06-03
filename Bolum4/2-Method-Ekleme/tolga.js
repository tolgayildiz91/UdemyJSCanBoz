let ogrenci = {
    ad:'Tolga',
    yas:32,
    email:"tolgayildiz91@hotmail.com.tr",
    sinif:1,
    dersler:['javascript','react','c#'],
    login()
    {
        console.log("Öğrenci Giriş Yaptı");
    },
    logout:function()
    {
        console.log("Öğrenci Çıkış Yaptı");
    }
};


ogrenci.login();
ogrenci.logout();