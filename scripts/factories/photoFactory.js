function photoFactory(data) {
    const { id , photographerId , title , image, likes, date, price} = data;

    function getPhotoCardDOM() {
        //Setup element
        const photo = document.createElement('div');
        photo.classList.add("photo");

        //Afficher la photo
        laPhotoName = thePhotographer.name.split(" ")[0]
        const laPhoto = `assets/photographers/${laPhotoName}/${image}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", laPhoto)

        //Desciption photo
        const photoDesc = document.createElement('div');
        photoDesc.classList.add("photo-desc");

        const photoTitre = document.createElement('div');
        photoTitre.classList.add("titre");
        const titre = document.createElement('p');
        titre.textContent = title;
        photoTitre.appendChild(titre);
        photoDesc.appendChild(photoTitre);
        const photoLikes = document.createElement('div');
        photoLikes.classList.add("likes");
        const likesPhoto = document.createElement('p');
        likesPhoto.innerHTML = likes;
        const likesI = document.createElement('i')
        likesI.classList.add("far","fa-heart");
        //Like counter

        photoLikes.appendChild(likesPhoto);
        photoLikes.appendChild(likesI);
        photoDesc.appendChild(photoLikes);
        likeCount = likeCount + likes;

        photo.appendChild(img);
        photo.appendChild(photoDesc);

        //Like Event
        likesI.addEventListener("click", () => {
            if (likesI.classList.contains("far")) {
                likesI.classList.replace("far","fas")
                likesPhoto.innerHTML = likes + 1;
                likeCount++;
            } else {
                likesI.classList.replace("fas","far")
                likesPhoto.innerHTML = likes;
                likeCount--;
            }
        }); 

        return (photo);
    }
    return { getPhotoCardDOM };
}