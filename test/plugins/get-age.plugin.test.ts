import { getAge } from "../../src/plugins";

describe("plugins/get-age.plugins.ts", () => {
  test("getAge() Should return the age of a person", () => {
    const birthdate = "2002-03-09";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge() should return currrent age", () => {
    const birthdate = "2002-03-09";
    const age = getAge(birthdate);

    const caculateAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(caculateAge);
  });
});
