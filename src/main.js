import { sortMe, sortMe2, genero } from './data.js';
import data from './data/harrypotter/data.js';
document.getElementById("btnsMenu").style.display="none";
document.getElementById("charactersP").style.display="none";
document.getElementById("pantallaPrincipal").style.display="block";
document.getElementById("housesP").style.display="none";
document.getElementById("novelsP").style.display="none";
document.getElementById("potionsP").style.display="none";
document.getElementById("spellsP").style.display="none";
// al dar clic en el botón houses me debe mostrar la pagina de houses
document.querySelector("#houses").addEventListener("click", housesPage);
document.querySelector("#housesMenu").addEventListener("click", housesPage);
function housesPage(){
  document.getElementById("btnsMenu").style.display="block";
  document.getElementById("housesP").style.display="block";
  document.getElementById("pantallaPrincipal").style.display="none";
  document.getElementById("charactersP").style.display="none";
  document.getElementById("novelsP").style.display="none";
  document.getElementById("potionsP").style.display="none";
  document.getElementById("spellsP").style.display="none";
}
// al dar clic en el botón characters me debe mostrar la pagina de characters
document.querySelector("#characters").addEventListener("click", charactersPage);
document.querySelector("#charactersMenu").addEventListener("click", charactersPage);
function charactersPage(){
  document.getElementById("btnsMenu").style.display="block";
  document.getElementById("charactersP").style.display="block";
  document.getElementById("pantallaPrincipal").style.display="none";
  document.getElementById("housesP").style.display="none";
  document.getElementById("novelsP").style.display="none";
  document.getElementById("potionsP").style.display="none";
  document.getElementById("spellsP").style.display="none";
}
// al dar clic en el botón novels me debe mostrar la pagina de novels
document.querySelector("#novels").addEventListener("click", novelsPage);
document.querySelector("#novelsMenu").addEventListener("click", novelsPage);
function novelsPage(){
  document.getElementById("btnsMenu").style.display="block";
  document.getElementById("novelsP").style.display="block";
  document.getElementById("pantallaPrincipal").style.display="none";
  document.getElementById("housesP").style.display="none";
  document.getElementById("charactersP").style.display="none";
  document.getElementById("potionsP").style.display="none";
  document.getElementById("spellsP").style.display="none";
}
// al dar clic en el botón potions me debe mostrar la pagina de potions
document.querySelector("#potions").addEventListener("click", potionsPage);
document.querySelector("#potionsMenu").addEventListener("click", potionsPage);
function potionsPage(){
  document.getElementById("btnsMenu").style.display="block";
  document.getElementById("potionsP").style.display="block";
  document.getElementById("pantallaPrincipal").style.display="none";
  document.getElementById("housesP").style.display="none";
  document.getElementById("charactersP").style.display="none";
  document.getElementById("novelsP").style.display="none";
  document.getElementById("spellsP").style.display="none";
}
// al dar clic en el botón spells me debe mostrar la pagina de spells
document.querySelector("#spells").addEventListener("click", spellsPage);
document.querySelector("#spellsMenu").addEventListener("click", spellsPage);
function spellsPage(){
  document.getElementById("btnsMenu").style.display="block";
  document.getElementById("spellsP").style.display="block";
  document.getElementById("pantallaPrincipal").style.display="none";
  document.getElementById("housesP").style.display="none";
  document.getElementById("charactersP").style.display="none";
  document.getElementById("novelsP").style.display="none";
  document.getElementById("potionsP").style.display="none";
}
//Función para traer información a pantalla (innerHTML hace el proceso de mostrar en pantalla)
const dataCharacters = data.characters
function paintData(dataCharacters){
  let contentCharacters = ''
  
  for (let index = 0; index < dataCharacters.length; index++) {
    const element = `<div class="contenedor_personajes"> 
    <div class="name"> <p> <b>Name: </b>${dataCharacters[index].name}<p>
    <div> <p> <b> Birth: </b> ${dataCharacters[index].birth}<p> </div>
    <div> <p> <b> Death: </b>${dataCharacters[index].death}<p> </div>
    <div> <p> <b> Species: </b> ${dataCharacters[index].species}<p> </div>
    <div> <p> <b> Gender: </b>${dataCharacters[index].gender}<p> </div>
    <div> <p> <b> Patronus:</b>${dataCharacters[index].patronus}<p> </div>
    <div> <p> <b> House: </b>${dataCharacters[index].house}<p> </div>
    <div> <p> <b> Books: </b>${dataCharacters[index].books_featured_in}<p> </div></div></div>`;
    contentCharacters = contentCharacters + element;
  }
  return contentCharacters
}
document.getElementById("casilla_characters").innerHTML = paintData(dataCharacters)
//Filtro para ordenar el listado de A-Z
document.getElementById("filtro_ascendente").addEventListener("click", function(){
  const orderedArrayAZ = sortMe(dataCharacters)
  document.getElementById("casilla_characters").innerHTML = paintData(orderedArrayAZ)
})
//Filtro para ordenar el listado de Z-A
document.getElementById("filtro_descendente").addEventListener("click", function(){
  const orderedArrayZA = sortMe2(dataCharacters)
  document.getElementById("casilla_characters").innerHTML = paintData(orderedArrayZA)
})
//Filtro por genero -- Femenino/Females
document.getElementById("filtro_females").addEventListener("click", function(){
  const filtroFem = genero(data, "Female")
  document.getElementById("casilla_characters").innerHTML = paintData(filtroFem)
})
//Filtro por genero -- Masculino/Males
document.getElementById("filtro_males").addEventListener("click", function(){
  const filtroMasc = genero(data, "Male")
  document.getElementById("casilla_characters").innerHTML = paintData(filtroMasc)
})
//Seleccionar a los personajes para ventana emergente
// al dar clic en un nombre se debe abrir un div. div,id: "open_dataCharacters"
const open = document.querySelectorAll(".links_characters");
const contenido = document.getElementById("open_dataCharacters");
for (let i = 0; i< open.length; i++){
  open[i].addEventListener("click", ()=>{
    contenido.classList.add("show");
  });
  const close = document.getElementById("botonCierre");
  close.addEventListener("click", ()=>{
    contenido.classList.remove("show");
  });
}


