//Sélectionner un élément - Modifier le style d’un élément en JS
let titre_element = document.getElementById("titre");
titre_element.style.color = "white" 

//Sélectionner plusieurs éléments puis faire une boucle pour modifier chaque élément
let contact_elements = document.querySelectorAll("div.contact-container > div.image-container");
contact_elements.forEach(element =>
    {
    element.style.color ="red"
    element.style.fontWeight ="bold"
    })

/*
Ecouter un évènement
Insérer du contenu ou remplacer le contenu en JS
Modifier, supprimer, ou ajouter une class en JS
Réagir à un évènement
*/
let compte_element = document.getElementById("compte");
compte_element.addEventListener("click", (Event) => {
    console.log("my account clicked")
    let content_element = document.getElementById("content");
    content_element.innerHTML = '<h2 id="mon_compte_titre">Mon Compte</h2>'
    let account_title_element = document.getElementById("mon_compte_titre");
    account_title_element.classList.add("titre-content")
})
