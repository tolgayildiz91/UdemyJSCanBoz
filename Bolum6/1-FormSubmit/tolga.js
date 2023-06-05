const form = document.querySelector('.signupForm');
const userName=document.querySelector('#username')


form.addEventListener('submit',e=>{
    e.preventDefault();
    //console.log('Form Gönderildi')
    // console.log(userName.value)
    console.log(form.username.value)
})