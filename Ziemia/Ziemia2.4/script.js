function loader()
    {
    var element = document.getElementById("malunek")
        var plotno = element.getContext("2d")
        const X = element.width
        const Y = element.height
        //console.log(plutno)
        //console.log(element)
        //console.log("H "+Y+" W "+X)
        plotno.fillStyle = "#FF0000";//styl wypełnienia
        plotno.fillRect(0,0,150,150);//wypełnia prostokat ustalonm stylem
        plotno.fill()//wypełnia element na płutnie
    }