axios.get('http://api.openweathermap.org/data/2.5/weather?id=6440000&APPID=78885028b1b8985f9fa9f163c95d8232')
    .then(function (response) {
        // handle success
        // alert(response.data.sys.country);

        var country = response.data.name;
        var description = response.data.weather[0].description;
        //var icon = response.data.weather[0].icon;
        var temperature = parseInt(response.data.main.temp - 273) + '°';
        var country_code = response.data.sys.country;

        $(".weather-country-name").html(country);
        $(".weather-value").html(temperature);
        $(".weather-description").html(description);
        $(".weather-country-code").html(country_code);

        //Setting weather icon according to the current description
        var iconElement = $(".weather-img");
        switch (description) {
            case 'clear sky':
                iconElement.attr("src", "img/clear_sky.svg");
                break;
            case 'few clouds':
                iconElement.attr("src", "img/few_cloud.svg");
                break;
            case 'scattered clouds':
                iconElement.attr("src", "img/scattered_cloud.svg");
                break;
            case 'broken clouds':
                iconElement.attr("src", "img/broken_cloud.svg");
                break;
            case 'shower rain':
                iconElement.attr("src", "img/shower_rain.svg");
                break;
            case 'rain':
                iconElement.attr("src", "img/rain.svg");
                break;
            case 'thunderstorm':
                iconElement.attr("src", "img/thunderstorm.svg");
                break;
            case 'snow':
                iconElement.attr("src", "img/snow.svg");
                break;
            case 'mist':
                iconElement.attr("src", "img/mist.svg");
                break;
            default:
                iconElement.attr("src", "img/climate.svg");
        }
    })
    .catch(function (error) {
        // handle error
        alert(error);
    })
    .then(function () {
        // always executed
    });