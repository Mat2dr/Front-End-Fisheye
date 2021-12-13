function likeEvent() {
    const likeI = document.querySelectorAll(".fa-heart");
    const totalLikeRecap = document.querySelector(".totalLikeNbr");


    likeI.forEach(like => {
        like.addEventListener("click", () => {
            if (like.classList.contains("fas")) {
                likeCount++;
                totalLikeRecap.innerHTML = likeCount;
            } else if(like.classList.contains("far")){
                likeCount--;
                totalLikeRecap.innerHTML = likeCount;
            }
        });
    });
}