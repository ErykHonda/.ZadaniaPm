//hasla i loginy

const THasla = ["Admin", "User"];
const TLogin = ["Admin", "User"];




function logowanie(loginek, haselko)
{
    //login
    var Plog = document.getElementById("Plogino");
    var Ppasword = document.getElementById("Ppasword");
    var Slogoia = false;//stan zalogowania

    if(loginek=="")
    {
        if(Plog.childElementCount==1)
        {
            var twojaara = document.createElement("strong");
            var teks = document.createTextNode("Nie Podano Loginu")
            twojaara.appendChild(teks)
            Plog.appendChild(twojaara)
        }

    }else if(Plog.childElementCount==2)
    {
        var dziecek = Plog.children[1]
        Plog.removeChild(dziecek)
    }

    
    //haslo
    if(haselko=="")
    {
        if(Ppasword.childElementCount==1)
        {
            var twojaara1 = document.createElement("strong");
            var teks1 = document.createTextNode("Nie Podano Hasła")
            twojaara1.appendChild(teks1)
            Ppasword.appendChild(twojaara1)
        }
    }else if(Ppasword.childElementCount==2)
    {
        var dziecek = Ppasword.children[1]
        Ppasword.removeChild(dziecek)
    }
    if(haselko!="" && loginek!="")
    {
        console.log("-----------------------");
        console.log("Login: "+loginek);
        console.log("Haslo: "+haselko);
        //console.log(THasla.length)
        for(i=0;i<THasla.length&&i<TLogin.length;i++)
        {
            if(THasla[i]==haselko && TLogin[i]==loginek)
            {
                console.log("");
                console.log("zalogowano");
                Slogoia = true;
            }
            
        }
        if(Slogoia!=true)
        {
            console.log("");
            console.log("Nie zalogowano / Zły Login Lub Haslo");
            
        }
        console.log("-----------------------");
        console.log("");
    }

    
    
}