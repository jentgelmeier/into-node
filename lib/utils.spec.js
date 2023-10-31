const { getNewUser, mapObjectToArray } = require("./utils");

describe("mapObjectToArray()", function () {
  test("maps values to array using callback", function () {
    const result = mapObjectToArray({ age: 30, height: 65 }, function (k, v) {
      return v + 10;
    });

    expect(result).toEqual([40, 75]);
  });

  test("callback gets called", function () {
    const mockCb = jest.fn();
    const result = mapObjectToArray({ age: 30, height: 65 }, mockCb);

    expect(mockCb.mock.calls.length).toBe(2);
  });
});

describe("getNewUser()", function () {
  test("it gets user", async function () {
    const user = await getNewUser(1);
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
  });

  test("no user found", async function () {
    expect.assertions(1);

    try {
      const user = await getNewUser(10909);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
