const searchEl = document.getElementById('inp-field');
const searchBtn = document.getElementById('search-btn');

const showRecommendation = (data) => {
    const str = searchEl.value.toLowerCase();
    let place = findKey(str,data);
    
    console.log(data);
    console.log(str);
    console.log(place);
}

const getData = async () => {
    const rawData = await fetch("travel_recommendation_api.json");
    const data = await rawData.json();
    showRecommendation(data);
   
};

searchBtn.addEventListener('click', getData);

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



