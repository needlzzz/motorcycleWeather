let xhrWeather = new XMLHttpRequest();
let URL = "https://api.climacell.co/v3/weather/realtime?lat=47.79698336215463&lon=8.171960521502825&location_id=ger&unit_system=si&fields=precipitation%2Ctemp&apikey=me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a"



xhrWeather.open("GET", URL, false);
xhrWeather.setRequestHeader('content-type', 'application/json');
xhrWeather.setRequestHeader('apikey', 'me2Qm6ZYZ7V8CUhZ5FopsDhQdsqmeV6a');

let container = document.querySelector(".container");

container.addEventListener("submit", (e) => {
    e.preventDefault();
    stateChange();
})
function stateChange() {
    xhrWeather.onreadystatechange = function () {

        if (xhrWeather.readyState === 4 && xhrWeather.status === 200) {

            let jsonParsed = JSON.parse(xhrWeather.responseText);
            let temps = Object.values(jsonParsed);
            let tempUnit = temps[2]['units']
            let tempNumber = temps[2]['value'];
            // document.getElementById("weatherContent").innerHTML =
            let node = document.createElement("div")
            let textnode = document.createTextNode(tempNumber)
            node.appendChild(textnode);
            document.querySelector('container').appendChild(node)


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

};
xhrWeather.send()

47.79698336215463, 8.171960521502825
