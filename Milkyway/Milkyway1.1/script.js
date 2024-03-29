const ListaIn1 = ["Mleko","Chleb"];
const ListaOut1 = ["Bułka"];
const ListaIn2 = ["Mleko1","Chleb1"];
const ListaOut2 = ["Bułka1"];
const ListyIn = [ListaIn1];//Shoping list
const ListyOut = [ListaOut1];//Delete Item
//tłumaczenie
var ListNumber,buttValue,NonValueAdd,ShopList,DeleteList,NewList;//języki


function MoveItemToDelete(why)
{

}

function StartingSeting(Lang,Theme)
{
    setTheme(Theme)
    AddMissingElement()
    setLanguage(Lang)
    
    if(document.getElementsByClassName("list").length>=1)
    {
        HideElement(0)
    }

}

function setTheme(color)
{//<link rel="stylesheet" href="Theme/pink-theme.css"></link>
    var theme = '<link rel="stylesheet" href="'
    switch(color)
    {
        case "PINK":
            theme+="Style/pink-theme.css";
            break;
        case "GREEN":
            theme+="Style/green-theme.css";
            break;
        default:
            theme+="Style/pink-theme.css";
            break;
    }
    theme+='"></link>'
    document.getElementById("LoadTheme").innerHTML=theme;
}   

function validation(n)
{
    var zawartosc = document.getElementsByClassName("get-text")[n].value
    if(zawartosc!="")
    {
        document.getElementsByClassName("validation")[n].innerHTML=""
        return true;
    }else 
    {
        document.getElementsByClassName("validation")[n].innerHTML=NonValueAdd
        return false;
    }
    
}

function AddToList(n)
{
    if(validation(n)==true)
    {
        ListyIn[n][ListyIn[n].length]=document.getElementsByClassName("get-text")[n].value;
        Refresh()
    }
}

function HideElement(who)
{
    const lista = document.getElementsByClassName("to-hide")[who]
    const OnOff = document.getElementsByClassName("minimalized")[who].childNodes[0]
    if(OnOff.innerHTML=="-")
    {
        OnOff.innerHTML="+";
        $(lista).hide()
    }else
    {
        OnOff.innerHTML="-";
        $(lista).show()
    }
    
    
}

function AddMissingElement()
{
    if(ListyIn.length==ListyOut.length)
    {
        return 0;
    }
    var listyHTML = document.getElementsByClassName("list")
    for(var i = 0 ; i<=(ListyIn.length - listyHTML.length);i++)
    {
        AddList()
    }
}

function setLanguage(Lang)
{
    var jasonLanguage;
    switch (Lang)
    {
        case "PL":
            jasonLanguage= "Language/PL-Language.json";
            break;
        case "ENG":
            jasonLanguage= "Language/ENG-Language.json";
            break;
        case "FR":
            jasonLanguage="Language/FR-Language.json"
            break;
        case "UK":
            jasonLanguage="Language/UK-Language.json"
            break;
        default:
            jasonLanguage= "Language/PL-Language.json";
    }
    
    $("#LoadLanguage").load(jasonLanguage,"",
    function(wynikTxt,statusTxt,xhr)
    {
        if(statusTxt!="success")
        {
            console.log("error")
            console.log(jasonLanguage)
            console.log(xhr)
            return 0;
        }
        const Language = JSON.parse(wynikTxt)
        console.log("Success Load ("+jasonLanguage+")")
        ListNumber=Language.ListNumber
        buttValue=Language.buttValue
        NonValueAdd=Language.NonValueAdd
        ShopList=Language.ShopList
        DeleteList=Language.DeleteList
        NewList=Language.NewList
        Refresh()
    }
    );
    
}

function Refresh()
{
    
    for(var i = 1 ; i<=(document.getElementsByClassName("list").length) ; i++)
    {
        
        var PM = document.getElementsByClassName("minimalized")[i-1].childNodes[0]
        if(PM.innerHTML==="+")
        {
            LoadList(i)
            HideElement(i-1)
        }else
        {
            LoadList(i)
        }
    }
    LoadFutter()
}

