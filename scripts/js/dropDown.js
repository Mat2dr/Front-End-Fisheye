const filterBtn = document.querySelector("#filterBtn");

function dropDownFilter() {
    filterBtn.addEventListener("change", (e) => {
        const value = e.target.value;
        const text = filterBtn.options[filterBtn.selectedIndex].text;

        const photoSection = document.querySelector(".photos");
       
        if (value === 'pop') {
            photoSection.innerHTML = "";

            console.log('pop');
        } 
        else if (value === 'date'){
            //Clear div
            photoSection.innerHTML = "";
            //Order by date
            filterMedia = photographerMedia.sort((mediaA, mediaB) => {
                return new Date(mediaA.date).valueOf() - new Date(mediaB.date).valueOf();
            })
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
        }
        else if (value === 'titre'){
            photoSection.innerHTML = "";

            console.log('titre');
        }
      });

};

