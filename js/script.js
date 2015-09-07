function tipCalc(c, t) {
    var decToPercent = t / 100;
    newprice = parseFloat(c * (decToPercent)) + parseFloat(c);
    return newprice;
}

function allCalc() {
    var cost = document.getElementById("cost").value,
        tip = document.getElementById("tip").value,
        people = document.getElementById("people").value,
        decToPercent2  = tip / 100,
        newprice;
    
    if (!isNaN(cost) && !isNaN(tip) && people <= 1) {
        newprice = tipCalc(cost, tip);
        document.getElementById("output").textContent = "$" + newprice.toFixed(2);
        document.getElementById("le").textContent = "$" + parseFloat(cost * (decToPercent2)).toFixed(2);
    } else if (people > 1) {
        var peepcost = tipCalc(cost, tip) / people,
            peeptip = parseFloat(cost * (decToPercent2)) / people;
        document.getElementById("output").textContent = "$" + peepcost.toFixed(2);
        document.getElementById("le").textContent = "$" + peeptip.toFixed(2);
    }


    
    return false;
    
}

function init() {
    document.getElementById("calc").onsubmit = allCalc;
}

window.onload = init;