function GetToList(nr,InOut)
{
    var bufor=''
    var fi = "<li>"
    var en = "</li>"
    switch(InOut)
    {
        case "IN":
            for(var i = 0; i<ListyIn[nr].length ;i++)
            {
                bufor+=(fi+ListyIn[nr][i]+en)
            }

            break;
        case "OUT":
            for(var i = 0; i<ListyOut[nr].length ;i++)
            {
                bufor+=(fi+ListyOut[nr][i]+en)
            }
            break;
        default:
            return 0;
    }
    return bufor;
}

function LoadBufor(n)
{
    var bufor = ""
// /ListNumber,buttValue,NonValueAdd,ShopList,DeleteList,NewList;
    bufor +='<div class="list">';
    bufor +='<div class="l-top">';
    bufor +='<h1>'+ListNumber+'<span>'+(n)+'</span></h1>';
    bufor +='<div class="minimalized" onclick="HideElement('+(n-1)+')">';
    bufor +='<h1>-</h1>';
    bufor +=    '</div>';
    bufor += '</div>';
    bufor += '<div class="to-hide" style="">';
    bufor +=    '<div class="l-mid">';
    bufor +=         '<div class="mid-up">';
    bufor +=             '<div class="mid-up-in">';
    bufor +=                '<input type="button" value="'+buttValue+'" class="button-add" onclick="AddToList('+(n-1)+')">';
    bufor +=            '</div>';
    bufor +=            '<div class="mid-up-in">';
    bufor +=                 '<input type="text" class="get-text" onkeyup="validation('+(n-1)+')"> ';
    bufor +=            '</div>  ';
    bufor +=             '<div class="mid-up-in">';
    bufor +=                '<span class="validation">';
    bufor +=                    ''+NonValueAdd+'';
    bufor +=                '</span>';
    bufor +=            '</div>';
    bufor +=           '</div>';
    bufor +=        '<div class="mid-down">';
    bufor +=            'down';
    bufor +=        '</div>';
    bufor +=    '</div>';
    bufor +=    '<div class="l-bottom">';
    bufor +=        '<div class="bottom-left">';
    bufor +=            '<div class="Name-Listy">';
    bufor +=                ''+ShopList+'';
    bufor +=            '</div>';
    bufor +=            '<div class="lista-scroling">';
    bufor +=                '<ol>';
    bufor+=                 GetToList(n-1,'IN');
    bufor +=               '</ol>';
    bufor +=          '</div>';
    bufor +=        '</div>';
    bufor +=        '<div class="bottom-right">';
    bufor +=            '<div class="Name-Listy">';
    bufor +=               ''+DeleteList+'';
    bufor +=           '</div>';
    bufor +=            '<div class="lista-scroling">';
    bufor +=                '<ul>';
    bufor+=                 GetToList(n-1,'OUT');
    bufor +=                '</ul>';
    bufor +=           '</div></div></div></div></div>';
    return bufor;
}

function AddList()
{
    var NewListIn = []
    var NewListOut = []
    if(ListyIn.length==ListyOut.length)
    {
        ListyIn[ListyIn.length]=NewListIn
        ListyOut[ListyOut.length]=NewListOut
    }else if(ListyIn.length>=ListyOut.length)
    {
        ListyOut[ListyOut.length]=NewListOut
    }else
    {
        ListyIn[ListyIn.length]=NewListIn
    }
    
    
    var body = document.getElementsByTagName("body")[0]
    var bufor = LoadBufor((document.getElementsByClassName("list").length)+1);
    var footer = body.childNodes[(body.childNodes.length)-2].outerHTML
    body.childNodes[(body.childNodes.length)-2].outerHTML=bufor
    body.innerHTML+=footer
    body.innerHTML+=' '
    HideElement((document.getElementsByClassName("list").length-1))
}

function LoadList(nrList)
{
    var toNrList

    if(nrList<=1)
    {
        toNrList = 1
    }else toNrList = nrList

    var bufor = LoadBufor(toNrList);
    
    var WhatList = document.getElementsByClassName("list")[(toNrList-1)]
    WhatList.outerHTML=bufor;

    
}

function LoadFutter()
{
    var body = document.getElementsByTagName("body")[0]
    var footer = '<footer><div class="add-new-list-div"><input type="button" value="'+NewList+'" class="add-new-list" onclick="AddList()"></div></footer>'
    body.childNodes[(body.childNodes.length)-2].outerHTML=footer
}