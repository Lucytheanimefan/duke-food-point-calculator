var fallSemesterEnd_2016 = new Date(2016,11,19);
var fallBreakStart = new Date(2016,10,07);
var fallBreakEnd = new Date(2016,10,12);
var thanksgivingBreakStart=new Date(2016,11,22);
var thanksgivingBreakEnd=new Date(2016,11,28);

console.log("fall break: "+fallBreakStart.toString()+" to "+fallBreakEnd.toString());

function calculateFoodPoints() {
    var numFoodPts = $("#numFoodPoints").val();
    if (isNaN(numFoodPts) || parseFloat(numFoodPts) < 0) {
        alert("Must input a positive numeric value");
        return;
    }
    var today = new Date();
    console.log("Today: "+today.toString());
    console.log("end of break: "+fallSemesterEnd_2016.toString());
    var numDays = getDateDiff(today, fallSemesterEnd_2016);
    console.log("Number of days: "+numDays.toString());
    var fallBreak = getDateDiff(fallBreakStart,fallBreakEnd);
    var thanksgivingBreak = getDateDiff(thanksgivingBreakStart,thanksgivingBreakEnd);
    numDays=numDays-fallBreak-thanksgivingBreak;
    var pointsPerDay = parseFloat(numFoodPts/numDays);
    updateUI(pointsPerDay.toFixed(2));
    console.log("done");

}

function calculateBreaks(){
    var breakdays=0;

}

function checked(divID){
    return $("#"+divID).is(':checked');
}

function getDateDiff(firstDate, secondDate) {
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
}

function updateUI(pointsPerDay){
	var pointsString="You should spend <h2>"+pointsPerDay.toString()+"</h2> food points per day until the end of the fall semester." 
	$("#results").html(pointsString);
}