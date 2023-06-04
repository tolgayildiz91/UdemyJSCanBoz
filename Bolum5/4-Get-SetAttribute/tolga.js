const link = document.querySelector('a');
console.log(link.getAttribute('href'))

link.setAttribute('href','https://www.facebook.com');
link.textContent='Facebook';

const pDegeri= document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class','error')
pDegeri.setAttribute('style','color:blue')