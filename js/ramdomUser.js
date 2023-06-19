const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const gender = document.getElementById('user');
    gender.innerHTML = `
    <h1>Gender- ${user.results[0].gender} </h1>
    <h1>Name- ${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last} </h1>
    `;
}

loadUser();