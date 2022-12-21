/*
const tab1 = []
const tab2 = [1,2,3,4]
const tab3 = ["Marcin","Ania","Agnieszka"]
//------------------------------------------------//
const a = null
const b = 234
const c = "Pies"
const tab = [a,b,c,"KOT",false,{}]
//document.write(typeof tab)
//document.write(typeof tab)

const nr=10;
const txt="Ala"
const arr= [1,2,3]
const ob={}
const n=null;

var x = [nr,txt,arr,ob,n];
document.write()


const tab = ["ala", "bartek" , "tosia","saas"]
document.write(tab.length)


const tabxxx = ["Ala","Posiada","Brata","I","Siostre"]
//można odwoływać się do minus 
document.write(tabxxx.at(-6))
/*
for(var  i = 0; i <tabxxx.length;i++)
{
    document.write(tabxxx[i]+"<br>")
}


const tab = [12,123,12314]
tab[tab.length]="sads"
document.write(tab)
*/

//document.write()
//zadania
//div rozwiazania
//zad 1
function reset()
{
    var divek = document.getElementById("rozwiazania")
    divek.innerHTML=" "
}

function zad1()
{
    var divek = document.getElementById("rozwiazania")
    divek.innerHTML="";
    var bufor="";
    var suma=0;
    const tabi1 = [2,1,3,7,0]
    for(var i = 0 ; i<tabi1.length ; i++)
    {
        suma+=tabi1[i]
    }
    bufor+=tabi1;
    bufor+=" ---> suma:  "
    bufor+=suma
    divek.innerHTML=bufor
}

function zad2()
{
    var divek = document.getElementById("rozwiazania")
    divek.innerHTML="";
    var n =Math.round(prompt("Podaj N"))
    var a =Math.round(prompt("Podaj A"))
    var b =Math.round(prompt("Podaj B"))
    const tabi2 = []
    for(var i=0;i<n;i++)
    {
        tabi2[i]=Math.round(Math.random()*b+a);
    }
    divek.innerHTML=tabi2;
}

function zad3()
{
    //pobieramy x i y 
    /*
        y1 x1
        y2 x1
        y3 x1
    */
   
    const tabi3 = []
    var x =Math.round(prompt("Podaj X"))
    var y =Math.round(prompt("Podaj Y"))
   for(var  i = 0 ; i<y ; i++)
   {
    const second =[]
    
        for(var j = 0 ; j< x ; j++)
        {
            second[j]=(i+" "+j)
        }
        tabi3[i]=second
   }
   var bufor =""
   for(var  i = 0 ; i<y ; i++)
   {
        for(var j = 0 ; j< x ; j++)
        {
            bufor+=tabi3[i][j]
            bufor+=" | "
        }
        bufor+="<br>"
   }
   var divek = document.getElementById("rozwiazania")
    divek.innerHTML=bufor;
}
