/*--------- DOM ELEMENTS ---------*/
let thePhotographers;
let theMedia;

let tagArray = [];
let tagFilterArray = [];

const photographerTag = document.querySelector(".photographerTag");
/*--------- EVENTS ---------*/

/*--------- FUNCTIONS ---------*/

const fetchPhotographers = async () => {
    await fetch('./data/photographers.json')
    .then( function  (resp) {
        return resp.json();
    })
    .then( function (data) {
        thePhotographers = data.photographers;
    });
};

const photographersDisplay = async () => {
    await fetchPhotographers();

    const photographersSection = document.querySelector(".photographer_section");

    thePhotographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
    // Remove duplicates from tagArray
    let uniqueTagArray = [...new Set(tagArray)];
    //Create tag selector
    uniqueTagArray.forEach(tag =>{
        const tagFilters = document.querySelector(".tagFilter");

        const photographerTag = document.createElement( 'div' );
        photographerTag.classList.add("photographerTagFilter");
        const p = document.createElement( 'p' );
        p.textContent = '#'+tag;
        photographerTag.appendChild(p);
        tagFilters.appendChild(photographerTag);

        //Event when a filter is selected
        photographerTag.addEventListener("click",() => {
            photographerTag.classList.toggle("activeTag")
            photographersSection.innerHTML = "";

            //Add the tag to the array
            if (photographerTag.classList.contains("activeTag")) {
                 tagFilterArray.push(tag);
                 console.log(tagFilterArray);
            } else {
                tagFilterArray.pop(tag);
                console.log(tagFilterArray);
            }
            //Check if the tag array have something in common
            if (!tagFilterArray.length) {
                thePhotographers.forEach((photographer) => {
                    const photographerModel = photographerFactory(photographer);
                    const userCardDOM = photographerModel.getUserCardDOM();
                    photographersSection.appendChild(userCardDOM);
                });

            } else if (tagFilterArray.length > 0 ) {
                thePhotographers.forEach((photographer) => {
                    if (tagFilterArray.every(r => photographer.tags.includes(r))) {
                        const photographerModel = photographerFactory(photographer);
                        const userCardDOM = photographerModel.getUserCardDOM();
                        photographersSection.appendChild(userCardDOM);
                    }
                });
            }
        });
    });
}


photographersDisplay();


    