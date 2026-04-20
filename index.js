const { calculate } = require("./calculator");

function printUsage() {
  console.log("Usage: node index.js <operation> <number1> <number2>");
  console.log("Operations: add (+), subtract (-), multiply (*), divide (/)");
  console.log("Example: node index.js add 10 5");
}

const [, , operation, first, second] = process.argv;

if (!operation || first === undefined || second === undefined) {
  printUsage();
  process.exit(1);
}

const a = Number(first);
const b = Number(second);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error("Please provide valid numbers.");
  process.exit(1);
}

try {
  const result = calculate(operation, a, b);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
