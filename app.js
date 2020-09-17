
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
console.log(tableauVillageois);
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

        genre.textContent = 'Sex:'+' ' + listeVillageois[i].gender;
        // insert le genre

        espece.textContent = 'Espece:'+' ' + listeVillageois[i].species;

        hobbies.textContent = 'Hobbies:'+' ' + listeVillageois[i].hobby;

        anniversaire.textContent = 'Anniverssaire:' +' ' + listeVillageois[i].birthday_string;

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

