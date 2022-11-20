//z sterong do h2
function log()
{
    var element = document.getElementById("stongus");
    console.log(element);
    var rodz = element.parentNode;
    console.log(rodz);
    var rodz2 = rodz.parentNode;
    console.log(rodz2);
    var wdziec = rodz2.children[1]
    console.log(wdziec)

    //rodz2.removeChild(wdziec)
    element.parentNode.parentNode.removeChild(element.parentNode.parentNode.children[1]);
}
