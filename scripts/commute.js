function updateCommute(){
    var url = "http://api.sl.se/api2/TravelplannerV3/trip.json?key=8b242adb1c364ae38ab3c91883be0348&originId=9192&destId=1002";

    /* $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
        setCommuteData(data.contents);
    }); */

    $.ajax({
        url: url,
        dataType: "json"
      }).done(function(data) {
          console.log(data)
      });
}

function setCommuteData(data){
    var obj = JSON.parse(data);
    console.log(obj);
}