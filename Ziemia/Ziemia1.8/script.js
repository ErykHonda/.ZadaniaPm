
function kolor(k)
{
    var elm = document.getElementById("zmkolor");
    var att = document.createAttribute("style");
    

    switch(k)
    {
        case 'R': att.value = 'color: red'; break;
        case 'G': att.value = 'color: green'; break;
        case 'B': att.value = 'color: blue'; break;
        default: att.value = 'color: black'; break;
    }


    elm.setAttributeNode(att);

}