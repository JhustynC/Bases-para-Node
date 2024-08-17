import { hash } from "crypto";
import { http } from "./../../src/plugins/http-client.plugin";

describe("http-client.plugin", () => {
  const pokemonId = 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  test("http() should return a string", async () => {
    const data = await http.get("https://jsonplaceholder.typicode.com/todos/1");
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test("http() shuold have POST, PUT, and DELETE methods", () => {
    expect(http).toHaveProperty("put");
    expect(typeof http.put).toBe("function");
    
    expect(http).toHaveProperty("post");
    expect(typeof http.post).toBe("function");

    expect(http).toHaveProperty("delete");
    expect(typeof http.delete).toBe("function");
  })

  test("http() should not return a undefined", async () => {
    const response = await http.get(url);

    expect(response).toBeDefined();
    expect(response).toHaveProperty("name", "bulbasaur");
    expect(response).toHaveProperty("id", pokemonId);
  });

  test("http() should be return a JSON object", async () => {
    const { name: pokemonName } = await http.get(url);
    // console.log(pokemonName);
    expect(pokemonName).toBe("bulbasaur");
  });

  //Done es un callback que permite saber cuando evaluar el test y tambie cuando a fallado
  it("http() should return the correct data", (done) => {
    http
      .get(url)
      .then((response) => {
        // Asegúrate de que la respuesta no sea undefined o null
        expect(response).toBeDefined();

        // Asegúrate de que la respuesta tenga la estructura que esperas
        expect(response).toHaveProperty("name", "bulbasaur");
        expect(response).toHaveProperty("id", pokemonId);

        done(); // Indica que la prueba ha terminado
      })
      .catch((error) => {
        done(error); // Llama a done con un error para que la prueba falle si hay un problema
      });
  });

  test("http() should return the correct data", async () => {
    const response = await http.get(url);

    // Verificar directamente que la respuesta es la esperada
    expect(response).toEqual(
      expect.objectContaining({ name: "bulbasaur", id: pokemonId })
    );
  });
});
