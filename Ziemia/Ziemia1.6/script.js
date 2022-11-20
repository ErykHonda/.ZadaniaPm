function wywolaj()
{
    //var dziecek = document.getElementById("span1");
    //var rodzic = dziecek.parentNode;
    //rodzic=rodzic.parentNode;
    //rodzic.outerHTML="<h1>WŁAMAŁEM SIE TOBIE NA STRONĘ</h1>"
    //divio1 - id idva

    //var r = document.getElementById("divio1");
    //var ile = r.childElementCount;//liczba dzieci
    //var czyMaD = r.hasChildNodes();//czy jest tekstem węzłowym
    //var WybierzD = r.children[0];

    //var DP = r.firstElementChild;
    //var LP = r.lastElementChild;

    /*
    console.log(ile);
    console.log(czyMaD);
    console.log(WybierzD);
    console.log(DP);
    console.log(LP);
    */
    
    var nowyelement = document.createElement("div")
    var element = document.getElementById("paragrafik")
    element.appendChild(nowyelement)
    
    var nowyelement = document.createElement("strong")
    var nowyeltekst=document.createTextNode(" wdsadasdasd");
    nowyelement.append(nowyeltekst);

    var element = document.getElementById("paragrafik")
    element.appendChild(nowyelement)

    console.log()
    

}