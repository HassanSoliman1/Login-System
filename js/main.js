var arrayAllValues;

var nameInput = document.getElementById("nameId");
var emailInput = document.getElementById("emailId");
var passwordInput = document.getElementById("passwordId");
var emailInputLo = document.getElementById("emailInputLoID");
var passwordInputLo = document.getElementById("passwordInputLoID");


if(localStorage.getItem("valuesStoring") !=null)
{
    arrayAllValues = JSON.parse(localStorage.getItem("valuesStoring"))

}
else
{
    arrayAllValues = [] ;
}

function create()
{
    var nameValue = nameInput.value;
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;


    var allValues = {name:nameValue,email:emailValue,password:passwordValue};

    if(nameValue =="" || emailValue=="" || passwordValue=="")
    {
    //    document.getElementById("All inputs is required").innerHTML = '<span class=" text-danger">All inputs is required</span>'
        alert("All inputs is required");
    }
    else{

    arrayAllValues.push(allValues);

    localStorage.setItem("valuesStoring" , JSON.stringify(arrayAllValues));
    
    //Call
    clearForm();

    document.getElementById("suc").innerHTML = '<span class="text-success">Its been successful.</span>'
    
    }
}

//  functionOfClear
function clearForm()
{
    nameInput.value ="";
    emailInput.value="";
    passwordInput.value="";
}

function login()
{
    
    var password = passwordInputLo.value
    var email = emailInputLo.value
    
    for (var i = 0; i < arrayAllValues.length; i++) {
    
        if (arrayAllValues[i].email.toLowerCase() == email.toLowerCase() && arrayAllValues[i].password.toLowerCase() == password.toLowerCase()) {
   
     document.getElementById("body").innerHTML = ` 
    <div>
     <div class="container my-5 text-center h-75 d-flex align-items-center">
        <div class="mini-box m-auto w-75 p-5">
    
            <h1>Welcome ${arrayAllValues[i].name} </h1>

        </div>
    </div>
</div>
    `
       
}  
    
}

//document.getElementById("incorrect").innerHTML = `<span class="p-2 text-danger">incorrect email or password</span>`

  //alert("incorrect email or password")

}


document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);

