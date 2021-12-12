function modalFactory(data) {
    const { name } = data;

    function getModalCardDOM() {
        //Création de la modal
        const modal = document.createElement( 'div' );
        modal.classList.add("modal");
        //Modal content
        const headerModal = document.createElement( 'header' );
        const h2 = document.createElement( 'h2' );
        h2.textContent = 'Contactez-moi ' + name;
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
            const inputPrenom =  document.createElement( 'input' );

            const labelNom = document.createElement( 'label' );
            labelNom.textContent = 'Nom';
            const inputNom =  document.createElement( 'input' );

            const labelEmail = document.createElement( 'label' );
            labelEmail.textContent = 'Email';
            const inputEmail =  document.createElement( 'input' );

            const labelMessage = document.createElement( 'label' );
            labelMessage.textContent = 'Votre message';
            const inputMessage =  document.createElement( 'input' );

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

        return (modal);
    }
    return { getModalCardDOM }
}
