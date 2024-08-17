import { describe, it } from "node:test";
import assert from "node:assert";

console.log(describe)
describe("ex 1", (t) => {
  it("ex 1.1", () => {
    const t1 = 123
    assert.toMatchSnapShot(t1);
  });

  it("ex 1.2", () => {
    const t2 = 456
    assert.toMatchSnapShot(t2);
  });
});

describe("ex 2", (t) => {
  it("ex 2.1", () => {
    const t3 = 789
    assert.toMatchSnapShot(t3);
  });
});