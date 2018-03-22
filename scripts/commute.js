function updateCommute(){
    var url = "https://api.sl.se/api2/TravelplannerV3/trip.json?key=8b242adb1c364ae38ab3c91883be0348&originId=9192&destId=1002";

    $.getJSON('https://anyorigin.com/go?url=https%3A//api.sl.se/api2/TravelplannerV3/trip.json%3Fkey%3D8b242adb1c364ae38ab3c91883be0348%26originId%3D9192%26destId%3D1002&callback=?', function(data){
        setCommuteData(data.contents);
    });

}

function setCommuteData(data){
    console.log(data);
}