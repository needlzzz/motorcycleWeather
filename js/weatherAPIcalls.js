




let getWeatherBtn = document.querySelector("#btn");

getWeatherBtn.addEventListener("click", e => {
    console.log("this is the statechange function")

    stateChange();
})
function stateChange() {

    let dropdownElmt = document.getElementById("dropdownMenu");
    let dropdownValue = dropdownElmt.value;
    let URL = "";
    let regionImage = "";

    if (dropdownValue === 'schluchsee') {
        URL = 'https://api.climacell.co/v3/weather/realtime?lat=47.798916919872866&lon=8.183037307776177&unit_system=si&fields=temp%2Cprecipitation_type&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a'
        regionImage = "../img/schluchsee-blick.jpg"
    }

    if (dropdownValue === 'schauinsland') {
        URL = 'https://api.climacell.co/v3/weather/realtime?lat=47.91368287150694&lon=7.898325385069348&unit_system=si&fields=temp%2Cprecipitation_type&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a'
        regionImage = "../img/schauinsland.jpg"
    }

    if (dropdownValue === 'todtmoos') {
        URL = 'https://api.climacell.co/v3/weather/realtime?lat=47.7416329953509&lon=8.004721615344211&unit_system=si&fields=temp%2Cprecipitation_type&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a'
        regionImage = "../img/todtmoos.jpg"
    }

    if (dropdownValue === 'sustenpass') {
        URL = 'https://api.climacell.co/v3/weather/realtime?lat=46.733239716311395&lon=8.432407803492424&unit_system=si&fields=temp%2Cprecipitation_type&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a'
        regionImage = "../img/sustenpass.jpg";
    }




    let xhrWeather = new XMLHttpRequest();

    xhrWeather.open("GET", URL, true);
    xhrWeather.setRequestHeader('content-type', 'application/json');
    xhrWeather.setRequestHeader('apikey', 'me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a');

    xhrWeather.onreadystatechange = function () {

        let clicks = 0;



        if (xhrWeather.readyState === 4 && xhrWeather.status === 200) {
            console.log(xhrWeather.responseText)
            //get value from dropdown menu

            if (clicks > 0) {

            }


            //this code block creates the DOM nodes

            clicks = clicks++;


            let temps = Object.values(JSON.parse(xhrWeather.responseText));
            // let tempUnit = temps[2]['units']
            /*             let tempNumber = temps[2]['value'];
                        let precipitationValue = temps[3]['value']; */

            let weatherTextNode = document.createElement("div");
            let regionPictureNode = document.createElement("div");
            let weatherParagraph = document.createElement("p");
            let tempParagraph = document.createElement("p");

            weatherTextNode.setAttribute("class", "col-md-6");
            weatherTextNode.setAttribute("id", "weatherTextDiv")
            regionPictureNode.setAttribute("class", "col-md-6");
            weatherParagraph.setAttribute("id", "weatherP");
            tempParagraph.setAttribute("id", "tempP");

            let imagenode = document.createElement("img");
            imagenode.setAttribute('width', '350px');
            imagenode.setAttribute('height', '200px');
            imagenode.src = regionImage;
            let tempTextnode = document.createTextNode("The current temperature is: " + temps[2]['value'] + "  Celsius");
            let precipitationTextnode = document.createTextNode("Is there currently any rain? " + temps[3]['value']);
            tempParagraph.appendChild(tempTextnode);
            weatherTextNode.appendChild(tempParagraph);


            weatherParagraph.appendChild(precipitationTextnode)
            weatherTextNode.appendChild(weatherParagraph);

            regionPictureNode.appendChild(imagenode);
            document.querySelector('.container').appendChild(weatherTextNode)
            document.querySelector('.container').appendChild(regionPictureNode)

            let existingElementCheck = !!document.querySelector(".container");
            let containerElement = document.querySelector(".container");

            if (existingElementCheck) {
                console.log(existingElementCheck)

                containerElement.replaceChild(weatherTextNode, weatherTextNode)

            }










        }
        else {
            console.log("bad stuff")
        }
    };
    xhrWeather.send()
};


