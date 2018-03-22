function updateWeather(){
    // TODO: Remove api key
    var url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.063240/lat/59.334591/data.json";

    $.ajax({
        url: url,
      }).done(function(data) {
          setWeatherData(data);
      });

    setTimeout("updateWeather()", 10 * 60 * 1000);
}

function setWeatherData(data){
    var element = $("#weather");

    var list = data.timeSeries;

    // Initialize a new object
    var arrays = [];

    // Loop over data
    $.each(list, function (index, item) {
        // Get value
        dateObj = new Date(item.validTime);
        date = dateObj.getDate();
        hour = dateObj.getHours();

        // check if existing property for this id, if not initialize new array
        if (!arrays[date]) {
            arrays[date] = [];
        }

        arrays[date].push({
            hour: hour,
            temperature: item.parameters[11].values[0]
        });

    });

    console.log(arrays);

    $.each(arrays, function (index, date) {
        console.log(date);
        var goal = 12;

        currentHour = date.hour;

        var closest = currentHour.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });

        arrays[index] = [];
        arrays[index].push(closest);
    });

    // console.log(arrays);
};