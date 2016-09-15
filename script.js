var fallSemesterEnd_2016 = new Date(2016,12,19);
var fallBreakStart = new Date(2016,10,07);
var fallBreakEnd = new Date(2016,10,12);
var thanksgivingBreakStart=new Date(2016,11,22);
var thanksgivingBreakEnd=new Date(2016,11,28);

function calculateFoodPoints() {
    console.log("clicked");
    var numFoodPts = $("#numFoodPoints").val();
    if (isNaN(numFoodPts) || parseInt(numFoodPts) < 0) {
        alert("Must input a positive numeric value");
        return;
    }
    var today = new Date();
    var numDays = getDateDiff(today, fallSemesterEnd_2016);
    var fallBreak = getDateDiff(fallBreakStart,fallBreakEnd);
    var thanksgivingBreak = getDateDiff(thanksgivingBreakStart,thanksgivingBreakEnd);
    numDays=numDays-fallBreak-thanksgivingBreak;
    var pointsPerDay = parseInt(numFoodPts/numDays);
    updateUI(pointsPerDay);
    console.log("done");

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