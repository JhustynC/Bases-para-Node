import { buildMakePerson } from "./../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  const getUUID = () => "1234";
  const getAge = () => 35;

  test("builMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    const person = makePerson({ name: "John Done", birthday: "2002-03-09" });
    // console.log(person);
    expect(person).toEqual({
      id: "1234",
      name: "John Done",
      birthday: "2002-03-09",
      age: 35,
    });
  });
});
