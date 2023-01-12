function Validate()
{
    const DaysP = ["ND","PN","WT","ŚR","CZW","PT","SOB"]
    const MonthsP = ["styczen","luty","marzec","kwiecien","maj","czerwiec","lipec","sierpień","wrześień","październik","listopad","grudzień"]
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
    
    var czykonec = false
    console.log(LastDay)
    console.log(Day)
    for(var i = Day ; i < 7 ; i++)
    {
        buffor+='<td class="KL-Kartka"></td>'
        Day++
    }
    buffor += '</tr>'
    while(czykonec == false)
    {
        buffor += '<tr>'
        for(var j = 0 ; j<7;j++)
        {
            Day++
            buffor+='<td class="KL-Kartka"></td>'
            if(Day==LastDay)
            {
                czykonec = true
                break;
            }
        }
        buffor += '</tr>'
    }
    


    console.log(DaysP[FirstDay])


    DayTable.innerHTML = buffor
}

function GetMandY(ID)
{
    const month = document.getElementById(ID);
    const data = month.value+"-1";
    const TabR = [new Date(data).getMonth(), new Date(data).getFullYear()];
    return TabR;
}