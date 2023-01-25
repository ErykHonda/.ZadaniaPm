const DaysP = ["ND","PN","WT","ŚR","CZW","PT","SOB"]
const MonthsP = ["Styczen","Luty","Marzec","Kwiecien","Maj","Czerwiec","Lipec","Sierpień","Wrześień","Październik","Listopad","Grudzień"]
   
window.onload = function()
{
    WhatDayNow()
    
}

function Validate()
{
    //WhatDayNow()
    
    const DayTable = document.getElementById("D-K-Kartka")
    const MandY = GetMandY("miesiac")
    var buffor = ''
    console.log(MonthsP[MandY[0]])
    console.log(MandY[1])
    const LastDay = new Date(MandY[1],MandY[0]+1,0).getDate()
    const FirstDay = new Date(MandY[1],MandY[0],1).getDay()
    const PastLastDay = new Date(MandY[1],MandY[0],0).getDate()
    buffor = '<tr><td class="KL-Kartka">'+DaysP[0]+'</td><td class="KL-Kartka">'+DaysP[1]+'</td><td class="KL-Kartka">'+DaysP[2]+'</td><td class="KL-Kartka">'+DaysP[3]+'</td><td class="KL-Kartka">'+DaysP[4]+'</td><td class="KL-Kartka">'+DaysP[5]+'</td><td class="KL-Kartka">'+DaysP[6]+'</td></tr>';
    buffor += '<tr>'
    document.getElementById("KL-M-Name").innerHTML = MonthsP[MandY[0]]
    var Day = 0;
    for(var i = FirstDay;i>0;i--)
    {
        buffor+='<td class="KL-Kartka-PM">'+(PastLastDay-i+1)+'</td>'
        Day++
    }
    var WDay = 0
    var czykonec = false
    console.log(LastDay)
    console.log(Day)
    for(var i = Day ; i < 7 ; i++)
    {
        WDay++
        buffor+='<td class="KL-Kartka">'+WDay+'</td>'
        
        Day++
    }
    buffor += '</tr>'
    while(czykonec == false)
    {
        buffor += '<tr>'
        for(var j = 0 ; j<7;j++)
        {
            WDay++
            Day++
            buffor+='<td class="KL-Kartka">'+WDay+'</td>'
            if(WDay==LastDay)
            {
                czykonec = true
                var ToEnd = 7 - j;
                console.log(ToEnd);
                var nextMonthDay = 0
                for(var x = ToEnd-1; x>0;x--)
                {
                    nextMonthDay++;
                    buffor+='<td class="KL-Kartka-PM">'+nextMonthDay+'</td>'
                }
                break;
            }
        }
        buffor += '</tr>'
    }
    DayTable.innerHTML = buffor
}

function GetMandY(ID)
{
    const month = document.getElementById(ID);
    const data = month.value+"-1";
    const TabR = [new Date(data).getMonth(), new Date(data).getFullYear()];
    return TabR;
}

function WhatDayNow()
{
    document.getElementById("WhatDay").innerHTML = new Date().getDate()+"."+(new Date().getMonth()+1)+"."+new Date().getFullYear()+"<br>Godzina:"+new Date().getHours()+":"+new Date().getMinutes()//+":"+new Date().getSeconds()
}

function Startup()
{
    //WhatDayNow()
    
    const DayTable = document.getElementById("D-K-Kartka")
    const MandY = GetMandYStartup()
    var buffor = ''
    console.log(MonthsP[MandY[0]])
    console.log(MandY[1])
    const LastDay = new Date(MandY[1],MandY[0]+1,0).getDate()
    const FirstDay = new Date(MandY[1],MandY[0],1).getDay()
    const PastLastDay = new Date(MandY[1],MandY[0],0).getDate()
    buffor = '<tr><td class="KL-Kartka">'+DaysP[0]+'</td><td class="KL-Kartka">'+DaysP[1]+'</td><td class="KL-Kartka">'+DaysP[2]+'</td><td class="KL-Kartka">'+DaysP[3]+'</td><td class="KL-Kartka">'+DaysP[4]+'</td><td class="KL-Kartka">'+DaysP[5]+'</td><td class="KL-Kartka">'+DaysP[6]+'</td></tr>';
    buffor += '<tr>'
    document.getElementById("KL-M-Name").innerHTML = MonthsP[MandY[0]]
    var Day = 0;
    for(var i = FirstDay;i>0;i--)
    {
        buffor+='<td class="KL-Kartka-PM">'+(PastLastDay-i+1)+'</td>'
        Day++
    }
    var WDay = 0
    var czykonec = false
    console.log(LastDay)
    console.log(Day)
    for(var i = Day ; i < 7 ; i++)
    {
        WDay++
        buffor+='<td class="KL-Kartka">'+WDay+'</td>'
        
        Day++
    }
    buffor += '</tr>'
    while(czykonec == false)
    {
        buffor += '<tr>'
        for(var j = 0 ; j<7;j++)
        {
            WDay++
            Day++
            buffor+='<td class="KL-Kartka">'+WDay+'</td>'
            if(WDay==LastDay)
            {
                czykonec = true
                var ToEnd = 7 - j;
                console.log(ToEnd);
                var nextMonthDay = 0
                for(var x = ToEnd-1; x>0;x--)
                {
                    nextMonthDay++;
                    buffor+='<td class="KL-Kartka-PM">'+nextMonthDay+'</td>'
                }
                break;
            }
        }
        buffor += '</tr>'
    }
    DayTable.innerHTML = buffor
}

function GetMandYStartup()
{
    const TabR = [new Date().getMonth(), new Date().getFullYear()];
    return TabR;
}
