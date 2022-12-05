function wykonaj()
{
    var x = '';
    var divek = document.getElementById("divus")
    divek.innerHTML=" "
    var element = document.getElementById("tekst1")
    var zawartosc = element.value

    divek.innerHTML += (typeof zawartosc+"<br>") 
    if(typeof zawartosc != 'object')
    {
        zawartosc = new String(zawartosc);
        divek.innerHTML += ("dokonano Konwersji : "+ typeof zawartosc+"<br><br>") 
    }

    dlugosc = zawartosc.length;

    for(var i = 0; i<dlugosc;i++)
    {
        divek.innerHTML += (zawartosc[i]+"<br>");
    }

}