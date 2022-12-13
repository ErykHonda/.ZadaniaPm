function convert()
{
    console.clear()
    TransferToJSON()
    
}

function przerwa(ile)
{
    var przewaS=""
    for(var  i = 0; i<ile;i++)
    {
        for(var j =0 ;j<=4;j++)
        {
            przewaS+=" "
        }
    }
    return przewaS;
}

function GetXML()//Redy
{
    var XML = document.getElementById("XML-IN").value;
    return XML;
}

function CountChar()//Redy
{
    const txtToCon = GetXML()
    const txtToCon1 = new String(txtToCon)
    const wielkosc = txtToCon1.length;
    return wielkosc;
}

function CountCharPrimi(DoZamiany)//Redy
{
    const txtToCon1 = new String(DoZamiany)
    const wielkosc = txtToCon1.length;
    return wielkosc;
}

function GetInIn(textarea,ValueXX,Znacznik="")
{
    var ToReturn='"'
    ValueXX=ValueXX+2;
    var OrEnd = false;
    console.log(Znacznik+" "+textarea[ValueXX]+" "+ValueXX)

    for(var i = ValueXX ; OrEnd==false ; i++)
    {
        if(textarea[i]=="<"&&textarea[i+1]=="/")
        {
            OrEnd=true;
            break;
        }else if(textarea[i]!="\n"&& textarea[i]!="	")
        {
            ToReturn+=textarea[i]
        }
    }
    ToReturn+='"'
    console.log("InIn To ret - "+ToReturn) ;
    return ToReturn;
}

function GetInMain(textarea,ValueX=0)
{
    var ToReturn = "";
    if(textarea[ValueX]=="<"&&textarea[ValueX+1]!="/"&&textarea[ValueX+1]!="?")//znajdz początek
    {
        var zmienne = '"';
        var zmienneDoEnd = "";
        for(var jj = ValueX+1;textarea[jj]!=">";jj++)
        {
            if(textarea[jj]==" ")
            {
                zmienne+="-";
            zmienneDoEnd+="-";
            }else
            {
                zmienne+=textarea[jj];
                zmienneDoEnd+=textarea[jj];
            }
            
            ValueX=jj;
        }
        var ZnacznikNameEnd = ("</"+zmienneDoEnd+">")
        zmienne+='" : '
        console.log(" w "+zmienne);
        ToReturn +=zmienne;
        ToReturn+=GetInIn(textarea,ValueX,ZnacznikNameEnd)
        return ToReturn
    }
    return null;
}


function TransferToJSON()
{
    document.getElementById("JSON-OUT").value="";
    document.getElementById("JSON-OUT").value+="{\n";
    const textarea = GetXML();
    var zmienne;
    for(i=0;i<CountChar();i++)
    {
        zmienne=""
        var StartMainC;
        if(textarea[i]=="<"&&textarea[i+1]!="/"&&textarea[i+1]!="?")//znajdz początek
        {
            for(var jj = i+1;textarea[jj]!=">";jj++)
            {
                if(textarea[jj]==" ")
                {
                    zmienne+="-"
                }else
                {
                    zmienne+=textarea[jj]
                }
                i=jj
            }
            document.getElementById("JSON-OUT").value+=przerwa(1)
            document.getElementById("JSON-OUT").value+=zmienne;
            document.getElementById("JSON-OUT").value+="\n"
            document.getElementById("JSON-OUT").value+=przerwa(1)
            document.getElementById("JSON-OUT").value+="{\n"
            koniec = "<//"+zmienne+">"
            //console.log("---- "+CountCharPrimi(zmienne)+" "+zmienne)
            for(var FindEnd = 0 ; FindEnd<CountChar();FindEnd++)//szuka końca
            {
                var cfx = FindEnd;
                var koniecMainC;
                ValidedTxt = ""
                for(xxx = cfx ;xxx<((CountCharPrimi(koniec)+FindEnd)-1);xxx++)
                {
                    if(textarea[xxx]==" ")
                    {
                        ValidedTxt +="-"
                    }else ValidedTxt +=textarea[xxx]
                    koniecMainC=xxx;
                    //console.log(FindEnd+" "+x+" "+ValidedTxt)
                }
                //console.log(ValidedTxt +"  "+"</"+zmienne+">")
                if(ValidedTxt==("</"+zmienne+">"))
                {
                    console.log(koniecMainC)
                    StartMainC = i;
                    i=koniecMainC;
                    //console.log(textarea[koniecMainC])
                    console.log("znaleziono "+ValidedTxt)
                    cfx=(CountCharPrimi(koniec)+FindEnd)
                    FindEnd=CountChar();
                    break;
                } 
            }
            var IleEle = 0;
            for(var FindInMain = StartMainC;FindInMain<koniecMainC;FindInMain++)
            {
                if(GetInMain(textarea,FindInMain )!=null)
                {
                    IleEle++;
                }
            }
            IlePrzecDod = 0;
            for(var FindInMain = StartMainC;FindInMain<koniecMainC;FindInMain++)
            {
                if(GetInMain(textarea,FindInMain )!=null)
                {
                    IlePrzecDod++;
                    if(IlePrzecDod<IleEle)
                    {
                        document.getElementById("JSON-OUT").value+=przerwa(2)
                        document.getElementById("JSON-OUT").value+=GetInMain(textarea,FindInMain )
                        document.getElementById("JSON-OUT").value+=",\n"
                    }else
                    {
                        document.getElementById("JSON-OUT").value+=przerwa(2)
                        document.getElementById("JSON-OUT").value+=GetInMain(textarea,FindInMain )
                        document.getElementById("JSON-OUT").value+="\n"
                        document.getElementById("JSON-OUT").value+=przerwa(1)
                        document.getElementById("JSON-OUT").value+="}\n"
                    }
                    
                }
               
            }
            
        }
        console.log("-- "+i)
    }
    document.getElementById("JSON-OUT").value+="}";
}