 
const email=document.getElementById('email');
const password=document.getElementById('password');
const submit=document.getElementById('submit');

const email_error=document.getElementById('email_error');
const pass_error=document.getElementById('pass_error');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    console.log('check', email)
var email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //regular expressions
    if(!email.value.match(email_check))
      {
       e.preventDefault();
       email_error.innerHTML= "Valid Email is Required";
      }
      else
      {
        email_error.innerHTML="";
      }
    if(password.value.length <8)
        {
           e.preventDefault();
           pass_error.innerHTML="password cannot be less than 8 characters"; 
        }
        if(password.value.length >=20)
            {
                e.preventDefault();
                pass_error.innerHTML="Password must be less than 20 characters.";
            }
            if(password.value =='password')
                {
                    e.preventDefault();
                    pass_error.innerHTML="Password can't be password";
                }if(password.value=="")
                    {
                        e.preventDefault();
                        pass_error.innerHTML="Please enter the password";
                    }
})