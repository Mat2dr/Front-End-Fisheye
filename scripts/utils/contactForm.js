function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const contactModel = modalFactory(thePhotographer);
    const modalCardDOM = contactModel.getModalCardDOM();
    modal.appendChild(modalCardDOM);
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    document.querySelector(".modal").remove();
}
