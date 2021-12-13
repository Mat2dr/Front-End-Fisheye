//Mettre le code JavaScript lié à la page photographer.html

/*--------- DOM ELEMENTS ---------*/

//Recuperer l'id du photographe
const photographe = window.location.search.split("?").join("");

let likeCount = 0;
let mediaCount = 1;
let photographerMedia = [];

/*--------- EVENTS ---------*/
const fetchPhotographer = async () => {
    await fetch('./data/photographers.json')
        .then( function  (resp) {
            return resp.json();
        })
        .then( function (data) {
            thePhotographers = data.photographers;
            theMedia = data.media;

            for (let i = 0; i < thePhotographers.length; i++) {
                if(thePhotographers[i].id == photographe){
                    thePhotographer = thePhotographers[i];
                }
            }
        });
};


const photographerDisplay = async () => {
    await fetchPhotographer();

    //Zone pour afficher les données:
    const photographerBanner = document.querySelector(".photograph-header");
    //Afficher les données
    photographerBanner.innerHTML = 
    `<div class="photograph-header-name">
          <h1>${thePhotographer.name}</h1>
          <div class="photograph-header-desc">
            <h3>${thePhotographer.city}, ${thePhotographer.country}</h3>
            <p>${thePhotographer.tagline}</p>
          </div>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <div class="photograph-header-photo">
          <img src="assets/photographers/${thePhotographer.portrait}" alt="Photo de Mimi Keel">
        </div>`;

    const photoSection = document.querySelector(".photos");

    //Gallery Display Img and video
    for (let i = 0; i < theMedia.length; i++) {
        if(theMedia[i].photographerId == photographe){
            //push in a new array with only the media from the photographer
            photographerMedia.push(theMedia[i]);
            if(theMedia[i].hasOwnProperty('image')) {
                const mediaModel = photoFactory(theMedia[i]);
                const photoCardDOM = mediaModel.getPhotoCardDOM();
                photoSection.appendChild(photoCardDOM);
            } else if(theMedia[i].hasOwnProperty('video')){
                const mediaModel = videoFactory(theMedia[i]);
                const videoCardDOM = mediaModel.getVideoCardDOM();
                photoSection.appendChild(videoCardDOM);
            }  
        }
    }
    
    //Function when you open an image or a video
    gallery();
    //Function to filter the media
    dropDownFilter();
    //Function to show the recap of the photographer
    recap();   
    //Like event
    likeEvent();

}

photographerDisplay();


/*--------- FUNCTIONS ---------*/
