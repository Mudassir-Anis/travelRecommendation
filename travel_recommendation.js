const searchEl = document.getElementById('inp-field');
const searchBtn = document.getElementById('search-btn');
const heroRight = document.getElementById('hero-section-right');
const clearBtn = document.getElementById('clear-btn');

const showRecommendation = (data) => {
    const str = searchEl.value.toLowerCase();
    let place = findKey(str,data);
    if(!place) {
        place = findCountry(str,data);
    }
    if(place) {
        updatePage(place);
    }
    

}

const getData = async () => {
    const rawData = await fetch("travel_recommendation_api.json");
    const data = await rawData.json();
    showRecommendation(data);
   
};
function addListeners() {
    searchBtn.addEventListener('click', getData);
    clearBtn.addEventListener('click', () => {
        heroRight.innerHTML = '';
        searchEl.value = ''
    })
}


function findKey(str,data) {
    let key;
    if(str in data) {
        key = str;
    }
    else if ((str + 's') in data) {
        key = str + 's'; 
    }
    else if((str + 'es') in data) {
        key = str + 'es';
    }

    return data[key];
}
function updatePage(data) {
    heroRight.innerHTML = '';
    let content;
    data.forEach((elem) => {
        content = `<div id="recommendation-card" class="recommendation-card">
        <img class="recommendation-img" src="${elem.imageUrl}" loading="lazy"/>
        <div id="recommendation-details" class="recommendation-details">
            <h2 id="recommendation-heading" class="recommendation-heading">${elem.name}</h2>
            <p id="recommendation-description" class="recommendation-description">${elem.description}</p>
            <div id="visit" class="visit">Visit</div>
        </div>
   </div>`
        heroRight.insertAdjacentHTML("beforeend",content);
    })
}


function findCountry(str,data) {
    console.log(data);
    const country = data.countries.find(elem => elem.name.toLowerCase() === str.toLowerCase());
    const cities = country.cities;
    return cities;
}
addListeners();