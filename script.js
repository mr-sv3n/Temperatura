const baseUrl = "http://api.weatherstack.com/current";
const accessKey = "ba268bae854abf6570d487a3963fa734";


const cityForm = document.querySelector("form");

cityForm.addEventListener ("submit", async (e) => {
    e.preventDefault();
    let query = document.getElementById("grad").value
    const encodedQuery = encodeURIComponent(query);
    const completeUrl = `${baseUrl}?access_key=${accessKey}&query=${encodedQuery}`;
    async function weather() {
        try {
            const request = await fetch(completeUrl);
            const parsedRequest = await request.json();
            console.log(parsedRequest);
            const temp = parsedRequest.current.temperature;
            const description = parsedRequest.current.weather_descriptions[0];
            
            const gradTemp = document.querySelector(".temp");
            gradTemp.textContent = `The temperature outside is ${temp} C`;
    
            const gradOpis = document.querySelector(".description");
            gradOpis.textContent = `The weather conditions are ${description}`
        }
        catch {
            
        }
    }
    weather()
})






