import { characteres } from "../../src/js-foundation/02-destructuring";

describe("02-destructuring", () => {
  test("Characters should containt Flash, Superman", () => {
    expect(characteres).toContain("Superman");
    expect(characteres).toContain("Flash");
  });

  test("First character should be Flash, and second Superman", () => {
    const [flash, _, __, superman] = characteres;
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
