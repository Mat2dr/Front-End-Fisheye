function photoFactory(data) {
    const { id , photographerId , title , image, likes, date, price} = data;

    const alt = `Photo ${title}`;

    function getPhotoCardDOM() {
        //Setup element
        const media = document.createElement('article');
        media.classList.add("media");

        //Afficher la photo
        laPhotoName = thePhotographer.name.split(" ")[0]
        const laPhoto = `assets/photographers/${laPhotoName}/${image}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", laPhoto);
        img.setAttribute("alt", alt);
        const mediaEl = document.createElement( 'a' );
        mediaEl.setAttribute("href", "#");
        mediaEl.classList.add("media-El", "ph");
        mediaEl.setAttribute("title", "un media photo");
        mediaEl.appendChild(img);


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
        likesMedia.classList.add("likeNbr");
        likesMedia.innerHTML = likes;
        const likesI = document.createElement('i')
        likesI.classList.add("far","fa-heart");
        //Like counter

        mediaLikes.appendChild(likesMedia);
        mediaLikes.appendChild(likesI);
        mediaDesc.appendChild(mediaLikes);
        likeCount = likeCount + likes;

        media.appendChild(mediaEl);
        media.appendChild(mediaDesc);

        //Like Event
        likesI.addEventListener("click", () => {
            if (likesI.classList.contains("far")) {
                likesI.classList.replace("far","fas");
                likesMedia.innerHTML = likes + 1;
            } else {
                likesI.classList.replace("fas","far");
                likesMedia.innerHTML = likes;
            }
        }); 

        return (media);
    }
    return { getPhotoCardDOM };
}