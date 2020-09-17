
const section = document.querySelector('ul'); // Selection la section du HTML pour y insere la reponce

// url du json
var requestURL = 'villagers.json';

var request = new XMLHttpRequest();
// Cree une requete

request.open('GET', requestURL);
// Ouvrir la requete, methode 'get' afficher, Afficher quoi le 'villagers.json', si la reponce est vrai 'true' alors fait onload

request.responseType = 'json';
request.send();

request.onload = // La fonction laod est declenché quand une reponce du serveur a ete renvoyee avec succes

    function () {

        var tableauVillageois = request.response;
        // reponse requete stocker dans la variable tableauVillageois
        showVillagers(tableauVillageois);
        // cree l'obj showVillagers qui est = a la variable tableauVillageois

    }



function showVillagers(jsonObj) {
    // creation de la fonction avec parametre jsonObj

    var listeVillageois = jsonObj;
    // creation vairalbe en prenant le tableauj pesent dans le json pour pouvoir cree la boucle

    for (var i = 0; i < listeVillageois.length; i++) {
        // creation de la boucle 'length' sert a parcourir tt le liste

        // creation des element .........................................

        var myArticle = document.createElement('li');
        // cree un nouvelle article 'OBLIGATOIRE'

        var yourimg = document.createElement('img');
        // cree un url pour une image
        var name = document.createElement('h2');
        // cree un h2 pour metre le nom du villageois
        var espece = document.createElement('p');
        // Cree un paragraphe pour l'espece
        var anniversaire = document.createElement('p');
        // Cree un paragraphe pour l'anniversaire
        var hobbies = document.createElement('p');
        // Cree un paragraphe pour le hobies
        var genre = document.createElement('p');
        // Cree un paragraphe pour le genre M ou F

        // ............................................................

        // Attribuer une cle api a chaque element

        /*
      * Class Div parent myArticle
      */
        myArticle.className = 'bdr m-2 p-1 text-center'


        yourimg.src = listeVillageois[i].image_uri;
        // insert l'image 'image_uri du json
        yourimg.className = 'taille'
        name.textContent = listeVillageois[i].name.name_EUfr;
        // insert le nom du villageoi
        genre.textContent = 'Sex:' + ' ' + listeVillageois[i].gender;
        // insert le genre
        espece.textContent = 'Espece:' + ' ' + listeVillageois[i].species;
        hobbies.textContent = 'Hobbies:' + ' ' + listeVillageois[i].hobby;
        anniversaire.textContent = 'Anniverssaire:' + ' ' + listeVillageois[i].birthday_string;

        //...............................................................

        // relié le tout a l'article

        myArticle.appendChild(yourimg);
        // on ajoute l'image a article
        myArticle.appendChild(name);
        myArticle.appendChild(espece);
        myArticle.appendChild(anniversaire);
        myArticle.appendChild(hobbies);
        myArticle.appendChild(genre);

        // .............................................................

        // On relie le tout a la const section cree au tout debut
        section.appendChild(myArticle);
        // L'ordre d'ajout est important, c'est l'ordre dans lequel les éléments seront affichés dans le HTML.

    }

}
// ........................FILTRE...........................................................
function myFunction() {

    // Déclaration de nos variables
    var input, filter, ul, li, a, j, txtValue;

    // Récupération du input
    input = document.getElementById("myInput");

    // atribuons la variable filter a la récupération de notre valeur de notre input
    filter = input.value.toUpperCase();

    // On récupère la liste complète grace à ul
    ul = document.getElementById("myUL");

    //  On définit que li est un enfant de ul
    li = ul.getElementsByTagName("li");

    // Ici nous avons la boucle qui permet de trier nos résultat
    for (j = 0; j < li.length; j++) {

        // Ici on définit a comme étant l'enfant de li[i] Ici ils recherche des "h2"
        a = li[j].getElementsByTagName("h2")[0];

        // txtValue est egale au contenu de a
        txtValue = a.textContent || a.innerText;

        // Ici on check si notre txtValue est bien égale à filter
        if (txtValue.toUpperCase().indexOf(filter) > -1) {

            // On laisse notre class vide si ça match
            li[j].style.display = "";
        } else {
            // Sinon on les fait disparaitre
            li[j].style.display = "none";
        }
    }
}
// ........................FILTRE...........................................................
