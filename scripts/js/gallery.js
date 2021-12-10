function gallery() {

    let galleryImages = document.querySelectorAll(".media-El");
    let getLatestMedia;

    if (galleryImages) {
        galleryImages.forEach(function(media, index) {
            media.onclick = function () {
                if (media.classList.contains("ph")) {
                    let getMediaSrc = media.querySelector("img").getAttribute("src");

                    getLatestMedia = index + 1;

                    let container = document.body;
                    let newMediaWindow = document.createElement('div');
                    container.appendChild(newMediaWindow);
                    newMediaWindow.setAttribute("class", "media-window");

                    let closeMedia = document.createElement('a');
                    const close = document.createElement('i');
                    close.classList.add("fas","fa-times");
                    closeMedia.appendChild(close);
                    closeMedia.setAttribute("onclick", "closeMedia()");
                    newMediaWindow.appendChild(closeMedia);


                    let newMedia = document.createElement('img');
                    newMediaWindow.appendChild(newMedia);
                    newMedia.setAttribute("src", getMediaSrc );
                    //Next Btm
                    newNextBtn = document.createElement('a');
                    const Next = document.createElement('i');
                    Next.classList.add("fas","fa-chevron-right");
                    newNextBtn.appendChild(Next);
                    newMediaWindow.appendChild(newNextBtn);
                    newNextBtn.setAttribute("class", "media-btn-next");
                    newNextBtn.setAttribute("onclick", "changeMedia()");
                    //Prev Btn
                    newPrevBtn = document.createElement('a');
                    const Prev = document.createElement('i');
                    Prev.classList.add("fas","fa-chevron-left");
                    newPrevBtn.appendChild(Prev);
                    newMediaWindow.appendChild(newPrevBtn);
                    newPrevBtn.setAttribute("class", "media-btn-prev");
                    newPrevBtn.setAttribute("onclick", "changeMedia()");

                } else if (media.classList.contains("vid")) {
                    let getMediaSrc = media.querySelector("video").getAttribute("src");
                    
                    getLatestMedia = index + 1;

                    let container = document.body;
                    let newMediaWindow = document.createElement('div');
                    container.appendChild(newMediaWindow);
                    newMediaWindow.setAttribute("class", "media-window");

                    let closeMedia = document.createElement('a');
                    const close = document.createElement('i');
                    close.classList.add("fas","fa-times");
                    closeMedia.appendChild(close);
                    closeMedia.setAttribute("onclick", "closeMedia()");
                    newMediaWindow.appendChild(closeMedia);

                    let newMedia = document.createElement('video');
                    newMedia.setAttribute("type", "video/mp4");
                    newMedia.setAttribute("controls","controls");
                    newMediaWindow.appendChild(newMedia);
                    newMedia.setAttribute("src", getMediaSrc );
                    //Next Btm
                    newNextBtn = document.createElement('a');
                    const Next = document.createElement('i');
                    Next.classList.add("fas","fa-chevron-right");
                    newNextBtn.appendChild(Next);
                    newMediaWindow.appendChild(newNextBtn);
                    newNextBtn.setAttribute("class", "media-btn-next");
                    newNextBtn.setAttribute("onclick", "changeMedia()");
                    //Prev Btn
                    newPrevBtn = document.createElement('a');
                    const Prev = document.createElement('i');
                    Prev.classList.add("fas","fa-chevron-left");
                    newPrevBtn.appendChild(Prev);
                    newMediaWindow.appendChild(newPrevBtn);
                    newPrevBtn.setAttribute("class", "media-btn-prev");
                    newPrevBtn.setAttribute("onclick", "changeMedia()");
                }
            }
        })
    }
}

function closeMedia() {
    document.querySelector(".media-window").remove();
}