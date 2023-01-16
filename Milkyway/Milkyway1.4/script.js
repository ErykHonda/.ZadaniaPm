

window.onload = function()
{
    //document.write(new Date(1673823600*1000))

    $("#trash").load('https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&daily=temperature_2m_max,temperature_2m_min&timeformat=unixtime&timezone=Europe%2FBerlin&past_days=92','',
    function(JLoad)
    {
        const akt = new Date()
        const x = new Date(akt.getFullYear(),akt.getMonth())
        console.log(x)
        XXX= 0+92 
        const PJSON = JSON.parse(JLoad);
        document.getElementById("MinTemp") .innerHTML= (PJSON.daily.temperature_2m_min[0]+' '+PJSON.daily_units.temperature_2m_min);
        document.getElementById("MaxTemp") .innerHTML = (PJSON.daily.temperature_2m_max[0]+' '+PJSON.daily_units.temperature_2m_max);
        var month = (new Date(PJSON.daily.time[XXX]*1000).getMonth()+1)
        if(month<10)
        {
            month = ('0'+month)
        }
        document.getElementById("Data").innerHTML = "Data: "+ new Date(PJSON.daily.time[XXX]*1000).getDate()+'.'+month+'.'+new Date(PJSON.daily.time[XXX]*1000).getFullYear()
        var minuty = new Date().getMinutes()
        if(minuty<10)
        {
            minuty = ('0'+minuty)
        }
        document.getElementById("Godzina").innerHTML =new Date().getHours() +':'+minuty
    
    }
    )

}
