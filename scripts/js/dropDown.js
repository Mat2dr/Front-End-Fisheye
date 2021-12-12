const filterBtn = document.querySelector("#filterBtn");

function dropDownFilter() {
    filterBtn.addEventListener("change", (e) => {
        const value = e.target.value;
        const text = filterBtn.options[filterBtn.selectedIndex].text;
       
        if (value === 'pop') {
            console.log('pop');
        } 
        else if (value === 'date'){
            console.log('date');
        }
        else if (value === 'titre'){
            console.log('titre');
        }
      });

};

