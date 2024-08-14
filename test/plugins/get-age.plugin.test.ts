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

  test("getAge shoul return 0 years", () => {
    //Aqui es donde hacemos el mock del valor de retorno de una funcion para controlar el test
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);

    const birthdate = "1995-10-21";
    const age = getAge(birthdate);
    // console.log("This is the age:", age);

    expect(age).toBe(0);
    // console.log(spy);
  });
});
