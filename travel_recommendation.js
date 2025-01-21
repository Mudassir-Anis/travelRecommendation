const searchEl = document.getElementById('inp-field');
const searchBtn = document.getElementById('search-btn');

const getData = async () => {
    const rawData = await fetch("travel_recommendation_api.json");
    const data = await rawData.json();
    showRecommendation(data);
};
const showRecommendation = (data) => {
    const str = searchEl.ariaValueMax.toLocaleLowerCase();
    // for(key in data) {
    //     const place = data[key].find((elem) => elem.name === inpStr || elem.name === inpStr + 's');

    // }
    console.log(str);
}
searchBtn.addEventListener('click', getData);




