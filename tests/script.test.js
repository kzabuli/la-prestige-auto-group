const assert = require("assert");
const { formatPrice, CARS } = require("../js/script.js");

// formatPrice
assert.strictEqual(formatPrice(24900), "$24,900");
assert.strictEqual(formatPrice(1000000), "$1,000,000");
assert.strictEqual(formatPrice(0), "$0");

// CARS inventory data
assert.ok(Array.isArray(CARS) && CARS.length > 0, "CARS should be a non-empty array");

const validCategories = new Set(["sedan", "suv", "truck", "luxury"]);
CARS.forEach((car) => {
  assert.ok(car.make && car.model, `car is missing make/model: ${JSON.stringify(car)}`);
  assert.strictEqual(typeof car.price, "number", `car.price should be a number: ${JSON.stringify(car)}`);
  assert.ok(validCategories.has(car.category), `unexpected category "${car.category}" for ${car.make} ${car.model}`);
});

console.log(`All tests passed (${CARS.length} inventory items checked).`);
