function wywolaj() {

    const x = document.getElementById("pierwszy")
    x.innerHTML = "po łacomoe"

    //const y = x.innerHTML
    //console.log(x);  

}
/*
var a = 'string tekst a ';
var b = "string tekst b";
var c = "문자열 텍스트 c  文字列テキスト c  текст строки с";
var d = a+a;
document.write(a);
document.write("<br>");
document.write(b);
document.write("<br>");
document.write(c);
document.write("<br>");
document.write(d);

let x = String("sadsa");
let y = new String('lorem')
let xy= x+y+56+a
document.write("<br>");
document.write(x);
document.write("<br>");
document.write(y);
document.write("<br>");
document.write(xy);

const zx = 'kot'.charAt(1);
const zxz = 'pies'[1];
console.log(zxz)

const tekst = 'kot';
//tekst.charAt(1)='a';//nie działa
tekst[1]='a'
console.log(tekst);
document.write(tekst);


i1 = 56+2;
i2 = '57'+1 ;
console.log(i1)
console.log(i2)
if(i1<i2)
{
    document.write("i1 < i2");
}else if(i1>i2)
{
    document.write("i1 > i2");
}else 
{
    document.write("równe");
}



var s_prim = "문자열 텍스트 c  文字列テキスト c  текст строки с";
var s_prim1 = "문자열 텍스트 c  文字列テキスト c  текст строки с";
var pr2 = s_prim+s_prim1;
let s_obj =  new String(s_prim)
var obj2 = s_obj+ s_obj;
document.write(typeof pr2)
document.write("<br>")
document.write(typeof obj2)

var y = 'pies'[1];
document.write(typeof y)



var s_prim = 'foo';
let s_obj = String(s_prim);
console.log(typeof s_prim)
console.log(typeof s_obj)
var a = prompt("podaj tekst")
let a_obj = eval(a)
document.write(typeof a_obj)
document.write(a+a+"\n")
document.write(a_obj+a_obj+"\n")


function przycisk()
{
    const obiekt = document.getElementById("tekst1")
    const obiekt1 = document.getElementById("bloczek")
    zawartosc = obiekt.value
    zawartosc1= obiekt1.outerHTML
    var x = zawartosc
    //var x = eval(zawartosc)
    console.log(zawartosc1)
    //console.log(zawartosc+zawartosc)
    console.log(typeof zawartosc1)
    
    return 0;
}


<div>
        Text <input type="text" id="tekst1">
        <input type="button" onclick="przycisk()" value="sprawdz">    
    </div>
    <div id="bloczek">
        ss
    </div>



var s1 = '2+2';//primityw
var s2 = new String(s1)//obiekt
var zm = s2.valueOf() //zwraca element jako primityw

document.write(s1);
document.write("<br>");
document.write(s2);
document.write("<br>");
document.write(eval(s1));
document.write("<br>");

document.write(eval(s2));
document.write("<br>");

document.write(eval(s2.valueOf()));
document.write("<br>");

document.write(typeof (s2.valueOf()));
document.write("<br>");

document.write(eval(s2))
*/