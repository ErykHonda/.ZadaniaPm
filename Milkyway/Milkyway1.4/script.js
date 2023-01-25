var StartDay = 0;

window.onload = function()
{
    LoadAJAX()
}

function LoadAJAX(unit)
{
    //document.write(new Date(1673823600*1000))
    var adres
    switch(unit)
    {
        case 'C':
            {
                adres ='https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&daily=temperature_2m_max,temperature_2m_min&timeformat=unixtime&timezone=Europe%2FBerlin&past_days=92';
                break;
            }
            case 'F':
                {
                    adres ='https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timeformat=unixtime&timezone=Europe%2FBerlin&past_days=92';
                    break;
                }
    }

    $("#trash").load(adres,'',
    function(JLoad)
    {
        const akt = new Date()
        var Slast30 = new Date(akt.getFullYear(),akt.getMonth()-0,0).getDate()+new Date(akt.getFullYear(),akt.getMonth()-1,0).getDate()+new Date(akt.getFullYear(),akt.getMonth()-2,0).getDate()
        //console.log(Slast30)
        XXX= StartDay+Slast30 
        const PJSON = JSON.parse(JLoad);
        document.getElementById("MinTemp") .innerHTML= (PJSON.daily.temperature_2m_min[XXX]+' '+PJSON.daily_units.temperature_2m_min);
        document.getElementById("MaxTemp") .innerHTML = (PJSON.daily.temperature_2m_max[XXX]+' '+PJSON.daily_units.temperature_2m_max);
        var month = (new Date(PJSON.daily.time[XXX]*1000).getMonth()+1)
        if(month<10)
        {
            month = ('0'+month)
        }
        document.getElementById("Data").innerHTML = "Data: "+ new Date(PJSON.daily.time[XXX]*1000).getDate()+'.'+month+'.'+new Date(PJSON.daily.time[XXX]*1000).getFullYear()
        ChangeHour()
    
    }
    )

}

function ChangeDate(znak,unit)
{
    switch(znak)
    {
        case '-':
            {
                StartDay = StartDay-1
                break;
            }
        case '+':
            {
                StartDay = StartDay+1
                break;
            }
    }
    LoadAJAX(unit)
}

function ChangeUnit(unit)
{
    switch(unit)
    {
        case 'C':
            {
                document.getElementById("ChangeDay").innerHTML = "<strong class='przycisk'><input type='button' value='<'  onclick="+"ChangeDate('-','C')"+"></strong><strong id='Data'>Data: xx.xx.xxxx</strong><strong id='przycisk' class='przycisk'><input type='button' value='>' onclick="+"ChangeDate('+','C')"+"></strong>"
                document.getElementById("ChangeUnit").innerHTML = '<input id="change" type="button" onclick="'+"ChangeUnit('F')"+'" value="Change (F)"></input>'
                break;
            }
            case 'F':
                {
                    document.getElementById("ChangeDay").innerHTML = "<strong class='przycisk'><input type='button' value='<'  onclick="+"ChangeDate('-','F')"+"></strong><strong id='Data'>Data: xx.xx.xxxx</strong><strong id='przycisk' class='przycisk'><input type='button' value='>' onclick="+"ChangeDate('+','F')"+"></strong>"
                    document.getElementById("ChangeUnit").innerHTML = '<input id="change" type="button" onclick="'+"ChangeUnit('C')"+'" value="Change (C)"></input>'
                    break;
                }
    }
    
    LoadAJAX(unit)
    ChangeHour()
}


function ChangeHour()
{
    var minuty = new Date().getMinutes()
        if(minuty<10)
        {
            minuty = ('0'+minuty)
        }
        document.getElementById("Godzina").innerHTML =new Date().getHours() +':'+minuty
}

