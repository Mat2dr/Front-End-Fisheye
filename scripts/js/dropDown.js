const filterBtn = document.querySelector("#filterBtn");

function dropDownFilter() {
    filterBtn.addEventListener("change", (e) => {
        const value = e.target.value;
        const text = filterBtn.options[filterBtn.selectedIndex].text;

        const photoSection = document.querySelector(".photos");
       
        if (value === 'pop') {
            //Clear div
            photoSection.innerHTML = "";
            likeCount = 0;
            //Order by likes
            filterMedia = photographerMedia.sort((mediaA, mediaB) => {
                return mediaA.likes - mediaB.likes;
            });
            console.log(filterMedia);
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
        else if (value === 'date'){
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
        }
        else if (value === 'titre'){
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
                if(filterMedia[i].hasOwnProperty('image')) {
                    const mediaModel = photoFactory(filterMedia[i]);
                    const photoCardDOM = mediaModel.getPhotoCardDOM();
                    photoSection.appendChild(photoCardDOM);
                } else if(filterMedia[i].hasOwnProperty('video')){
                    const mediaModel = videoFactory(filterMedia[i]);
                    const videoCardDOM = mediaModel.getVideoCardDOM();
                    photoSection.appendChild(videoCardDOM);
                }  
            };
        }
      });

};

