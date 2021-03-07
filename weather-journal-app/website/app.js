/* Global Variables */
const weatherServiceBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const zipPrefix = 'zip=';
const appIdPrefix = '&appid=';
const unitsArgument = '&units=metric';
const weatherAPIey = '5f7ebcc1c06dc7d32a224b3378997d45';
// Create a new date instance dynamically with JS
document.getElementById('generate').addEventListener('click', showweather);
//function present last data from backend
const result = async () => {
    const request = await fetch('/getWeather');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('city').innerHTML = allData.city;
        document.getElementById('temp').innerHTML = allData.temperature+"";
        document.getElementById('content').innerHTML = allData.userResponse;
    } catch (error) {
        //Basic error handling through printing it to the console
        window.alert("error", error);
    }
}

/*
 * Interact with Weather webAPI, then save the latst retrieved data from user and API Call
 * At last Update the GUI accordingly
 */
    // Create a new date instance dynamically with JS
function showweather(e) {
    const zipcode = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    let d = new Date();
    let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();
    //API Link use to collect weather info
    getCurrentWeather(weatherServiceBaseUrl + zipPrefix + zipcode + unitsArgument + appIdPrefix + weatherAPIey)
        .then(function (data) {
            console.log('1st fn data:' + data)
            postWeather('/setWeather', { temperature: data.main.temp, city : data.name,date: newDate, userResponse: content });
        })
        .then(function () {
            result();
            
        });
}
//Element Variables


/* get the last saved data from the server*/
const getCurrentWeather = async (url = '') => {
    //console.log('weatherRequest:' + url);
    const weatherResponse = await fetch(url);

    try {
        const weatherData = weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        //Basic error handling through printing it to the console
        window.alert("error", error);
    }
}

/* save the retrieved data into projectData*/
const postWeather = async (url = '', data = {}) => {
    console.log("data recieved for posting:" + JSON.stringify(data));
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),       
    });

    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;
    } catch (error) {
        //Basic error handling through printing it to the console
        window.alert("error", error);
    }
};