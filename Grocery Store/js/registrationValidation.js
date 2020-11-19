function validate_fileupload(fileName)
{
    var file_extension = fileName.split('.').pop().toLowerCase(); 

    if(file_extension != "jpg")
    {
        alert("Invalid file Format. Only JPG allowed.");
        document.getElementById("profilepic").value="";
    }
}

function validate()
{
    var gender = document.getElementsByName('gender'); 
    var count=0;
    var mailformat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]$/ ;
    var phoneformat=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;
    
    for(i = 0; i < gender.length; i++)
    { 
        if(gender[i].checked) 
            count=count+1; 
    } 
    if(!(document.getElementById("ID_Text").value>0) || document.getElementById("ID_Text").value == "")
    {
        alert("Customer ID should be an positive number.");
        document.getElementById("ID_Text").style.border="4px solid red";
    }
    else if(document.getElementById("Name_Text").value%10 == 0 || document.getElementById("Name_Text").value == "")
    {
        document.getElementById("ID_Text").style.border="none";
        alert("Enter Name Correctly.");
        document.getElementById("Name_Text").style.border="4px solid red";
    }
    else if(count==0)
    {
        document.getElementById("Name_Text").style.border="none";
        alert("Please select Gender.");
        document.getElementById("gender").style.border="4px solid red";
    }
    else if(document.getElementById("Address_Text").value == "")
    {
        document.getElementById("gender").style.border="none";
        alert("Please enter your Address.");
        document.getElementById("Address_Text").style.border="4px solid red";
    }
    else if(!mailformat.test(document.getElementById("Email_Text").value))
    {
        document.getElementById("Address_Text").style.border="none";
        alert("Email Id format incorrect. Eg. abc@gmail.com");
        document.getElementById("Email_Text").style.border="4px solid red";
    }   
    else if(!phoneformat.test(document.getElementById("Phone_Text").value))
    {
        document.getElementById("Email_Text").style.border="none";
        alert("Enter Valid Contact No. Eg. 123456789");
        document.getElementById("Phone_Text").style.border="4px solid red";
    }
    else if(document.getElementById("profilepic").value == "")
    {
        alert("Please add a Profile Pic.");
    }
    else
    {
        alert("Registration Successfull.");
    }
}