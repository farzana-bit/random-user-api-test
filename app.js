//Api call

const api = 'https://randomuser.me/api/?results=60'



getUserData(api)


//DOM seletor

const cardGallery = document.querySelector('#gallery');
const card = document.querySelector('.card');



//Api request

async function getUserData(api){
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);
    renderUserData(data.results)
}



//Render data


function renderUserData(users){
   
 cardGallery.innerHTML ="";

    users.forEach((user) => {
        const cardNameFirst = user.name.first;
        const cardNameLast = user.name.last;
        const cardEmail = user.email;
        const cardCity = user.location.city;
        const cardState = user.location.state;
        const cardImage = user.picture.large;

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('cardDetails');

       cardDiv.innerHTML = `
           <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${cardImage}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${cardNameFirst}${cardNameLast}</h3>
                        <p class="card-text">${cardEmail}</p>
                        <p class="card-text cap">${cardCity}, ${cardState}</p>
                    </div>
                </div>
       `

      cardGallery.appendChild(cardDiv)
    })
}