const flavorInput = prompt(
  "Enter your froyo flavors (comma-separated):",
  "vanilla,vanilla,strawberry,coffee,coffee"
);

const flavorArray = flavorInput.split(",").map((flavor) => flavor.trim());

function countFroyoFlavors(flavors) {
  const flavorCounts = {};

  for (const flavor of flavors) {
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }

  return flavorCounts;
}

const orderSummary = countFroyoFlavors(flavorArray);

console.log("Froyo Order Summary:");
for (const flavor in orderSummary) {
  console.log(`${flavor}: ${orderSummary[flavor]}`);
}
