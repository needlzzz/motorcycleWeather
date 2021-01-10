




let getWeatherBtn = document.querySelector("#btn");

getWeatherBtn.addEventListener("click", e => {
    console.log("this is the statechange function")

    stateChange();
});
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

    if (dropdownValue === 'grimselpass') {
        URL = 'https://api.climacell.co/v3/weather/realtime?lat=46.56157252905508&lon=8.33759132470081&unit_system=si&fields=temp%2Cprecipitation_type&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a'
        regionImage = '../img/grimselpass.jpg';
    }

    if (dropdownValue === 'gotthardpass') {
        URL = 'https://api.climacell.co/v3/weather/realtime?lat=46.55909324107193&lon=8.562292073220776&unit_system=si&fields=temp%2Cprecipitation_type&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a'
        regionImage = '../img/gotthardpass.jpg'
    }



    let xhrWeather = new XMLHttpRequest();

    xhrWeather.open("GET", URL, true);
    xhrWeather.setRequestHeader('content-type', 'application/json');
    xhrWeather.setRequestHeader('apikey', 'me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a');

    xhrWeather.onreadystatechange = function () {





        if (xhrWeather.readyState === 4 && xhrWeather.status === 200) {
            console.log(xhrWeather.responseText)
            //get value from dropdown menu


            let temps = Object.values(JSON.parse(xhrWeather.responseText));

            let weatherTextNode = document.createElement("div");
            let getWeatherTextNode = document.getElementById("weatherTextDiv")
            let regionPictureNode = document.createElement("div");
            let weatherParagraph = document.createElement("p");
            let tempParagraph = document.createElement("p");



            let existingElementCheck = !!document.querySelector(".bigContainer").innerHTML === "";


            if (existingElementCheck == false) {

                getWeatherTextNode.remove()
                console.log(weatherTextNode)


                console.log(existingElementCheck)




                /*                 let bigContainer = document.querySelector(".bigContainer");
                                let container = document.querySelector(".container")
                                console.log(container)
                
                
                
                                console.log(existingElementCheck)
                                container = document.createElement("div")
                                console.log(container)
                                let newContainer = document.createElement("div")
                                console.log(newContainer)
                                newContainer.setAttribute("class", "newContainer")
                                newContainer = newContainer.appendChild(weatherTextNode)
                                newContainer = newContainer.appendChild(regionPictureNode)
                
                
                
                                bigContainer.replaceChild(newContainer, container) 
                
                                 let testDiv = document.createElement("div")
                                                containerElement.replaceChild(testDiv, weatherTextNode) */
                // newContainer = containerElement.replaceChild(weatherTextNode, weatherTextNode)

            }


            //this code block creates the DOM nodes










            weatherTextNode.setAttribute("class", "displayBoxes");
            weatherTextNode.setAttribute("id", "weatherTextDiv");
            regionPictureNode.setAttribute("class", "displayBoxes");
            regionPictureNode.setAttribute("id", "regionPictureDiv")
            weatherParagraph.setAttribute("id", "weatherP");
            tempParagraph.setAttribute("id", "tempP");

            let imagenode = document.createElement("img");
            /*             imagenode.setAttribute('width', '350px');
                        imagenode.setAttribute('height', '200px'); */
            imagenode.src = regionImage;
            let tempTextnode = document.createTextNode("The current temperature is: " + temps[2]['value'] + "  Celsius");
            let precipitationTextnode = document.createTextNode('Is there currently any rain or other precipitation? ' + temps[3]['value']);
            tempParagraph.appendChild(tempTextnode);
            weatherTextNode.appendChild(tempParagraph);


            weatherParagraph.appendChild(precipitationTextnode)
            weatherTextNode.appendChild(weatherParagraph);

            regionPictureNode.appendChild(imagenode);
            /*             document.querySelector('.container').appendChild(weatherTextNode)
                        document.querySelector('.container').appendChild(regionPictureNode) */

            document.querySelector('.bigContainer').appendChild(weatherTextNode)
            document.querySelector('.bigContainer').appendChild(regionPictureNode)
















        }
        else {
            console.log("bad stuff")
        }
    };
    xhrWeather.send()
};


