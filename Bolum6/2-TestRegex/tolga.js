
const username='tolga';
const pattern=/^[a-z]{5,15}$/;

// let sonuc=pattern.test(username);
// console.log(sonuc);

// if(sonuc)
// {
//     console.log('Başarılı');

// }
// else
// {
//     console.log('Başarısız');
// }


let sonuc=username.search(pattern);
 console.log(sonuc);