import Totalizador from "./sumador";

describe("Sumar", () => {
  const total = new Totalizador();
  it("deberia ingresar la cantidad y mostrarla en pantalla", () => {
    expect(total.totalizador(3)).toEqual(3);
  });
});
