var fallSemesterEnd_2016 = new Date(2016,12,19);

function calculateFoodPoints() {
    console.log("clicked");
    var numFoodPts = $("#numFoodPoints").val();
    if (isNaN(numFoodPts) || parseInt(numFoodPts) < 0) {
        alert("Must input a positive numeric value");
        return;
    }
    var today = new Date();
    var numDays = getDateDiff(today, fallSemesterEnd_2016);
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
	var pointsString="You should spend "+pointsPerDay.toString()+" food points per day until the end of the fall semester." 
	alert(pointsString);
	$("#results").html(pointsString);
}