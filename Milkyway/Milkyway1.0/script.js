function Kliknij()
{
    //const jasonek = '{"wychowawca":"Monika Słomkowsa","klasa":"2G","rocznik":"2021","liczbaUczniow":"30","profil":"Programistyka"}'
    //const jasonO = JSON.parse(jasonek);
    const divy = document.getElementsByTagName("div");
    const plikJSON = "infoteka.json"
    $(divy[0]).load(plikJSON,"",
        function(zawartosc, statusTxt , xhl)
        {
            console.log(xhl)
            if(statusTxt!="success") 
            {
                divy[0].innerHTML="Wystąpił Błąd przy wczytywaniu";
                return 0;
            }
            
            const jasonO = JSON.parse(zawartosc);
            var bufor ='';
            bufor+="wychowawca "+jasonO.wychowawca+"<br>";
            bufor+="klasa "+jasonO.klasa+"<br>";
            bufor+="rocznik "+jasonO.rocznik+"<br>";
            bufor+="liczba Uczniow "+jasonO.liczbaUczniow+"<br>";
            bufor+="profil "+jasonO.profil+"<br>";
            divy[0].innerHTML=bufor;
        }
    )
    
    
    
}