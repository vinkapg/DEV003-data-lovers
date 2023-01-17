export const personajes = (data,house) => {
  const datosCharacters = data.characters.filter(characters => (characters.house === house));
  return datosCharacters
}
