import { personajes } from './data.js';
import data from './data/harrypotter/data.js';
console.log(personajes(data,"Hufflepuff"))

document.getElementById("btnsMenu").style.display="none";
document.getElementById("charactersP").style.display="none";
document.getElementById("pantallaPrincipal").style.display="block";
document.getElementById("housesP").style.display="none";       
document.getElementById("novelsP").style.display="none";
document.getElementById("potionsP").style.display="none";
document.getElementById("spellsP").style.display="none";
// al dar clic en el botón characters me debe mostrar la pagina de los personajes 
document.querySelector("#houses").addEventListener("click", housesPage);
function housesPage(){
    document.getElementById("btnsMenu").style.display="block";
    document.getElementById("housesP").style.display="block";
    document.getElementById("pantallaPrincipal").style.display="none";
    document.getElementById("charactersP").style.display="none";       
    document.getElementById("novelsP").style.display="none";
    document.getElementById("potionsP").style.display="none";
    document.getElementById("spellsP").style.display="none";
}
document.querySelector("#characters").addEventListener("click", charactersPage);
function charactersPage(){
    document.getElementById("btnsMenu").style.display="block";
    document.getElementById("charactersP").style.display="block";
    document.getElementById("pantallaPrincipal").style.display="none";
    document.getElementById("housesP").style.display="none";       
    document.getElementById("novelsP").style.display="none";
    document.getElementById("potionsP").style.display="none";
    document.getElementById("spellsP").style.display="none";
}


//con el listado de sus nombres