import { log } from "console";
import { getPokemonByID } from "./../../src/js-foundation/06-promises";

describe("js-foundation/06-promises", () => {
  test("getPokemonById should be return a pokemon name", async () => {
    const id = 1;
    const pokemonName = await getPokemonByID(id);
    // console.log(pokemon);
    expect(pokemonName).toBe("bulbasaur");
  });

  test("Should return an error if pokemon does not exist", async () => {
    expect.assertions(1);
    const id = -1;

    await expect(getPokemonByID(id)).rejects.toThrow(
      `Pokemon not found with id ${id}`
    );
  });
});
