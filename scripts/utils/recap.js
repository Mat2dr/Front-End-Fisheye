function recap() {
  //Zone pour afficher les données:
  const photographerRecap = document.querySelector(".photograph-recap");
  //Afficher les données
  const photographRecapTotalLikes = document.createElement('div');
  photographRecapTotalLikes.classList.add("photograph-recap-totalLikes");
  const likes = document.createElement('p');
  likes.innerHTML = likeCount;
  const likesI = document.createElement('i')
  likesI.classList.add("fas","fa-heart");
  const photographRecapTotalPrice = document.createElement('div');
  photographRecapTotalPrice.classList.add("photograph-recap-price");
  const price = document.createElement('h3');
  price.innerHTML = thePhotographer.price + '€/jour';

  photographRecapTotalLikes.appendChild(likes);
  photographRecapTotalLikes.appendChild(likesI);
  photographerRecap.appendChild(photographRecapTotalLikes);
  photographRecapTotalPrice.appendChild(price);
  photographerRecap.appendChild(photographRecapTotalPrice);
}