window.onload = function ()
{
    if (document.cookie.length != 0) 
    {
        document.getElementById("RememberMe").checked=true;

        var AllCookies, Temp;
        AllCookies = document.cookie.split(';');
        for (var i=0; i < AllCookies.length; i++) 
        {
            // alert(AllCookies[i]);
            Temp = AllCookies[i].split('=');
            // alert(Temp);
            if (Temp[0] == "EmailId")
            {
                document.getElementById("EmailId").value = Temp[1];
            }
            if(Temp[0] == " Password")
            {   
                document.getElementById("Password").value = Temp[1];
            }
        }

    }
}

function Validate()
{
    var mailformat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]$/ ;  
    var passformat = /^[a-zA-Z]\w{3,12}$/;  
    if(!mailformat.test(document.getElementById("EmailId").value))
    {
        alert("Email Id format incorrect. Eg. abc@gmail.com");
        document.getElementById("EmailId").style.border="2px solid red";
    }
    else if(!passformat.test(document.getElementById("Password").value))
    {
        alert("The password's first character must be a letter, it must contain at least 4 characters and no more than 12 characters and no characters other than letters, numbers and the underscore may be used.");
        document.getElementById("Password").style.border="2px solid red";
    }
    else
    {
        alert("Login Successfull.");
        if(document.getElementById("RememberMe").checked==true)
        {
            CookieGenerate();
        }
        window.location.replace("index.html");
    }
}

function CookieGenerate() 
{
    document.cookie="EmailId="+document.getElementById("EmailId").value+"; expires=Thu, 17 Dec 2020 12:00:00 UTC";
    document.cookie="Password="+document.getElementById("Password").value+"; expires=Thu, 17 Dec 2020 12:00:00 UTC";
    window.location.replace("index.html");
}



  //document.cookie = "color=" + value + ";expires=Fri,1 Aug 1970 01:00:00 UTC;";