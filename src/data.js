export function sortMe(data) {
  const dataOrdenadaAZ = data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB){
      return -1;
    }
    if(nameA > nameB){
      return 1;
    }
    return 0;
  });
  return dataOrdenadaAZ
}
export function sortMe2(data) {
  const dataOrdenadaZA = data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB){
      return 1;
    }
    if(nameA > nameB){
      return -1;
    }
    return 0;
  });
  return dataOrdenadaZA
}
