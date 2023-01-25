function loader()
{
    var element = document.getElementById("malunek")
    var plotno = element.getContext("2d")
    const x = element.width
    const y = element.height
    //console.log(plutno)
    //console.log(element)
    //console.log("H "+Y+" W "+X)
    
    //plotno.fillStyle = "RED";//styl wypełnienia
    //plotno.fillRect(0,0,150,150);//wypełnia prostokat ustalonm stylem
    //plotno.fill()//wypełnia element na płutnie
    //plotno.stroke()
    /*
    plotno.fillStyle = "#ff0000"
    plotno.moveTo(0,0)
    plotno.lineTo(x,y)
    plotno.stroke()
    */
    /*
    plotno.beginPath()
    plotno.arc(x/2,y/2,x/2,OblRadian(90),OblRadian(270))
    plotno.fill()
    plotno.stroke()
    */
    plotno.arc(x/2,y/2,x/2,OblRadian(0),OblRadian(360))
    plotno.moveTo(x/2,0)
    plotno.lineTo(x,y)
    plotno.lineTo(0,y)
    plotno.lineTo(x/2,0)
    plotno.fillStyle = "#00FF00"
    plotno.fill()
    plotno.stroke()
}

function wypelnij()
{
    var element = document.getElementById("malunek")
    var plotno = element.getContext("2d")
    plotno.fillStyle = "RED"
    plotno.fillRect(0,0,150,150)
}

function OblRadian(stopnie)
{
    return (stopnie*2*Math.PI)/360
}