




let getWeatherBtn = document.querySelector("#btn");

getWeatherBtn.addEventListener("click", e => {
    console.log("this is the statechange function")

    stateChange();
})
function stateChange() {

    let dropdownElmt = document.getElementById("dropdownMenu");
    let dropdownValue = dropdownElmt.value;
    let URL = ""

    if (dropdownValue === 'schluchsee') {
        URL = "https://api.climacell.co/v3/weather/realtime?lat=47.79698336215463&lon=8.171960521502825&location_id=ger&unit_system=si&fields=precipitation%2Ctemp&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a"
    }

    if (dropdownValue === 'bonndorf') {
        URL = "https://api.climacell.co/v3/weather/realtime?lat=47.821811301202914&lon=8.341426214856225&unit_system=si&fields=temp%2Cprecipitation&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a"
    }

    if (dropdownValue === 'todtmoos') {
        URL = "https://api.climacell.co/v3/weather/realtime?lat=47.73990890361475&lon=7.997162897621155&unit_system=si&fields=temp%2Cprecipitation&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a"
    }

    if (dropdownValue === 'sustenpass') {
        URL = "https://api.climacell.co/v3/weather/realtime?lat=46.730015865232374&lon=8.447023369033596&unit_system=si&fields=temp%2Cprecipitation&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a"

    }


    let xhrWeather = new XMLHttpRequest();

    xhrWeather.open("GET", URL, true);
    xhrWeather.setRequestHeader('content-type', 'application/json');
    xhrWeather.setRequestHeader('apikey', 'me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a');

    xhrWeather.onreadystatechange = function () {




        if (xhrWeather.readyState === 4 && xhrWeather.status === 200) {

            //get value from dropdown menu








            let jsonParsed = JSON.parse(xhrWeather.responseText);
            let temps = Object.values(jsonParsed);
            let tempUnit = temps[2]['units']
            let tempNumber = temps[2]['value'];
            // document.getElementById("weatherContent").innerHTML =
            let node = document.createElement("div")
            node.setAttribute("class", "col-md-6")
            let textnode = document.createTextNode("The current temperature is: " + tempNumber + "  Celsius")
            node.appendChild(textnode);
            document.querySelector('.container').appendChild(node)



            console.log(tempNumber)
            console.log(Object.values(jsonParsed))


            /*         for (let i = 0; i < jsonParsed.length; i++) {
                        let fetchedData = jsonParsed[i]['temp']['units'];
                        console.log(fetchedData)
                    } */

        }
        else {
            console.log("bad stuff")
        }
    };
    xhrWeather.send()
};


47.79698336215463, 8.171960521502825
