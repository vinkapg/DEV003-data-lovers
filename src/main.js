import { sortMe, sortMe2, personajes } from './data.js';
import { femenino } from './data.js';
import data from './data/harrypotter/data.js';
console.log(personajes(data,"Hufflepuff"))
console.log(femenino(data,"Females"))



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

const dataCharacters = data.characters
function paintData(dataCharacters){
  
  let contentCharacters = ''
  for (let index = 0; index < dataCharacters.length; index++) {
    const element = `<a href="#" class="links_characters"><p data-idP=${dataCharacters[index].id}> ${dataCharacters[index].name}<p></a>`;
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
  const filtroFem = femenino(data, "Female")
  document.getElementById("casilla_characters").innerHTML = paintData(filtroFem)
})
//Filtro por genero -- Masculino/Males
document.getElementById("filtro_males").addEventListener("click", function(){
  const filtroMasc = femenino(data, "Male")
  document.getElementById("casilla_characters").innerHTML = paintData(filtroMasc)
})

//Seleccionar a los personajes para ventana emergente
// al dar clic en un nombre se debe abrir un div. div,id: "open_dataCharacters"

const open = document.querySelectorAll(".links_characters");
const contenido = document.getElementById("open_dataCharacters");

for (let i = 0; i< open.length; i++){
  open[i].addEventListener("click", ()=>{
    console.log(open[i])
    contenido.classList.add("show");
  });
  const close = document.getElementById("botonCierre");
  close.addEventListener("click", ()=>{
    contenido.classList.remove("show");
  });
}




// const tipoCasa = getElementById("idDealgunlugar")
// if(tipoCasa === "Gryffindor"){
//   return personajes(data,"Hufflepuff")
// }if (tipoCasa === "Hufflupuff"){
//   return XXX
// }










// let contentHouses = ''
// for (let index = 0; index < data.characters.length; index++) {
//   const element = `<p data-idP=${data.characters[index].id}> ${data.characters[index].name}<p>`;
//   contentHouses = contentHouses + element;
  
// } 

// document.getElementById("div-datahouses").innerHTML = contentHouses










//JSON.stringify(data.characters);



//mostrar el listado de nombres de los personajes

//mostrar toda la data de personajes 