import { getPokemonByID } from "./../../src/js-foundation/06-promises";

describe("js-foundation/06-promises", () => {
  test("getPokemonById should be return a pokemon name", async () => {
    const id = 1;
    const pokemon = await getPokemonByID(id);
    // console.log(pokemon);
    expect(pokemon).toBe("bulbasaur");
  });
});
