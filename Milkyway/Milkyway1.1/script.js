const ListyIn = [[],]
//tłumaczenie

var ListNumber,buttValue,NonValueAdd,ShopList,DeleteList,NewList;//języki
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
    for(var i = 0 ; i<=ListyIn.length ; i++)
    {
        LoadList(i)
    }
    LoadFutter()
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
    bufor +=                    '<li>lorem</li>';
    bufor +=                   '<li>ipsum</li>';
    bufor +=               '</ol>';
    bufor +=          '</div>';
    bufor +=        '</div>';
    bufor +=        '<div class="bottom-right">';
    bufor +=            '<div class="Name-Listy">';
    bufor +=               ''+DeleteList+'';
    bufor +=           '</div>';
    bufor +=            '<div class="lista-scroling">';
    bufor +=                '<ul>';
    bufor +=                    '<li>lorem</li>';
    bufor +=                    '<li>ipsum</li>';
    bufor +=                '</ul>';
    bufor +=           '</div></div></div></div></div>';
    return bufor;
}

function AddList()
{
    var NewList = []
    ListyIn[ListyIn.length]=NewList
    
    var body = document.getElementsByTagName("body")[0]
    var bufor = LoadBufor(ListyIn.length);
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