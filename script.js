var fallSemesterEnd_2016 = new Date(2016, 11, 19);
var fallBreakStart = new Date(2016, 9, 07);
var fallBreakEnd = new Date(2016, 9, 12);
var thanksgivingBreakStart = new Date(2016, 10, 22);
var thanksgivingBreakEnd = new Date(2016, 10, 28);

var fallBreakHome;
var thanksgivingBreakHome;

console.log(fallBreakStart);
console.log(fallBreakEnd);
console.log(thanksgivingBreakStart);
console.log(thanksgivingBreakEnd);

function calculateFoodPoints() {
    fallBreakHome = true;
    thanksgivingBreakHome = true;
    calculateBreaks();
    var numDays = 0;
    var numFoodPts = $("#numFoodPoints").val();
    if (isNaN(numFoodPts) || parseFloat(numFoodPts) < 0) {
        alert("Must input a positive numeric value");
        return;
    }
    var today = new Date();
    console.log("Today: "+today.toString())

    if (fallBreakHome && thanksgivingBreakHome) {
        numDays = getDateDiff(today, fallBreakStart) + getDateDiff(fallBreakEnd, thanksgivingBreakStart) + getDateDiff(thanksgivingBreakEnd, fallSemesterEnd_2016);
        console.log("spending both at home: "+numDays.toString());
    } else if (fallBreakHome) {
        numDays = getDateDiff(today, fallBreakStart) + getDateDiff(fallBreakEnd, fallSemesterEnd_2016);
        console.log("Spending only fall break at home: "+numDays.toString())
    } else if (thanksgivingBreakHome) {
        numDays = getDateDiff(today, thanksgivingBreakStart) + getDateDiff(thanksgivingBreakEnd, fallSemesterEnd_2016);
        console.log("spending only thanksgibing at home: "+numDays.toString())
    } else {
        numDays = getDateDiff(today, fallSemesterEnd_2016);
        console.log("spending both breaks at school: "+numDays.toString());
    }
    /*
        var fallBreak = getDateDiff(fallBreakStart,fallBreakEnd);
        var thanksgivingBreak = getDateDiff(thanksgivingBreakStart,thanksgivingBreakEnd);
        numDays=numDays-fallBreak-thanksgivingBreak;
        */
    var pointsPerDay = parseFloat(numFoodPts / numDays);
    updateUI(pointsPerDay.toFixed(2));


}

function calculateBreaks() {
    var breakdays = 0;
    if (checked("fallbreak")) {
        fallBreakHome = false;
        console.log("fallbreak checked");
    }
    if (checked("thanksgiving")) {
        thanksgivingBreakHome = false;
        console.log("thanksgiving checked");
    }

}

function checked(divID) {
    return $("#" + divID).is(':checked');
}

function checkDateBefore(todaysDate, dateToCompare, dateToCompare2 = null) {
    if (dateToCompare > todaysdate) {
        if (dateToCompare2) {

        }
        return true;
    }
}

function getDateDiff(firstDate, secondDate) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    return diffDays;
}

function updateUI(pointsPerDay) {
    var pointsString = "You should spend <h2>" + pointsPerDay.toString() + "</h2> food points per day until the end of the fall semester."
    $("#results").html(pointsString);
}
