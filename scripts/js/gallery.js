let getLatestMedia;

function gallery() {

    let galleryImages = document.querySelectorAll(".media-El");

    if (galleryImages) {
        galleryImages.forEach(function(media, index) {
            media.onclick = function () {
                if (media.classList.contains("ph")) {
                    let getMediaSrc = media.querySelector("img").getAttribute("src");

                    getLatestMedia = index;

                    let container = document.body;
                    let newMediaWindow = document.createElement('div');
                    container.appendChild(newMediaWindow);
                    newMediaWindow.setAttribute("class", "media-window");

                    let closeMedia = document.createElement('a');
                    let close = document.createElement('i');
                    close.classList.add("fas","fa-times");
                    closeMedia.appendChild(close);
                    closeMedia.setAttribute("onclick", "closeMedia()");
                    newMediaWindow.appendChild(closeMedia);

                    let newMedia = document.createElement('img');
                    newMediaWindow.appendChild(newMedia);
                    newMedia.setAttribute("src", getMediaSrc );
                    newMedia.setAttribute("id", "current-media");

                    //Next Btn
                    newNextBtn = document.createElement('a');
                    let Next = document.createElement('i');
                    Next.classList.add("fas","fa-chevron-right");
                    newNextBtn.appendChild(Next);
                    newMediaWindow.appendChild(newNextBtn);
                    newNextBtn.setAttribute("class", "media-btn-next");
                    newNextBtn.setAttribute("onclick", "changeMedia(1)");
                    //Prev Btn
                    newPrevBtn = document.createElement('a');
                    let Prev = document.createElement('i');
                    Prev.classList.add("fas","fa-chevron-left");
                    newPrevBtn.appendChild(Prev);
                    newMediaWindow.appendChild(newPrevBtn);
                    newPrevBtn.setAttribute("class", "media-btn-prev");
                    newPrevBtn.setAttribute("onclick", "changeMedia(0)");
                } else if (media.classList.contains("vid")) {
                    let getMediaSrc = media.querySelector("video").getAttribute("src");
                    
                    getLatestMedia = index;

                    let container = document.body;
                    let newMediaWindow = document.createElement('div');
                    container.appendChild(newMediaWindow);
                    newMediaWindow.setAttribute("class", "media-window");

                    let closeMedia = document.createElement('a');
                    let close = document.createElement('i');
                    close.classList.add("fas","fa-times");
                    closeMedia.appendChild(close);
                    closeMedia.setAttribute("onclick", "closeMedia()");
                    newMediaWindow.appendChild(closeMedia);

                    let newMedia = document.createElement('video');
                    newMedia.setAttribute("type", "video/mp4");
                    newMedia.setAttribute("controls","controls");
                    newMediaWindow.appendChild(newMedia);
                    newMedia.setAttribute("src", getMediaSrc );
                    newMedia.setAttribute("id", "current-media");

                    //Next Btm
                    newNextBtn = document.createElement('a');
                    let Next = document.createElement('i');
                    Next.classList.add("fas","fa-chevron-right");
                    newNextBtn.appendChild(Next);
                    newMediaWindow.appendChild(newNextBtn);
                    newNextBtn.setAttribute("class", "media-btn-next");
                    newNextBtn.setAttribute("onclick", "changeMedia(1)");
                    //Prev Btn
                    newPrevBtn = document.createElement('a');
                    let Prev = document.createElement('i');
                    Prev.classList.add("fas","fa-chevron-left");
                    newPrevBtn.appendChild(Prev);
                    newMediaWindow.appendChild(newPrevBtn);
                    newPrevBtn.setAttribute("class", "media-btn-prev");
                    newPrevBtn.setAttribute("onclick", "changeMedia(0)");
                }
            }
        })
    }
}

function closeMedia() {
    document.querySelector(".media-window").remove();
    
}

function changeMedia(changeDir) {
    //Clear the media
    let calcNewMedia;
    document.querySelector("#current-media").remove();
    //Setup
    let galleryImages = document.querySelectorAll(".media-El");
    
    if (changeDir === 1) {
        calcNewMedia = getLatestMedia + 1;
        if(calcNewMedia > galleryImages.length - 1 ) {
            calcNewMedia = 0;
        }
    }
    else if (changeDir === 0) {
        calcNewMedia = getLatestMedia - 1;
        if(calcNewMedia < 0) {
            calcNewMedia = galleryImages.length - 1;
        }
    }

    let nextMedia = galleryImages[calcNewMedia];

    if (nextMedia.classList.contains("ph")) {
        let getMediaWindow = document.querySelector(".media-window");
        let newMedia = document.createElement("img");
        getMediaWindow.appendChild(newMedia);
        
        let currentMedia = nextMedia.querySelector("img");
        let getMediaSrc = currentMedia.getAttribute("src");
        newMedia.setAttribute("src", getMediaSrc);
        newMedia.setAttribute('id', "current-media");
    }
    else if (nextMedia.classList.contains("vid")) {
        let getMediaWindow = document.querySelector(".media-window");
        let newMedia = document.createElement("video");
        getMediaWindow.appendChild(newMedia);
        
        let currentMedia = nextMedia.querySelector("video");
        let getMediaSrc = currentMedia.getAttribute("src");
        newMedia.setAttribute("src", getMediaSrc);
        newMedia.setAttribute("type", "video/mp4");
        newMedia.setAttribute("controls","controls");
        newMedia.setAttribute('id', "current-media");
    }
    getLatestMedia = calcNewMedia;
}