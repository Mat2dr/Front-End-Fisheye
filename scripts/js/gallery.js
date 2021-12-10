function gallery() {

    let galleryImages = document.querySelectorAll(".media");
    let getLatestMedia;
    let windowWidth = window.innerWidth;

    if (galleryImages) {
        galleryImages.forEach(function(media) {
            media.onclick = function () {
                let getMediaSrc = media.querySelector("img").getAttribute("src");

                console.log(getMediaSrc);
            }
        })
    }
}