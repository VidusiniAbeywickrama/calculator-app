const { calculate } = require("./calculator");

const UNARY_OPERATIONS = new Set(["sqrt", "squareroot", "square-root", "√"]);

function isUnaryOperation(operation) {
  return UNARY_OPERATIONS.has(String(operation).toLowerCase());
}

function printUsage() {
  console.log("Usage: node index.js <operation> <number1> [number2]");
  console.log("Operations: add (+), subtract (-), multiply (*), divide (/), sqrt (√)");
  console.log("Example: node index.js add 10 5");
  console.log("Example: node index.js sqrt 9");
}

const [, , operation, first, second] = process.argv;
const unaryOperation = isUnaryOperation(operation);

if (!operation || first === undefined || (!unaryOperation && second === undefined)) {
  printUsage();
  process.exit(1);
}

const a = Number(first);
const b = Number(second);

if (Number.isNaN(a) || (!unaryOperation && Number.isNaN(b))) {
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
