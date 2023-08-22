document.getElementById('button-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    // console.log('user Email:', userEmail.value);
    // console.log('user Password:', userPassword.value)
    if ( email === 'shuvo@gorib.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }else{
        alert('sorry you are not allowed to go there')
    }
})