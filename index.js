console.log("Travel Validation with REGEX")
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');



// console.log(name1, email, phone);
name1.addEventListener('blur', ()=>{
    console.log("name is blurred");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/
    let str = name1.value
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid')
        name1.classList.remove('is-invalid')
    }
    else{
        console.log('your name is not valid');
        name1.classList.add('is-invalid')
    }
});




phone.addEventListener('blur', ()=>{
    console.log("name is blurred");

    let regex = /^[0-9]{10}$/;
    let str = phone.value
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid')
        phone.classList.remove('is-invalid')
    }
    else{
        console.log('no match');
        phone.classList.add('Your phone is not valid')
    }
});

email.addEventListener('blur', ()=>{
    console.log("name is blurred");

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid')
        email.classList.remove('is-invalid')
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid')
    }  
});

let submit= document.getElementById('submit');
    submit.addEventListener('click' , (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');

    let success= document.getElementById('success');
    success.classList.add('show');

    })