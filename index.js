console.log("Travel Validation with REGEX")
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(name1, email, phone);
name1.addEventListener('blur', ()=>{
    console.log("name is blurred");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/
    let str = name1.value
    console.log(regex, str);
    if(regex.test(str)){
        console.log('it matched')
    }
    else{
        console.log('no match')
    }
});
email.addEventListener('blur', ()=>{
    console.log("name is blurred");
});
phone.addEventListener('blur', ()=>{
    console.log("name is blurred");
});