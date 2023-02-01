// import { example, anotherExample } from '../src/data.js';
import { genero, sortMe, sortMe2 } from '../src/data.js';
import {dataSet, dataSet2} from "../test/test-data.js";
// Orden Alfabetico //
describe('sortMe', () => {
  it("is a function", () => {
    expect(typeof sortMe).toBe("function");
  });
  it('should return four name of characters in order for "A-Z"', () => {
    const resultado = sortMe(dataSet.characters)
    expect(resultado.length).toEqual(4)
    expect(resultado[0].name).toEqual("African prince");
    expect(resultado[1].name).toEqual("Agnes's son");
    expect(resultado[2].name).toEqual("Euan Abercrombie");
    expect(resultado[3].name).toEqual("Stewart Ackerley");
  });
});
describe('genero', () => {
  it("data to be truthy", () => {
    // Con toBeTruthy estamos diciendole a jest que esperamos que exista nuestro método
    expect(genero).toBeTruthy();
  });
  it("gender is 'Female' to be '[]'", () => {
    const result = genero(dataSet, "Female");
    expect(result).toEqual([]); // Ponemos 'Male' porque es el valor de nuestro objeto
  });
  it("gender is 'Male' to be '4'", () => {
    const result = genero(dataSet, "Male");
    expect(result.length).toEqual(4); // Ponemos 'Male' porque es el valor de nuestro objeto
    expect(result).toEqual(dataSet.characters);
  });
});
describe('sortMe2', () => {
  it("data to be truthy", () => {
    // Con toBeTruthy estamos diciendole a jest que esperamos que exista nuestro método
    expect(sortMe2).toBeTruthy();
  });
  it("data to be Z-A", () => {
    const result = sortMe2(dataSet.characters);
    expect(result.length).toEqual(4)
    expect(result[3].name).toEqual("African prince");
    expect(result[2].name).toEqual("Agnes's son");
    expect(result[1].name).toEqual("Euan Abercrombie");
    expect(result[0].name).toEqual("Stewart Ackerley");
  });
  it("data to be Z-A", () => {
    const result = sortMe2(dataSet2.characters);
    expect(result.length).toEqual(4)
    expect(result[3].name).toEqual("African prince");
    expect(result[2].name).toEqual("Agnes's son");
    expect(result[1].name).toEqual("Euan Abercrombie");
    expect(result[0].name).toEqual("Stewart Ackerley");
  });
});


