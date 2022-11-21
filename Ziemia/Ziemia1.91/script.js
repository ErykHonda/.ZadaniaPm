function ZiR()
{

    var element = document.getElementById("rozwinB")
    var spr = document.getElementById("rozwinB1")
    spr=spr.innerHTML
    

    if(element.innerHTML=="+")
    {
        if(spr=='-')
        {
            ZiR2()
        }
        element.innerHTML="-";
        var elementTekst = document.getElementById("dlugitekst")
        var att = document.createAttribute("class")
        att.value="tekstON";
        elementTekst.setAttributeNode(att)
    }else
    {
        element.innerHTML="+";
        var elementTekst = document.getElementById("dlugitekst")
        var att = document.createAttribute("class")
        att.value="tekstOFF";
        elementTekst.setAttributeNode(att)
    }
}
function ZiR2()
{

    var element = document.getElementById("rozwinB1")
    var spr = document.getElementById("rozwinB")
    spr=spr.innerHTML
    

    if(element.innerHTML=="+")
    {
        if(spr=='-')
        {
            ZiR()
        }
        element.innerHTML="-";
        var elementTekst = document.getElementById("dlugitekst1")
        var att = document.createAttribute("class")
        att.value="tekstON";
        elementTekst.setAttributeNode(att)
    }else
    {
        element.innerHTML="+";
        var elementTekst = document.getElementById("dlugitekst1")
        var att = document.createAttribute("class")
        att.value="tekstOFF";
        elementTekst.setAttributeNode(att)
    }
}

function zwijanie()
{
    ZiR();
    ZiR2();
}