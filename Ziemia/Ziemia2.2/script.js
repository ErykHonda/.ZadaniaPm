function ZmianaDiva()
{
    var bufor=""
   

    const jsonek='{"producent":"Klucha SA","ilosc":10,"frasz":"miesne","waga":500,"kalorie":400}';
    let odczyt = JSON.parse(jsonek)
        
    bufor+=("producent: "+odczyt.producent+"<br>");
    bufor+=("ilosc: "+odczyt.ilosc+" szt.<br>");
    bufor+=("frasz: "+odczyt.frasz+"<br>");
    bufor+=("waga: "+odczyt.waga+" g<br>");
    bufor+=("kalorie: "+odczyt.kalorie+" kcl<br>");


    const NaszDiv = document.getElementById("divek")
    NaszDiv.innerHTML = bufor;
}

function ZdalnaDiva()
{
    $("#divek").load('pierogi.json','',
    function(zawartosc, statusTxt , xhl)
    {
       if(statusTxt != "success") return 0;
       const joobiekt = JSON.parse(zawartosc);
        document.getElementById("divek").innerHTML="Producent: "+joobiekt.producent
    }
    )
    //const coWS = document.getElementById("divek").innerHTML
    //console.log(coWS)
}