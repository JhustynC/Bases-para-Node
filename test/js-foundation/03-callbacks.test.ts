import { getUserByID } from "./../../src/js-foundation/03-callbacks";
import { User } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.ts", () => {
  test("getUserById should return an error if user does not exits", (done: jest.DoneCallback) => {
    const id = 10;
    getUserByID(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  test("getUserById should return an error if user does not exits", (done: jest.DoneCallback) => {
    const id = 1;
    getUserByID(id, (err, user) => {
      expect(user).toEqual({ id: 1, name: "John Doe" });
      expect(err).toBe(`User not found with id ${id}`);
      done();
    });
  });
});
