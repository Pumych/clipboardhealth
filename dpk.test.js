const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const key = deterministicPartitionKey();
    expect(key).toBe("0");
  });

  it("Returns the literal '0' when given an empty string", () => {
    const key = deterministicPartitionKey("");
    expect(key).toBe("0");
  });

  it("Use partitionKey property of event if available", () => {
    expect(deterministicPartitionKey({ partitionKey: "mockPartitionKey"})).toBe("mockPartitionKey");
  });

  it("Hash the event if partitionKey property is not available", () => {
    const key = deterministicPartitionKey({ foo: "bar" });
    expect(key).toBe('a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8');
  });
});
