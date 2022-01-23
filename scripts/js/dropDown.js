//SELECTORS
const photoSection = document.querySelector(".photos");

const selectBox = document.querySelector(".select-box");
const selected = document.querySelector(".selected");
const selectedLabel = selected.querySelector("p");
const chevronDown = selected.querySelector(".chevron-down");
const optionsContainer = document.querySelector(".option-container");
const optionTitle = document.querySelector(".option-title");
const optionList = document.querySelectorAll(".option");

const radios = Array.from(document.querySelectorAll('[name="filtreBox"]'));

//EVENT LISTENER
selected.addEventListener("mouseenter",()=> {
  optionsContainer.classList.add("active");
  chevronDown.classList.add("activeChevron");
});
selectBox.addEventListener("mouseleave",()=> {
  optionsContainer.classList.remove("active");
  chevronDown.classList.remove("activeChevron");
});

//Affiche dans la div selected
optionList.forEach(option => {
 option.addEventListener("click", ()=> {
   selectedLabel.innerHTML = option.querySelector("label").innerHTML;
   optionsContainer.classList.remove("active");
 })
});

//Affiche dans la console la radio select
// + Systeme pour afficher ou non le titre de la dropdown
for (const radio of radios) {
 //Pour le chargement de la page
 if (radio.checked === true && radio.value === "pop"){
   selectedLabel.innerHTML = document.querySelector('[name="filtreBox"]:checked').id;
   console.log(document.querySelector('[name="filtreBox"]:checked').value);
   optionTitle.classList.add("removeTitle");
 }
 //Si il y a un changement
 radio.addEventListener('change', function() {
   if ( radio.value === "pop" ) {
        optionTitle.classList.add("removeTitle");
        console.log(document.querySelector('[name="filtreBox"]:checked').value);
        //Clear div
        photoSection.innerHTML = "";
        likeCount = 0;
        //Order by likes
        filterMedia = photographerMedia.sort((mediaA, mediaB) => {
            return mediaA.likes - mediaB.likes;
        });
        //Generate the Media
        for (let i = 0; i < filterMedia.length; i++) {
            if (filterMedia[i].hasOwnProperty('image')) {
                const mediaModel = photoFactory(filterMedia[i]);
                const photoCardDOM = mediaModel.getPhotoCardDOM();
                photoSection.appendChild(photoCardDOM);
            } else if (filterMedia[i].hasOwnProperty('video')) {
                const mediaModel = videoFactory(filterMedia[i]);
                const videoCardDOM = mediaModel.getVideoCardDOM();
                photoSection.appendChild(videoCardDOM);
            }  
        }
   } else if (radio.value === "date") {
        console.log(document.querySelector('[name="filtreBox"]:checked').value);
        optionTitle.classList.remove("removeTitle");
        //Clear div
        photoSection.innerHTML = "";
        likeCount = 0;
        //Order by dates
        filterMedia = photographerMedia.sort((mediaA, mediaB) => {
            return new Date(mediaA.date).valueOf() - new Date(mediaB.date).valueOf();
        });
        //Generate the Media
        for (let i = 0; i < filterMedia.length; i++) {
            if(filterMedia[i].hasOwnProperty('image')) {
                const mediaModel = photoFactory(filterMedia[i]);
                const photoCardDOM = mediaModel.getPhotoCardDOM();
                photoSection.appendChild(photoCardDOM);
            } else if(filterMedia[i].hasOwnProperty('video')){
                const mediaModel = videoFactory(filterMedia[i]);
                const videoCardDOM = mediaModel.getVideoCardDOM();
                photoSection.appendChild(videoCardDOM);
            }  
        }
   } else if (radio.value === "titre") {
        console.log(document.querySelector('[name="filtreBox"]:checked').value);
        optionTitle.classList.remove("removeTitle");
        //Clear div
        photoSection.innerHTML = "";
        likeCount = 0;
        //Order by title
        filterMedia = photographerMedia.sort((mediaA, mediaB) => {
            if (mediaA.title.toLowerCase() < mediaB.title.toLowerCase()) {
                return -1;
            } else if (mediaA.title.toLowerCase() > mediaB.title.toLowerCase()) {
                return 1;
            }
        });         
        //Generate the Media
        for (let i = 0; i < filterMedia.length; i++) {
            if (filterMedia[i].hasOwnProperty('image')) {
                const mediaModel = photoFactory(filterMedia[i]);
                const photoCardDOM = mediaModel.getPhotoCardDOM();
                photoSection.appendChild(photoCardDOM);
            } else if (filterMedia[i].hasOwnProperty('video')) {
                const mediaModel = videoFactory(filterMedia[i]);
                const videoCardDOM = mediaModel.getVideoCardDOM();
                photoSection.appendChild(videoCardDOM);
            }  
        }
   }
   //Function when you open an image or a video
   gallery();
   //Like event
   likeEvent();
  }
 )};