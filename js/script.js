/***
 * This tip calculator is just a way for me to learn javascript. I might add more functionality or
 * I might not. Just depends on what else I learn.
 *
 * Written by: Brandon Pretelt
 *
 * GitHub Repo: https://github.com/brandonpretelt/TipCal
 * Website: new website coming soon
 *
 * Brandon Pretelt (c) 2015
 *
 ***/

function tipCalc(c, t) { // the formula
    // c is cost, t is tip

    var decToPercent = t / 100; // divides tip by 100 in order to get a decimal value to be turned into a percent
    newprice = parseFloat(c * (decToPercent)) + parseFloat(c); // turns sum value into floats
    return newprice; // returns the sum of above ^^^
}

function allCalc(e) { // the actual calculator
    // cost, tip and people variables grab the user input while decToPercent2 divides tip by 100 again
    // newprice is an undeclared variable to be used later.

    var cost = document.getElementById("cost").value,
        tip = document.getElementById("tip").value,
        people = document.getElementById("people").value,
        decToPercent2  = tip / 100,
        newprice;

    // conditional checks to make sure everything is correct and there are no values missing.
    // people === 0 alows users to enter 0 as number if they are on their own

    if (!isNaN(cost) && !isNaN(tip) && people <= 1 || people === 0 || people === "") {

        // sets the value of newprice to the return value of tipCalc
        newprice = tipCalc(cost, tip);

        // outputs the data to divs as formatted formatted float values
        document.getElementById("output").textContent = "$" + newprice.toFixed(2);
        document.getElementById("le").textContent = "$" + parseFloat(cost * (decToPercent2)).toFixed(2);

    } else if (people > 1) { // if there are more than 1 person, adds them to the mix

        // peepcost takes the return value of tipCalc() and divides by the number of people
        // peeptip returns the product of cost * decToPercent2 and parses it to float and divides by people
        var peepcost = tipCalc(cost, tip) / people,
            peeptip = parseFloat(cost * (decToPercent2)) / people;

        // outputs the data to divs as formatted float values
        document.getElementById("output").textContent = "$" + peepcost.toFixed(2);
        document.getElementById("le").textContent = "$" + peeptip.toFixed(2);
    }
    e.preventDefault();
    // return false;

}



/*var validation = document.getElementById("LoginTest");
validation.addEventListener("submit", validate, false);*/

function validate(e) {

    // don't forget to test this! upload to git and filezilla

    var name = document.getElementById("uName").value,
        pass = document.getElementById("pass").value;

    if (name !== "") {
        console.log(name);
        if (pass !== "" && pass === "pass") {
            console.log("Go right ahead");
        } else if (pass === "" || pass !== "pass") {
            alert("try again");
        }
    }
    e.preventDefault();
    // return false;
}


function init() {
    document.getElementById("calc").addEventListener("submit", allCalc, false);
    // document.getElementById("LoginTest").addEventListener("submit", validate, false);
    // document.getElementById("calc").onsubmit = allCalc;
    // document.getElementById("LoginTest").onsubmit = validate;
}

window.onload = init;
