const ListaIn1 = ["Mleko","Chleb"];
const ListaOut1 = ["Bułka"];
const ListaIn2 = ["Mleko1","Chleb1"];
const ListaOut2 = ["Bułka1"];
const ListyIn = [ListaIn1];
const ListyOut = [ListaOut1];
//tłumaczenie
var ListNumber,buttValue,NonValueAdd,ShopList,DeleteList,NewList;//języki
function StartingSeting(Lang)
{
    AddMissingElement()
    setLanguage(Lang)
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
    for(var i = 0 ; i<=document.getElementsByClassName("list").length ; i++)
    {
        LoadList(i)
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
    bufor +='<div class="minimalized">';
    bufor +='<h1>X</h1>';
    bufor +=    '</div>';
    bufor += '</div>';
    bufor += '<div class="to-hide">';
    bufor +=    '<div class="l-mid">';
    bufor +=         '<div class="mid-up">';
    bufor +=             '<div class="mid-up-in">';
    bufor +=                '<input type="button" value="'+buttValue+'" class="button-add">';
    bufor +=            '</div>';
    bufor +=            '<div class="mid-up-in">';
    bufor +=                 '<input type="text" class="get-text">';
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
    var NewList = []
    if(ListyIn.length==ListyOut.length)
    {
        ListyIn[ListyIn.length]=NewList
        ListyOut[ListyOut.length]=NewList
        console.log("=")
    }else if(ListyIn.length>=ListyOut.length)
    {
        ListyOut[ListyOut.length]=NewList
        console.log(">")
    }else
    {
        ListyIn[ListyIn.length]=NewList
        console.log("<")
    }
    
    
    var body = document.getElementsByTagName("body")[0]
    var bufor = LoadBufor((document.getElementsByClassName("list").length)+1);
    var footer = body.childNodes[(body.childNodes.length)-2].outerHTML
    body.childNodes[(body.childNodes.length)-2].outerHTML=bufor
    //console.log(footer)
    body.innerHTML+=footer
    body.innerHTML+='<br>'
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