function updateCommute(){
    var url = "http://api.sl.se/api2/TravelplannerV3/trip.json?key=8b242adb1c364ae38ab3c91883be0348&originId=9192&destId=1002";

    $.ajax({
        url: url,
      }).done(function(data) {
          setCommuteData(data);
      });
}

function setCommuteData(data){
    console.log(data);
}