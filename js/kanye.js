function loadData(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
function displayData(data){
    const quote = document.getElementById('kanye-told');
    quote.innerText = data.quote
}
loadData();