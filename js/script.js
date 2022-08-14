// Déclaration imgHeader en tant que tableau 
var imgHeader = [];
var createText = [];

// Affectation des classes "imgHeader" à imgHeader
imgHeader = document.getElementsByClassName("imgHeader");
createText = document.getElementsByClassName("text-create");

// affectation d'un event au scroll qui déclenche une fonction
document.addEventListener('scroll',function()
{
    // Si la position Y au scroll est superieur à 1/10 de la taille d'ecran
    if(window.scrollY > window.innerHeight/10)
    {
        // Ajout de la class imgHide aux elements  ciblés
        imgHeader[0].classList.add('imgHide');
        imgHeader[1].classList.add('imgHide2');
    }
    else
    {
        // retrait de la class imgHide aux elements  ciblés
        imgHeader[0].classList.remove('imgHide');
        imgHeader[1].classList.remove('imgHide2');
    }

    if(window.scrollY >= window.innerHeight){
        for(i = 0 ; i < 4 ; i++ )
        {
            createText[i].classList.remove('create');

        }
        createText[0].classList.add('create1');
        createText[1].classList.add('create2');
        createText[2].classList.add('create3');
        createText[3].classList.add('create4');
    }
    else
    {
        for(i = 0 ; i < 4 ; i++ )
        {
            createText[i].classList.add('create');
        }
        createText[0].classList.remove('create1');
        createText[1].classList.remove('create2');
        createText[2].classList.remove('create3');
        createText[3].classList.remove('create4');
    }
})

