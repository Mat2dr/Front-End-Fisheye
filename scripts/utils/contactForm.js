function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const contactModel = modalFactory(thePhotographer);
    const modalCardDOM = contactModel.getModalCardDOM();
    modal.appendChild(modalCardDOM);
    focusModal();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    document.querySelector(".modal").remove();
}

function sendModal() {
    const firstName = document.getElementById ('prenom');
    const lastName = document.getElementById ('nom');
    const email = document.getElementById ('email');
    const message = document.getElementById ('message');

    console.log('< Le formulaire >');
    console.log('Prénom: ' + firstName.value);
    console.log('Nom: ' + lastName.value);
    console.log('Email: ' + email.value);
    console.log('Le Message: ' + message.value);
    
    closeModal();
}

