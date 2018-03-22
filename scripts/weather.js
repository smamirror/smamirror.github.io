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

var weatherSymbols = ["", "Clear sky", "Nearly clear sky", "Variable cloudiness", "Halfclear sky", "Cloudy sky", "Overcast", "Fog", "Light rain showers", "Moderate rain showers",
"Heavy rain showers", "Thunderstorm", "Light sleet showers", "Moderate sleet showers", "Heavy sleet showers", "Light snow showers", "Moderate snow showers", "Heavy snow showers", "Light rain", "Moderate rain", "Heavy rain", "Thunder", "Light sleet", "Moderate sleet", "Heavy sleet", "Light snowfall", "Moderate snowfall",
"Heavy snowfall"];

function setWeatherData(data){
    var element = $("#weather");

    var list = data.timeSeries;

    console.log(list);

    // Initialize a new object
    var dateArray = [];
    

    // Loop over data
    $.each(list, function (index, item) {
        // Get value
        dateObj = new Date(item.validTime);
        year = dateObj.getFullYear();
        month = dateObj.getMonth();
        day = dateObj.getDate();
        hour = dateObj.getHours();

        // check if existing property for this id, if not initialize new arra

        if (!dateArray[year]) {
            dateArray[year] = [];
        }

        if (!dateArray[year][month]) {
            dateArray[year][month] = [];
        }

        if (!dateArray[year][month][day]) {
            dateArray[year][month][day] = [];
        }

        dateArray[year][month][day].push({
            year: year,
            month: month,
            day: day,
            hour: hour,
            temperature: item.parameters[11].values[0],
            symbol: item.parameters[18].values[0]
        });

    });

    var viewModel = [];

    $.each(dateArray, function (index, year){
        if (year !== undefined) {
            $.each(year, function(index, month) {
                if (month !== undefined) {
                    $.each(month, function(index, day) {
                        if (day !== undefined){
                            var middleHourItem = day[Math.round((day.length - 1) / 2)];
                            viewModel.push(middleHourItem);
                        }
                    })
                    
                }
            });
        }
    });   

    viewModel = viewModel.slice(0, 6);

    $.each(viewModel, function(index, item){        
        var el = $.map(viewModel, function(val, i) {
            return "<div>" + val.day + "/" + val.month + " -- " + val.temperature + " C (time: " + val.hour + ") (symbol: " + weatherSymbols[val.symbol] + ")" +  "</div>";
          });
          
          $("#weather").html(el.join(""));
    });  
};