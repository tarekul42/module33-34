// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(respose => respose.json())
// .then(json => console.log(json));


function LoadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respose => respose.json())
    .then(json => console.log(json))
}

// function LoadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayData(data))
// }

// function displayData(data){
//     console.log(data);
// }