const email = document.querySelector('.email')
const password = document.querySelector('.password')
const submit = document.querySelector('.submit')


submit.addEventListener('click' , e=>{
    e.preventDefault();

    if(email.value === '' && password.value === ''){
        alert('Fill the area')
    }


    if(email.value === 'vanna' && password.value === 'top'){
        localStorage.setItem('onAuth' , 'true')
        window.open('index.html' , '_self')
    }else{
        localStorage.setItem('onAuth' , 'false')
        email.value === ''
        password.value === ''
    }
})




window.addEventListener('load' , () =>{
    if(localStorage.getItem('onAuth') === 'true'){
        window.open('index.html' , '_self')
    }
    else{
        return
    }
})