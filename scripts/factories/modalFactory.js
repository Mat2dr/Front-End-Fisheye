function modalFactory(data) {
    const { name } = data;

    function getModalCardDOM() {
        //Création de la modal
        const modal = document.createElement( 'div' );
        modal.classList.add("modal");
        //Modal content
        const headerModal = document.createElement( 'div' );
        headerModal.classList.add("header");
        const h2 = document.createElement( 'h2' );
        h2.innerHTML = 'Contactez-moi ' + '<br>' + name;
        const iClose = document.createElement( 'i' );
        iClose.classList.add("fas","fa-times");
        iClose.setAttribute("onclick", "closeModal()");
        headerModal.appendChild(h2);
        headerModal.appendChild(iClose);

        //Form content
        const form = document.createElement( 'form' );
        const DivForm = document.createElement( 'div' );
            //Label + input
            const labelPrenom = document.createElement( 'label' );
            labelPrenom.textContent = 'Prénom';
            labelPrenom.setAttribute("for", "prenom");
            const inputPrenom =  document.createElement( 'input' );
            inputPrenom.setAttribute("id", "prenom");
            inputPrenom.setAttribute("name", "prenom");

            const labelNom = document.createElement( 'label' );
            labelNom.textContent = 'Nom';
            labelNom.setAttribute("for", "nom");
            const inputNom =  document.createElement( 'input' );
            inputNom.setAttribute("id", "nom");
            inputNom.setAttribute("name", "nom");

            const labelEmail = document.createElement( 'label' );
            labelEmail.textContent = 'Email';
            labelEmail.setAttribute("for", "email");
            const inputEmail =  document.createElement( 'input' );
            inputEmail.setAttribute("id", "email");
            inputEmail.setAttribute("name", "email");

            const labelMessage = document.createElement( 'label' );
            labelMessage.textContent = 'Votre message';
            labelMessage.setAttribute("for", "message");
            const inputMessage =  document.createElement( 'input' );
            inputMessage.setAttribute("id", "message");
            inputMessage.setAttribute("name", "message");

        const submitBtn = document.createElement( 'button' );
        submitBtn.classList.add("contact_button");
        submitBtn.textContent = 'Envoyer';

        //Append to divForm
        DivForm.appendChild(labelPrenom);
        DivForm.appendChild(inputPrenom);
        DivForm.appendChild(labelNom);
        DivForm.appendChild(inputNom);
        DivForm.appendChild(labelEmail);
        DivForm.appendChild(inputEmail);
        DivForm.appendChild(labelMessage);
        DivForm.appendChild(inputMessage);

        //Append to form
        form.appendChild(DivForm);
        form.appendChild(submitBtn);

 
        //Append to modal
        modal.appendChild(headerModal);
        modal.appendChild(form);

        submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            
            sendModal();    
        });

        return (modal);
    }
    return { getModalCardDOM }
}
