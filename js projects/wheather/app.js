let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
form.addEventListener('submit' ,(Event) => {
    Event.preventDefault() ;
    if(valueSearch.value != ''){
        searchWeather();
    }
})
let id = 'f74cc334f4d137773720539d765cd763'
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value).then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
        }
    })
}