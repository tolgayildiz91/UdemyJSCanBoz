const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value;
    const usernamePatter=/^[a-z]{6,10}$/;

    if(usernamePatter.test(username))
{
    message.textContent="Başarılı"
}
else
{
    message.textContent="Lütfen hepsini küçükharf ve 6 ile 12 karakter arasında giriniz"
}

})

