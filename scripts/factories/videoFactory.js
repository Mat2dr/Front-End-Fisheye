function videoFactory(data) {
    const { id , photographerId , title , video, likes, date, price} = data;

    function getVideoCardDOM() {
        //Setup element
        const media = document.createElement('div');
        media.classList.add("media");

        //Afficher la photo
        laVideoName = thePhotographer.name.split(" ")[0]
        const laVideo = `assets/photographers/${laVideoName}/${video}`;
        const videoMedia = document.createElement( 'video' );
        videoMedia.setAttribute("src", laVideo);
        videoMedia.setAttribute("type", "video/mp4");
        videoMedia.setAttribute("controls","controls");


        //Desciption photo
        const mediaDesc = document.createElement('div');
        mediaDesc.classList.add("media-desc");

        const mediaTitre = document.createElement('div');
        mediaTitre.classList.add("titre");
        const titre = document.createElement('p');
        titre.textContent = title;
        mediaTitre.appendChild(titre);
        mediaDesc.appendChild(mediaTitre);
        const mediaLikes = document.createElement('div');
        mediaLikes.classList.add("likes");
        const likesMedia = document.createElement('p');
        likesMedia.innerHTML = likes;
        const likesI = document.createElement('i')
        likesI.classList.add("far","fa-heart");
        //Like counter

        mediaLikes.appendChild(likesMedia);
        mediaLikes.appendChild(likesI);
        mediaDesc.appendChild(mediaLikes);
        likeCount = likeCount + likes;

        media.appendChild(videoMedia);
        media.appendChild(mediaDesc);

        //Like Event
        likesI.addEventListener("click", () => {
            if (likesI.classList.contains("far")) {
                likesI.classList.replace("far","fas")
                likesMedia.innerHTML = likes + 1;
                likeCount++;
            } else {
                likesI.classList.replace("fas","far")
                likesMedia.innerHTML = likes;
                likeCount--;
            }
        }); 

        return (media);
    }
    return { getVideoCardDOM };
}