window.onload = function ()
{
    if (document.cookie.length != 0) 
    {
        var AllCookies, Temp;
        AllCookies = document.cookie.split(';');
        for (var i=0; i < AllCookies.length; i++) 
        {
            Temp = AllCookies[i].split('=');
            if (Temp[0] == " UsernameText")
            {
                document.getElementById("Username_Text").value = Temp[1];
            }
            if(Temp[0] == " PhoneText")
            {   
                document.getElementById("Phone_Text").value = Temp[1];
            }
        }

    }
}

function Validate()
{
    var Branch = document.getElementsByName('Branch'); 
    var count=0;
    var nameformat=/^[a-zA-Z]*$/;
    var mailformat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]$/ ;
    var phoneformat=/^[789]\d{9}$/ ;
    var usernameformat=/^[A-Z]/;
    var passformat = /^[a-zA-Z]\w{3,12}$/;
    for(i = 0; i < Branch.length; i++)
    { 
        if(Branch[i].checked) 
            count=count+1; 
    } 
    
    if(!nameformat.test(document.getElementById("Name_Text").value) || document.getElementById("Name_Text").value == "")
    {
        alert("Name field should accept only be characters");
        document.getElementById("Name_Text").style.border="2px solid red";
    }
    else if(!mailformat.test(document.getElementById("Email_Text").value))
    {
        alert("Email Id format incorrect. Eg. abc@gmail.com");
        document.getElementById("Email_Text").style.border="2px solid red";
    }   
    else if(count==0)
    {
     
        alert("Please select Branch.");
        document.getElementById("Branch").style.border="2px solid red";
    }
    else if(document.getElementById("University_Text").value == "")
    {
        
        alert("Please enter your University.");
        document.getElementById("University_Text").style.border="2px solid red";
    }
    else if(document.getElementById("State_Text").value == "")
    {
       
        alert("Please enter your State.");
        document.getElementById("State_Text").style.border="2px solid red";
    }
    else if(document.getElementById("Address_Text").value == "")
    {
        
        alert("Please enter your Address.");
        document.getElementById("Address_Text").style.border="2px solid red";
    }
    else if(document.getElementById("Age_Text").value == "" || document.getElementById("Age_Text").value<=0)
    {
        
        alert("Please enter Positive Age.");
        document.getElementById("Age_Text").style.border="2px solid red";
    }
    else if(!phoneformat.test(document.getElementById("Phone_Text").value))
    {
        
        alert("Phone number field should have exactly 10 digits");
        document.getElementById("Phone_Text").style.border="2px solid red";
    }
    else if(document.getElementById("Username_Text").value == "" || !usernameformat.test(document.getElementById("Username_Text").value))
    {
        
        alert("Please enter your Username. Note : First character should be capital letter in username");
        document.getElementById("Username_Text").style.border="2px solid red";
    }
    else if(!passformat.test(document.getElementById("Password_Text").value))
    {
        alert("Password Format Is Incorrect");
        document.getElementById("Password_Text").style.border="2px solid red";
    }
    else
    {
        CookieGenerate();
        alert("Registration Successfull.");
    }
}

function CookieGenerate() 
{
    document.cookie="UsernameText ="+document.getElementById("Username_Text").value+"; expires=Thu, 17 Dec 2020 12:00:00 UTC";
    document.cookie="PhoneText ="+document.getElementById("Phone_Text").value+"; expires=Thu, 17 Dec 2020 12:00:00 UTC";

    alert("Registration Successfull.");
    window.location.replace("DOMParser.html");
}